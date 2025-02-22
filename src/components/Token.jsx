import axios from "axios";

const CSRFToken = async () => {
    try {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        });
        console.log("Token CSRF obtenido con éxito");
    } catch (error) {
        console.error("Error al obtener el token CSRF:", error);
    }
};

export default CSRFToken;
