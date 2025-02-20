import { useFetch } from "../components/UseFetch";
import { useEffect } from "react";

const CSRFToken = async () => {
    try {
        const response = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            credentials: "include", // Importante para enviar y recibir cookies
        });

        if (!response.ok) throw new Error("Error al obtener el token CSRF");

        console.log("Token CSRF obtenido con éxito");
    } catch (error) {
        console.error("Error al obtener el token CSRF:", error);
    }
};

export default CSRFToken;
