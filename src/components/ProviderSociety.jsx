import { useState, useEffect, createContext } from 'react';
import CrudManager from '../hooks/CrudManager';
import Loading from './Loading';
import PulseElement from './PulseElements';

export const SocietyContext = createContext();

const ProviderSociety = ({ children }) => {

    const { views } = CrudManager({ url: 'https://adrian.informaticamajada.es/api/asociaciones' });

    const [asociaciones, setAsociaciones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        views({ setData: setAsociaciones, setLoading, setErrors: setError });
    }, []);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    return (
        <SocietyContext.Provider value={{ asociaciones }}>
            {children}
        </SocietyContext.Provider>
    );
};

export default ProviderSociety;
