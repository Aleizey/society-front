import { useFetch } from "../components/UseFetch";

const Logout = () => {
    const { refetch, loading, error } = useFetch("http://localhost:8000/api/logout", "POST");

    return (
        <button onClick={refetch} disabled={loading}>
            {loading ? "Cerrando sesión..." : "Cerrar sesión"}
        </button>
    );
};

export default Logout;
