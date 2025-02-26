import axios from 'lib/axios'

export default function CrudManager({ url }) {

    const headers = {
        'Content-Type': 'application/json',
    };

    const views = ({ setData, setLoading, setErrors }) => {
        setLoading(true);
        axios
            .get(url)
            .then(res => { setData(res.data.data ?? res.data); })
            .catch(error => {
                setErrors(
                    Object.values(error.response.data.errors).flat());
            })
            .finally(() => { setLoading(false); });
    };

    const creates = ({ setErrors, setStatus, ...props }) => {
        console.log("comenzando...")
        console.log("datos para crear:", props.product)
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
        setStatus(null);
        axios
            .delete(`${url}/${ElementId}`,)
            .then(res => res.data)
            .catch(error => {
                setErrors(
                    Object.values(error.response.data.errors).flat());
            });
    };

    return {
        views,
        creates,
        updates,
        deletes
    };

}; 