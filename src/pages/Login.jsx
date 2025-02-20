import { useState } from "react";
import axios from "axios";
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
            const response = await axios.post("https://adrian.informaticamajada.es/api/login", formData, {
                headers: {
                    "Accept": "application/json",
                },
                withCredentials: true, // Importante si usas cookies para autenticación
                withXSRFToken: true,
            });

            console.log("Sesión iniciada con éxito:", response.data);
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
