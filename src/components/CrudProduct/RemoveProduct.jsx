import { useState } from "react";

const RemoveProduct = ({ productId, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8000/api/productos/${productId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Error al eliminar producto");
            }

            onClose(productId);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 bg-opacity-50">
            <div className="bg-white p-5 rounded-2xl shadow-2xl w-full max-w-md border border-gray-300">
                <div className="flex justify-end">
                    <button onClick={() => onClose(null)} className="text-gray-400 cursor-pointer hover:text-gray-900">
                        ✕
                    </button>
                </div>

                <div className="text-center">
                    <div className="flex justify-center items-center">
                        <div className="bg-red-600 w-min rounded-full p-3">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <h3 className="text-lg font-medium text-gray-700 mt-5 mb-4">
                        ¿Estás seguro de que deseas eliminar este producto?
                    </h3>

                    {error && <p className="text-red-500">{error}</p>}

                    <div className="flex justify-between">
                        <button onClick={handleDelete} disabled={loading}
                            className="flex-1 text-white bg-red-600 p-2 rounded-lg hover:bg-red-800 transition">
                            {loading ? "Eliminando..." : "Sí, borrar"}
                        </button>

                        <button onClick={() => onClose(null)}
                            className="flex-1 ml-2 bg-gray-200 text-gray-900 p-2 rounded-lg hover:bg-gray-300 transition">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveProduct;
