
import { useContext } from "react";
import { SocietyContext } from "../components/ProviderSociety";
import { useFetch } from "../components/UseFetch";
import { Link } from "react-router";

const Marketplace = () => {

    const { datos, error, loading } = useFetch("https://adrian.informaticamajada.es/api/productos", "GET");

    if (error) return <p> Error </p>;
    if (loading) return <p> Cargando </p>;

    const { asociaciones } = useContext(SocietyContext);

    return (
        <>
            {/* <div className=" mt-22 w-full h-[91vh] relative overflow-hidden flex justify-center items-center">
                <span className="text-5xl text-white font-serif font-bold bottom-0 left-0 mb-2 ms-2 absolute z-2">
                    ROPA STYLE
                </span>
                <img className="hover:brightness-75 transition-all absolute w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2016/11/19/20/17/catwalk-1840941_1280.jpg" alt="" />
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-20 mt-30 lg:px-20 ">
                {datos.map(e => {
                    return (

                        <div className="bg-white w-full h-[500px] rounded-2xl shadow-lg flex flex-col justify-between p-6 space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="flex flex-col items-center space-y-2">
                                <h2 className="text-2xl font-bold text-gray-800">{e.nombre}</h2>
                                <p className="text-gray-600">Descripción breve del producto.</p>
                            </div>
                            <div className="flex justify-between items-center w-full mt-auto">
                                <Link
                                    className="bg-blue-500 px-6 py-2 font-semibold text-white rounded-md shadow-md transition duration-300 hover:bg-blue-600"
                                    to={`/asociaciones/${e.asociacion_id}/tienda`}
                                >
                                    Go Tienda Asociacion
                                </Link>
                                <Link
                                    className="bg-blue-500 px-6 py-2 font-semibold text-white rounded-md shadow-md transition duration-300 hover:bg-blue-600"
                                    to={`/asociacion/${e.asociacion_id}`}
                                >
                                    Go Asociacion
                                </Link>
                            </div>
                            <Link
                                className="bg-green-500 px-6 py-2 font-semibold text-white rounded-md shadow-md transition duration-300 hover:bg-green-600 mt-4"
                                to={`/producto/${e.id}`}
                            >
                                <h2 className="text-lg font-bold">Ver Producto</h2>
                            </Link>
                        </div>




                    )
                })}

            </div>
        </>
    )
}

export default Marketplace;