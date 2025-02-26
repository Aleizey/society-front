import axios from 'lib/axios'

export default function CrudManager({ url }) {

    const headers = {
        'Content-Type': 'application/json',
        "Content-Type": "multipart/form-data",
    };

    const views = ({ setData, setLoading, setErrors, navigate }) => {
        setLoading(true);
        axios
            .get(url)
            .then(res => { setData(res.data.data ?? res.data); })
            .catch(error => {
                setErrors(
                    Object.values(error.response.data.errors).flat());
                navigate("/");
            })
            .finally(() => { setLoading(false); });
    };

    const creates = ({ setErrors, setStatus, ...props }) => {
        console.log("comenzando...")
        console.log("datos para crear:", props.data)
        setErrors([]);
        setStatus(null);
        return axios
            .post(url, props.data, headers)
            .then((res) => {
                setStatus("success");
                return res.data;
            })
            .catch((error) => {
                if (error.response && error.response.data.errors) {
                    setErrors(Object.values(error.response.data.errors).flat());
                }
                setStatus("error");
                throw error;
            });
    };


    const updates = async ({ setErrors, setStatus, ...props }) => {
        console.log("comenzando...")
        console.log("datos para actualizar:", props.product)
        setErrors([]);
        setStatus(null);
        axios
            .put(url, props.product,)
            .then(res => res.data)
            .catch(error => {
                setErrors(
                    Object.values(error.response.data.errors).flat());
            });
    };

    const deletes = async ({ setErrors, setStatus, ElementId }) => {
        setErrors([]);
        setStatus(true); // Iniciar el estado de carga

        try {
            await axios.delete(`${url}/${ElementId}`);
        } catch (error) {
            setErrors(error.response?.data?.errors ? Object.values(error.response.data.errors).flat() : ["Error desconocido"]);
        } finally {
            setStatus(false); // Asegurar que el estado se actualice después de la petición
        }
    };

    return {
        views,
        creates,
        updates,
        deletes
    };

}; 