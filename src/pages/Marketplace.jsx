
import { useContext } from "react";
import { SocietyContext } from "../components/ProviderSociety";
import { Link } from "react-router";

const Marketplace = () => {

    // const { datos, error, loading } = useFetch("https://adrian.informaticamajada.es/api/productos", "GET");

    // if (error) return <p> Error </p>;
    // if (loading) return <p> Cargando </p>;

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
                {asociaciones.map(e => {
                    return (
                        
                            <div className="bg-red-800 w-full h-[500px] rounded-2xl">
                           <Link className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white" to={`/asociaciones/${e.id}/tienda`}> Go Tienda Asociacion </Link>
                           <p></p>
                           <Link className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white" to={`/asociacion/${e.id}`}> Go Asociacion </Link>
                            </div>
                        
                    )
                })}

            </div>
        </>
    )
}

export default Marketplace;