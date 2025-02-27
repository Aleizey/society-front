import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CrudManager from "../hooks/CrudManager";
import PulseElements from "../components/PulseElements";

const Marketplace = () => {
    const [page, setPage] = useState(1);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { views } = CrudManager({ url: `https://adrian.informaticamajada.es/api/productos?page=${page}` });

    useEffect(() => {
        views({
            setData: (data) => setProductos((prev) => [...prev, ...data]),
            setLoading,
            setErrors: setError
        });
    }, [page]);

    if (error) return <p>Error</p>;
    if (loading && productos.length === 0) return <PulseElements />;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12 lg:px-8">
                {productos.map((product) => (
                    <div key={product.id} className="flex flex-col overflow-hidden relative">
                        <div className="h-full w-full relative overflow-hidden">
                            <Link to={`/producto/${product.id}`} className="hover-shop">
                                <img
                                    className="object-cover h-full w-full mb-2 relative"
                                    src="https://nude-project.com/cdn/shop/files/MILESTONES_WINDBREAKER_BLUE_front_800x.jpg?v=1738834825"
                                    alt=""
                                />
                            </Link>
                            <div className="bg-white rounded-full absolute top-0 right-0 mt-2 mr-2 p-2 shadow-2xl hover:bg-gray-700 hover:text-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col text-center">
                            <p className="text-md font-medium overflow-hidden text-nowrap">{product.nombre.toUpperCase()}</p>
                            <p className="text-xs overflow-hidden text-nowrap">
                                <span className="font-medium">{product.precio}</span> EUR
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => setPage((prev) => prev + 1)}
                className="cursor-pointer bg-sky-200 rounded-full px-10 text-sky-600 m-10 p-1.5 mt-4 block mx-auto"
            >
                Cargar más
            </button>

            {loading && <PulseElements />}
        </>
    );
};

export default Marketplace;
