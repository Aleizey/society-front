import { useState } from "react";
import CrudManager from "../../hooks/CrudManager";

const RemoveProduct = ({ productId, onClose }) => {
    const { deletes } = CrudManager({ url: "https://adrian.informaticamajada.es/api/productos" });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        setLoading(true);
        setError(null);

        try {
            await deletes({ setErrors: setError, setStatus: setLoading, ElementId: productId });
            onClose();
        } catch (err) {
            console.error("Error al eliminar:", err);
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
                            className="flex-1 text-white bg-red-600 text-center flex justify-center items-center p-2 rounded-lg hover:bg-red-800 transition">
                            {loading ? (
                                <svg className="size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : "Sí, borrar"}
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
