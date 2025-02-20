import { useParams, useSearchParams } from "react-router";
import { useFetch } from "../components/UseFetch";
import ImagenesAsociacion from "../components/ImagenesAsociacion";
import { Link } from "react-router";
import PanelGestor from "../components/CrudGestorAsociacion/PanelGestor";

const AsociacionPage = () => {

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const section = searchParams.get("section") || "general";
    const { datos, error, loading } = useFetch(`https://adrian.informaticamajada.es/api/asociaciones/${params.id}`, "GET");

    const handleSectionChange = (newSection) => {
        setSearchParams({ section: newSection });
    };

    if (error) return <p> Error </p>;
    if (loading) return <p> Cargando </p>;

    return (
        <>
            {/* contenedor general */}
            <div className={"grid grid-cols-4 relative min-h-screen w-full"}>
                {/* aside */}
                <PanelGestor idUser={datos.user_id} />
                {/* contenedor de info */}
                <div className="bg-gray-50 col-span-4 md:col-span-3 container mx-min lg:px-10 ">
                    {/* header del grupo */}
                    <div>
                        {/* portada */}
                        <div className="mt-5 rounded-2xl w-full h-90 flex justify-center overflow-hidden relative">
                            <img className="w-full h-full object-cover object-top" src="https://cdn.discordapp.com/home-headers/489424959270158356/9a055ebd7d4b52498292937f2703d2c3.png?size=1280" alt="" />

                        </div>
                        {/* nav */}
                        <div className="w-full pt-2 pb-0">
                            <div className="grid grid-cols-3 pb-5 border-b-1 border-gray-400">

                                <div className="flex flex-row space-x-1.5 col-span-2">
                                    <div className="size-30 rounded-2xl border-3  border-white overflow-hidden">
                                        <img className="w-full h-full object-cover" src="https://cdn.discordapp.com/icons/489424959270158356/7183b55da16b36807266d0f094227397.webp?size=100" alt="" />
                                    </div>
                                    <div className="">
                                        <p className="flex flex-col lg:flex-row lg:items-center items-start text-4xl text-nowrap overflow-hidden text-ellipsis font-bold">
                                            <span className=" text-nowrap">
                                                {datos.nombre.toUpperCase()}
                                            </span>
                                            <span className="bg-gray-400 text-white lg:ms-2 relative rounded-xl p-1
                                            before:left-11 
                                            before:bg-gray-600 
                                            before:px-3 
                                            before:text-lg 
                                            before:top-0  
                                            before:rounded-4xl
                                            before:rounded-bl-none
                                            before:text-white
                                            before:font-medium
                                            hover:before:content-['publico'] 
                                            before:absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                                </svg>
                                            </span>
                                        </p>
                                        <span className="flex w-min font-medium rounded-4xl mt-auto my-2">
                                            <span className="bg-blue-500 text-sm text-nowrap text-white rounded-4xl px-3 p-1">
                                                {datos.tipo.toUpperCase()}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-1 grid lg:grid-cols-2 grid-cols-1 gap-1 mt-auto">
                                    <button className="bg-sky-700 flex flex-row items-center justify-center space-x-2 text-sm rounded-sm text-ellipsis text-nowrap overflow-hidden text-white p-2 w-full hover:bg-gray-500 transition-all cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                        </svg>
                                        <p className="text-nowrap text-ellipsis overflow-hidden">
                                            UNIRSE AL GRUPO
                                        </p>
                                    </button>
                                    <button className="bg-gray-300 flex flex-row items-center justify-center space-x-2   rounded-sm text-ellipsis text-nowrap overflow-hidden text-black p-2 w-full hover:bg-gray-950 transition-all cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                                        </svg>

                                        <p className="text-nowrap text-ellipsis overflow-hidden">
                                            COMPARTIR
                                        </p>
                                    </button>
                                </div>

                            </div>
                            <div className="grid w-full">
                                <ul className="grid grid-cols-3 text-gray-500 text-center font-medium text-lg">
                                    <li onClick={() => handleSectionChange("general")}
                                        className={`py-2.5 border-b-3 hover:text-gray-800 hover:border-b-3 hover:border-gray-800 cursor-pointer ${section === "general" ? "active-aso" : "border-b-transparent"}`}>
                                        General
                                    </li>
                                    <Link to={`/asociaciones/${params.id}/tienda`} className="py-2.5 border-b-3 border-b-transparent hover:text-gray-800 hover:border-b-3 hover:border-gray-800 cursor-pointer">Tienda</Link>
                                    <li onClick={() => handleSectionChange("info")}
                                        className={`py-2.5 border-b-3 hover:text-gray-800 hover:border-b-3 hover:border-gray-800 cursor-pointer ${section === "info" ? "active-aso" : "border-b-transparent"}`} >
                                        Información
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* info general */}
                    {section === "general" && (
                        <>
                            <div className=" grid lg:grid-cols-4 grid-cols-1 gap-3 p-2 mt-5">
                                <div className="bg-white shadow-2xl p-2 rounded-2xl col-span-3">
                                    <div className="grid grid-cols-1 gap-2 rounded-xl p-2 text-black">
                                        <article
                                            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                                            <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
                                            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                                            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"><time
                                                datetime="2023-10-11" class="mr-8">Oct 11, 2023</time>
                                                <div class="-ml-4 flex items-center gap-x-4"><svg viewBox="0 0 2 2"
                                                    class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                                    <circle cx="1" cy="1" r="1"></circle>
                                                </svg>
                                                    <div class="flex gap-x-2.5">
                                                        <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10" />John
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 class="mt-3 text-lg font-semibold leading-6 text-white  text-nowrap text-ellipsis overflow-hidden">
                                                <a href="#"><span class="absolute inset-0"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus explicabo, illo officia necessitatibus deleniti ea voluptatum nisi veniam impedit nobis ipsam! Cum quod perferendis illum dicta reiciendis aut debitis..</a>
                                            </h3>
                                        </article>
                                    </div>
                                </div>
                                <div className="p-2 rounded-2xl bg-sky-500">

                                </div>
                            </div>
                        </>
                    )}
                    {section === "info" && (
                        <>
                            <div className="w-200 bg-white p-2 mt-5 rounded-2xl mx-auto mb-2">
                                <div className="border-b border-gray-500 px-1 py-4">
                                    <p className="text-xl font-bold">Información del grupo</p>
                                </div>
                                <div className="flex flex-col space-y-1.5 mt-3">
                                    <span className="text-md">
                                        {datos.descripcion}
                                    </span>
                                    <span>
                                        <p className="text-lg font-bold border-b border-gray-500 mb-3">Dirección</p> {datos.direccion}
                                    </span>
                                    <span>
                                        <p className="text-lg font-bold border-b border-gray-500 mb-3">CIF</p> {datos.cif}
                                    </span>
                                    <span className="text-center pt-3">
                                        Creado el {datos.created_at.slice(0, 10)}
                                    </span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>


            {/* <div className="w-full flex flex-col md:flex-row py-24 ">
                <div className="w-full md:w-3/5 mx-auto flex flex-col md:flex-row">
                    <div className="w-full relative md:w-1/2 items-center h-auto md:py-12 flex">
                        <div className="absolute bg-[url(https://th.bing.com/th/id/R.af195b7ead93220b6dc892ac72f41806?rik=MrXuMEkNnEqLvw&pid=ImgRaw&r=0)] w-[85%] h-[70%] right-0 bg-cover"></div>
                        <div className="relative left-0 w-[90%] min-h-64">
                            <div className="relative w-[12%] min-h-64 [writing-mode:vertical-lr] text-2xl rotate-180 text-white  py-20 text-center"> <p className="bg-sky-400"> {datos.nombre} </p> </div>
                        </div>
                    </div>
                    <div className="w-full relative md:w-1/2 justify-items-center h-auto md:py-8 pl-6 flex flex-col my-auto">
                        <div className="flex flex-row md:!flex-col mt-4 md:!mt-0">
                            <div className="w-11/12">
                                <h1 className="text-3xl mt-2 md:text-xl font-semibold text-gray-800 dark:text-black">
                                    {datos.nombre}
                                </h1>
                            </div>
                        </div>
                        <div className="w-[95%] md:!w-[125%] xl:!w-[100%]">
                            <p className="text-md mb-4 line-clamp-4 md:line-clamp-none dark:text-black">
                                {datos.descripcion}
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <div className="hover:scale-125 hover:ml-6 cursor-pointer transition-all duration-300 pr-8 h-24 bg-cover py-2 px-2 text-black" >
                                <p className="w-full text-sm mt-2 line-clamp-2">
                                    Tipo:
                                    <span className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">{datos.tipo}</span>
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <Link to={`/asociaciones/${params.id}/tienda`} className="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-md text-center self-center px-4 py-2 m-2">Tienda</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImagenesAsociacion /> */}
        </>
    )
}

export default AsociacionPage;