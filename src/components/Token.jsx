import axios from "axios";

const CSRFToken = async () => {
    try {
        const response = await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
            headers: {
                "Accept": "application/json",
            },
            withCredentials: true, // Importante si usas cookies para autenticación
            withXSRFToken: true,
        });
        console.log("Token CSRF obtenido con éxito:");
        console.log(response)
    } catch (error) {
        console.error("Error al obtener el token CSRF:", error);
    }
};

export default CSRFToken;
