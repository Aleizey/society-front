import { Link } from "react-router";
import { useFetch } from "../components/UseFetch";

const Marketplace = () => {

    const { datos: productos, error: errorProductos, loading: loadingProductos } = useFetch("https://adrian.informaticamajada.es/api/productos", "GET");

    const { datos: imagenProduct, error: errorImagenProduct, loading: loadingImagenProduct } = useFetch("https://adrian.informaticamajada.es/api/imagenes", "GET");

    if (errorProductos, errorImagenProduct) return <p> Error </p>;
    if (loadingProductos, loadingImagenProduct) return <p> Cargando... </p>;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 space-y-15 mt-12 lg:px-8 ">
                {productos.map(product => {
                    return (

                        <div className="flex flex-col overflow-hidden relative">
                            <p>{product.id}</p>
                            <div className="h-full w-full relative overflow-hidden">

                                <div className="hover-shop">
                                    {imagenProduct.filter(image => image.producto_id === product.id).map(image => (

                                        <>
                                            {/* cambiamos el url cuando tengamos url reales  */}
                                            <img className="object-cover h-full w-full mb-2 relative rounded-3xl" src="https://static.pullandbear.net/assets/public/eceb/8c6d/c795462c88b8/0b7b5dbf2d24/03558514600-A7M/03558514600-A7M.jpg?ts=1736846784962&w=836&f=auto" alt={image.id} />
                                        </>

                                    ))}

                                </div>

                                <div className=" bg-white rounded-full absolute top-0 right-0 mt-2 mr-2 p-2 shadow-2xl hover:bg-gray-700 hover:text-white transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col ">
                                <div className="grid grid-cols-2 justify-between items-center ">
                                    <div className="text-center">
                                        <p className="text-lg text-ellipsis overflow-hidden text-nowrap">{product.nombre.toUpperCase()}</p>
                                    </div>
                                    <p className="text-md text-end text-ellipsis overflow-hidden text-nowrap"> <span className="font-medium">{product.precio}</span> EUR</p>
                                </div>
                                <p className="text-sm text-ellipsis text-nowrap overflow-hidden">{product.descripcion}</p>

                                <div className="hidden flex flex-row overflow-hidden space-x-1 text-white font-bold ">
                                    <Link className="p-1 px-2 rounded-3xl rounded-r-none bg-sky-700 w-50 text-ellipsis overflow-hidden text-nowrap " to={`/asociaciones/${product.id}/tienda`}> Ir Tienda Asociacion </Link>
                                    <Link className="p-1 px-2 rounded-3xl rounded-l-none bg-sky-700 w-50 text-ellipsis overflow-hidden text-nowrap " to={`/asociacion/${product.id}`}> Ir Asociacion </Link>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div >
        </>
    )
}

export default Marketplace;