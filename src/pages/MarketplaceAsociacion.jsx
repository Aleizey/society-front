import { useFetch } from "../components/UseFetch";
import { Link } from "react-router";
import { useParams } from "react-router";

const Marketplace = () => {

    const params = useParams();
    const { datos, error, loading } = useFetch(`https://adrian.informaticamajada.es/api/asociaciones/${params.id}/productos`, "GET");

    if (error) return <p> Error </p>;
    if (loading) return <p> Cargando </p>;

    console.log(datos)

    return (
        <>
            {/* <div className=" mt-22 w-full h-[91vh] relative overflow-hidden flex justify-center items-center">
                <span className="text-5xl text-white font-serif font-bold bottom-0 left-0 mb-2 ms-2 absolute z-2">
                    ROPA STYLE
                </span>
                <img className="hover:brightness-75 transition-all absolute w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2016/11/19/20/17/catwalk-1840941_1280.jpg" alt="" />
            </div> */}
            <div>
            <Link className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white" to={`/asociacion/${params.id}`}> Go Asociacion </Link>
            <br />
            <Link className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white" to={`/carrito`}> Go Carrito </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-20 mt-30 lg:px-20 ">
                {datos.map(e => {
                    return (
                        
                            <div className="bg-red-800 w-full h-[500px] rounded-2xl">
                            <Link className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white" to={`/producto/${e.id}`}> Go Producto </Link>
                            </div>
                        
                    )
                })}

            </div>
        </>
    )
}

export default Marketplace;