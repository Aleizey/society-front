import { useCallback, useEffect, useState } from "react";

export const useFetch = (url, method = null) => {

    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const fetchData = useCallback(async () => {
        setLoading(true);
        fetch(url, {
            method: method,
            credential: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            }
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