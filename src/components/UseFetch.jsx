import { useCallback, useEffect, useState } from "react";

export const useFetch = (url, method, body = null) => {

    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        fetch(url, {
            method: method,
            body: body
        })
            .then(response => response.json())
            .then(data => {
                setDatos(data.data);
                setLoading(false)
            })
            .catch(err => {
                setError(err.message);
                setLoading(false)
            })
    })

    useEffect(() => {
        fetchData();
    }, []);

    return { datos, loading, error };

}