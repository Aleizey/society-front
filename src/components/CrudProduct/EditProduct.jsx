import { useState } from "react";

function EditProduct({ productFull, onClose }) {
    const [product, setProduct] = useState({
        nombre: productFull.nombre,
        descripcion: productFull.descripcion,
        precio: productFull.precio,
        stock: productFull.stock,
        isRopa: productFull.isRopa,
        asociacion_id: productFull.asociacion_id
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        setProduct((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(product).forEach(([key, value]) => {
            if (value !== null && value !== undefined && value !== "") {
                formData.append(key, key === "isRopa" ? (value ? 1 : 0) : value);
            }
        });

        try {
            const response = await fetch(`https://adrian.informaticamajada.es//api/productos/${productFull.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) throw new Error("Error al editar el producto");

            const data = await response.json();
            console.log("Producto editado con éxito:", data);
            alert("Producto editado con éxito!");
            onClose();
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al editar el producto.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 bg-opacity-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-300">
                <div className="flex justify-end">
                    <button onClick={() => onClose(null)} className="text-gray-400 cursor-pointer hover:text-gray-900">
                        ✕
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-3xl font-extrabold mb-6 text-center text-sky-700">Editar Producto</h2>

                    {["nombre", "descripcion", "precio", "stock"].map((field) => (
                        <div className="mb-4" key={field}>
                            <label htmlFor={field} className="block text-gray-700 font-semibold mb-1">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <input
                                type={field === "descripcion" ? "textarea" : field === "precio" || field === "stock" ? "number" : "text"}
                                id={field}
                                name={field}
                                value={product[field]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                                required={["nombre", "precio", "stock"].includes(field)}
                            />
                        </div>
                    ))}

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="isRopa"
                            name="isRopa"
                            checked={product.isRopa}
                            onChange={handleChange}
                            className="mr-2 accent-sky-500"
                        />
                        <label htmlFor="isRopa" className="text-gray-800 font-semibold">¿Es ropa?</label>
                    </div>

                    {/* Selects de talla y color (solo si es ropa) */}
                    {product.isRopa && (
                        <>
                            {[
                                { label: "Talla", name: "size", options: ["S", "M", "L", "XL"] },
                                { label: "Color", name: "color", options: ["Rojo", "Azul", "Verde", "Negro"] },
                            ].map(({ label, name, options }) => (
                                <div className="mb-4" key={name}>
                                    <label htmlFor={name} className="block text-gray-800 font-semibold mb-1">{label}</label>
                                    <select
                                        id={name}
                                        name={name}
                                        value={product[name]}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                                    >
                                        <option value="">Selecciona {label.toLowerCase()}</option>
                                        {options.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            ))}
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
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-500 text-white cursor-pointer p-3 rounded-lg hover:bg-sky-600 transition duration-300 font-semibold"
                    >
                        Editar Producto
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;
