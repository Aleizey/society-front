import { useParams } from "react-router";
import { useFetch } from "../components/UseFetch";
import ImagenesAsociacion from "../components/ImagenesAsociacion";
import { Link } from "react-router";

const AsociacionPage = () => {

    const params = useParams();
    const { datos, error, loading } = useFetch(`https://adrian.informaticamajada.es/api/asociaciones/${params.id}`, "GET");
    console.log(datos)
    if (error) return <p> Error </p>;
    if (loading) return <p> Cargando </p>;

    return (
        <>
            <div class="w-full flex flex-col md:flex-row py-24 ">
                <div class="w-full md:w-3/5 mx-auto flex flex-col md:flex-row">
                    <div class="w-full relative md:w-1/2 items-center h-auto md:py-12 flex">
                        <div class="absolute bg-[url(https://th.bing.com/th/id/R.af195b7ead93220b6dc892ac72f41806?rik=MrXuMEkNnEqLvw&pid=ImgRaw&r=0)] w-[85%] h-[70%] right-0 bg-cover"></div>
                        <div class="relative left-0 w-[90%] min-h-64">
                            <div class="relative w-[12%] min-h-64 [writing-mode:vertical-lr] text-2xl rotate-180 text-white  py-20 text-center"> <p className="bg-sky-400"> {datos.nombre} </p> </div>
                        </div>
                    </div>
                    <div class="w-full relative md:w-1/2 justify-items-center h-auto md:py-8 pl-6 flex flex-col my-auto">
                        <div class="flex flex-row md:!flex-col mt-4 md:!mt-0">
                            <div class="w-11/12">
                                <h1 class="text-3xl mt-2 md:text-xl font-semibold text-gray-800 dark:text-black">
                                    {datos.nombre}
                                </h1>
                            </div>
                        </div>
                        <div class="w-[95%] md:!w-[125%] xl:!w-[100%]">
                            <p class="text-md mb-4 line-clamp-4 md:line-clamp-none dark:text-black">
                                {datos.descripcion}
                            </p>
                        </div>
                        <div class="flex flex-row">
                            <div class="hover:scale-125 hover:ml-6 cursor-pointer transition-all duration-300 pr-8 h-24 bg-cover py-2 px-2 text-black" >
                                <p class="w-full text-sm mt-2 line-clamp-2">
                                    Tipo:
                                    <span class="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">{datos.tipo}</span>
                                </p>
                            </div>
                            <div class="flex flex-wrap justify-center">
                                <Link to={`/asociaciones/${params.id}/tienda`} class="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-md text-center self-center px-4 py-2 m-2">Tienda</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImagenesAsociacion />
        </>
    )
}

export default AsociacionPage;