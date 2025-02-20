import { useState } from "react";
import CSRFToken from "../components/Token";

const Login = () => {
    const [credenciales, setCredenciales] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(credenciales).forEach(([key, value]) => {
            formData.append(key, value);
        });

        CSRFToken(formData);

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
                credentials: "include", // Importante si usas cookies para autenticación
            });

            if (!response.ok) throw new Error("Error al iniciar sesión");

            const data = await response.json();
            console.log("Sesión iniciada con éxito:", data);
            alert("Sesión iniciada con éxito!");
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al iniciar sesión.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={credenciales.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={credenciales.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;