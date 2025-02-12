import { createContext } from 'react';
// import ApiLoading from './ApiLoading';
// import ApiError from './ApiError';
import { useFetch } from './UseFetch';

export const SocietyContext = createContext();

const ProviderSociety = ({ children }) => {
    const { datos, error, loading } = useFetch("https://adrian.informaticamajada.es/api/asociaciones", "GET");
    const asociaciones = datos;

    console.log(error)
    console.log(loading)
    // if (error) return <ApiError />;
    // if (loading) return <ApiLoading />;

    return (
        <SocietyContext.Provider value={{ asociaciones }}>
            {children}
        </SocietyContext.Provider>
    );
}

export default ProviderSociety;
