import { useState } from "react";

function AddProduct({ onClose, asociacionId }) {
    const [isClothing, setIsClothing] = useState(false);
    const [product, setProduct] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        isRopa: 0,
        asociacion_id: asociacionId ? asociacionId : ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setProduct({
            ...product,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        });
        if (name === "isClothing") setIsClothing(checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(product).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch("https://adrian.informaticamajada.es/api/productos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) throw new Error("Error al enviar el producto");

            const data = await response.json();
            console.log("Producto creado con éxito:", data);
            alert("Producto creado con éxito!");
            onClose();
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al crear el producto.");
        }
    };

    return (
        <div className="fixed inset-0 z-200 flex justify-center items-center bg-black/80 bg-opacity-50 select-none">

            <div className="bg-white p-8 rounded-2xl shadow-2xl md:max-w-3xl overflow-hidden md:scale-100 scale-75 border border-gray-300">
                <div className="flex flex-row justify-between mb-6 items-center">
                    <h2 className="text-xl font-medium text-center text-sky-300">Crear Producto</h2>
                    <button onClick={() => onClose(null)} className="text-gray-400 cursor-pointer hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>

                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {[
                        { label: "Nombre", name: "nombre", type: "text", required: true },
                        { label: "Descripción", name: "descripcion", type: "textarea", rows: 3 },
                        { label: "Precio", name: "precio", type: "number", required: true },
                        { label: "Stock", name: "stock", type: "number", required: true },
                        ...(asociacionId ? [] : [{ label: "Asociación", name: "asociacion_id", type: "number", required: true }])

                    ].map(({ label, name, type, ...props }) => (
                        <div className="mb-4" key={name}>
                            <label htmlFor={name} className="block text-gray-400 font-semibold mb-1">{label}</label>
                            {type === "textarea" ? (
                                <textarea
                                    id={name}
                                    name={name}
                                    value={product[name]}
                                    onChange={handleChange}
                                    className="w-full p-2 border-b-2 border-gray-400 bg-gray-100 focus:ring-2 focus:ring-sky-500"
                                    {...props}
                                />
                            ) : (
                                <input
                                    type={type}
                                    id={name}
                                    name={name}
                                    value={product[name]}
                                    onChange={handleChange}
                                    className="w-full p-2 border-b-2 bg-gray-100 border-gray-400 focus:ring-2 focus:ring-sky-500"
                                    {...props}
                                />
                            )}
                        </div>
                    ))}
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="isClothing"
                            name="isClothing"
                            checked={isClothing}
                            onChange={handleChange}
                            className="mr-2 accent-sky-500"
                        />
                        <label htmlFor="isClothing" className="text-gray-800 font-semibold">¿Es ropa?</label>
                    </div>
                    {isClothing && (
                        <>
                            <div className="flex md:flex-row justify-between space-x-2">
                                {[
                                    { label: "Talla", name: "size", options: ["S", "M", "L", "XL"] },
                                    { label: "Color", name: "color", options: ["Rojo", "Azul", "Verde", "Negro"] },
                                ].map(({ label, name, options }) => (
                                    <div className="mb-4 w-full" key={name}>
                                        <label htmlFor={name} className="block  text-gray-800 font-semibold mb-1">{label}</label>
                                        <select
                                            id={name}
                                            name={name}
                                            value={product[name]}
                                            onChange={handleChange}
                                            className="w-full p-2 border-b-2 border-gray-400 bg-gray-100 focus:ring-2 focus:ring-sky-500"
                                        >
                                            <option value="">Selecciona {label.toLowerCase()}</option>
                                            {options.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-800 font-semibold mb-1">Imagen</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full p-2 border-b-2 border-gray-400 bg-sky-100  focus:ring-2 focus:ring-sky-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition duration-300 font-semibold"
                    >
                        Crear Producto
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
