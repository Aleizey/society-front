import { useState } from "react";
import axios from "axios";

const Logout = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogout = async () => {
        setLoading(true);
        setError(null);
        try {
            await axios.post("https://adrian.informaticamajada.es/api/logout", {}, {
                withCredentials: true,
                withXSRFToken: true,
            });
            alert("Sesión cerrada con éxito");
        } catch (err) {
            setError("Hubo un problema al cerrar sesión");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleLogout} disabled={loading}>
            {loading ? "Cerrando sesión..." : "Cerrar sesión"}
        </button>
    );
};

export default Logout;