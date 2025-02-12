import { createContext, useState } from 'react';
// import ApiLoading from './ApiLoading';
// import ApiError from './ApiError';
import { useFetch } from './UseFetch';

export const SocietyContext = createContext();

const ProviderSociety = ({ children }) => {
    const { datos, error, loading } = useFetch("https://api.tvmaze.com/shows");

    console.log(error)
    console.log(loading)
    // if (error) return <ApiError />;
    // if (loading) return <ApiLoading />;

    return (
        <SocietyContext.Provider value={{ datos }}>
            {children}
        </SocietyContext.Provider>
    );
}

export default ProviderSociety;
