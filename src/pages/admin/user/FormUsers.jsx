import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const FormUsers = ({ user, onSubmit, status, errors }) => {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        telf: user?.telf || "",
        direccion: user?.direccion || "",
        admin: user?.admin || false,
    });

    useEffect(() => {
        setFormData({
            name: user?.name || "",
            email: user?.email || "",
            telf: user?.telf || "",
            direccion: user?.direccion || "",
            admin: user?.admin || false,
        });
    }, [user]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
        navigate(`/admin/users`);

    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                {errors && errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                {errors && errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="telf" className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input
                    id="telf"
                    name="telf"
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    value={formData.telf}
                    onChange={handleChange}
                    placeholder="Teléfono"
                />
                {errors && errors.telf && <p className="text-red-500">{errors.telf}</p>}
            </div>

            <div>
                <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
                <input
                    id="direccion"
                    name="direccion"
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    value={formData.direccion}
                    onChange={handleChange}
                    placeholder="Dirección"
                />
                {errors && errors.direccion && <p className="text-red-500">{errors.direccion}</p>}
            </div>

            <div>
                <label htmlFor="admin" className="block text-sm font-medium text-gray-700">Admin</label>
                <input
                    type="checkbox"
                    id="admin"
                    name="admin"
                    className="mt-1"
                    checked={formData.admin}
                    onChange={handleChange}
                />
            </div>

            <div className="flex items-center gap-4">
                <button type="submit" className="px-4 w-full py-2 bg-sky-600 text-white font-medium rounded-md">
                    Enviar
                </button>
            </div>

            {status && <p className="text-green-500">{status}</p>}
        </form>
    );
};

export default FormUsers;
