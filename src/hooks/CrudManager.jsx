import axios from 'lib/axios'

export default function CrudManager({ url }) {

    const credential = {
        'Content-Type': 'application/json',

    }

    const views = ({ setData, setLoading, setErrors }) => {
        setLoading(true);
        axios
            .get(url)
            .then(res => { setData(res.data.data); })
            .catch(error => {
                setErrors(
                    Object.values(error.response.data.errors).flat());
            })
            .finally(() => { setLoading(false); });
    };

    const creates = async ({ setErrors, setStatus, ...props }) => {
        setErrors([]);
        setStatus(null);
        axios
            .post(url, props, credential)
            .then(res => res.data)
            .catch(error => {
                setErrors(
                    Object.values(error.response.data.errors).flat());
            });
    };

    const updates = async ({ setErrors, setStatus, ...props }) => {
        console.log("comenzando...")
        console.log("datos para actualizar:", props.product)
        setErrors([]);
        setStatus(null);
        axios
            .put(url, props.product, credential)
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
            .delete(`${url}/${ElementId}`, credential)
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