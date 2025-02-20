import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SocietyContext = createContext();

const ProviderSociety = ({ children }) => {
    const [asociaciones, setAsociaciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAsociaciones = async () => {
            try {
                const response = await axios.get("https://adrian.informaticamajada.es/api/asociaciones",{},{
                    withCredentials: true,
                withXSRFToken: true,
                });
                setAsociaciones(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAsociaciones();
    }, []);

    if (error) return <div>Error al cargar los datos</div>;
    if (loading) return <div>Cargando...</div>;

    return (
        <SocietyContext.Provider value={{ asociaciones }}>
            {children}
        </SocietyContext.Provider>
    );
};

export default ProviderSociety;
