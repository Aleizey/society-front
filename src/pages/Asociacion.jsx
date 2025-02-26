import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PanelGestor from "../components/CrudGestorAsociacion/PanelGestor";
import { useEffect, useState } from "react";
import CrudManager from "../hooks/CrudManager";
import { useAuth } from "../hooks/auth";
import Loading from "../components/Loading";
import PulseElement from "../components/PulseElements42";

const AsociacionPage = () => {

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [handlePanel, setHandlePanel] = useState(false);
    const section = searchParams.get("section") || "general";
    const navigate = useNavigate();

    const { views } = CrudManager({ url: `https://adrian.informaticamajada.es/api/asociaciones/${params.id}` });
    const { views: miembros } = CrudManager({ url: `https://adrian.informaticamajada.es/api/asociaciones/${params.id}/users` });
    const { user } = useAuth({ middleware: 'auth' });

    const [asociaciones, setAsociaciones] = useState([]);
    const [miembro, setMiembro] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const gestor = user?.id === asociaciones.user_id ? user?.id : null;

    console.log(miembro.length == 0 ? 1 : miembro.length)

    useEffect(() => {
        views({ setData: setAsociaciones, setLoading, setErrors: setError, navigate });
        miembros({ setData: setMiembro, setLoading, setErrors: setError, navigate });
    }, []);

    const handleSectionChange = (newSection) => {
        setSearchParams({ section: newSection });
    };

    const articles = Array.from({ length: 4 }, () => ({
        id: 1,
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080",
        date: `Oct , 2023`,
        author: `Author `,
        authorImage: "https://randomuser.me/api/portraits/men/2.jpg",
        title: `Title `,
        link: "#"
    }));

    if (error) return <p> Error </p>;
    if (loading) return <PulseElement />;
    return (
        <>
            {/* contenedor general */}
            <div className={"flex flex-row relative min-h-screen w-full"}>
                {/* aside */}
                {handlePanel && gestor ? (
                    <PanelGestor asociacion={asociaciones} params={params} onClose={() => setHandlePanel(false)} />
                ) : (
                    (gestor && (
                        <div onClick={() => setHandlePanel(true)} className=" fixed bg-sky-300 text-white p-3 shadow hover:ps-10 cursor-pointer transition-all rounded-r-full mt-10 z-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 animate-spin">
                                <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </div>
                    ))
                )}

                {/* contenedor de info */}
                <div className="bg-gray-400/20 w-full ">
                    {/* header del grupo */}
                    <div className="bg-white shadow  lg:px-10">
                        {/* portada */}
                        <div className=" rounded-b-sm w-full h-90 flex justify-center overflow-hidden relative">
                            <img className="w-full h-full object-cover object-top" src={asociaciones.imagenPrincipal} alt="" />

                        </div>
                        {/* nav */}
                        <div className="w-full pt-2 pb-0 px-1">
                            <div className="grid grid-cols-1 md:grid-cols-3  pb-5 border-b-1 border-gray-400">

                                <div className="flex flex-row space-x-1.5 col-span-2">
                                    <div className="size-30 flex shrink-0 rounded-2xl border-3 border-white overflow-hidden">
                                        <img className="w-full h-full object-cover" src={asociaciones.imagenPrincipal} alt="" />
                                    </div>
                                    <div className="overflow-hidden ">
                                        <p className="flex flex-row space-x-2 lg:flex-row lg:items-center items-start text-4xl font-bold">
                                            <span className="text-nowrap text-ellipsis overflow-hidden  ">
                                                {asociaciones.nombre ? asociaciones.nombre.toUpperCase() : ""}
                                            </span>
                                            <span className="bg-gray-300 text-white lg:ms-2 relative rounded-full p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-7">
                                                    <path d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                                </svg>
                                            </span>
                                        </p>
                                        <span className="flex flex-col md:flex-row items-start md:items-center space-x-3 w-min font-medium rounded-4xl mt-auto my-2">
                                            <span className="bg-sky-300 text-sm text-nowrap text-white rounded-4xl px-3 my-2 p-1">
                                                {asociaciones?.tipo}
                                            </span>
                                            <span className="text-sm font-medium text-nowrap">
                                                <strong className="text-sm ">{miembro.length + 1}</strong> miembros
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-1 grid lg:grid-cols-2 grid-cols-1 gap-1 md:mt-auto mt-2 ">
                                    <button className="bg-sky-200 flex flex-row items-center justify-center space-x-2 text-sm rounded-sm text-ellipsis text-nowrap overflow-hidden text-sky-600 p-2 w-full hover:bg-sky-500 hover:text-sky-200 transition-all cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                            <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                        </svg>
                                        <p className="text-nowrap text-ellipsis overflow-hidden">
                                            {miembro.some(e => e.id === user?.id) ? "UNIDO" : "Unirse a la asociación"}
                                        </p>
                                    </button>
                                    <button className="bg-gray-200 flex flex-row items-center justify-center space-x-2   rounded-sm text-ellipsis text-nowrap overflow-hidden text-gray-600 p-2 w-full hover:bg-gray-400 hover:text-white transition-all cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                            <path d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                                        </svg>

                                        <p className="text-nowrap text-ellipsis overflow-hidden">
                                            Compartir
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
                                    <Link to={`/asociacion/${params.id}/tienda`} className="py-2.5 border-b-3 border-b-transparent hover:text-gray-800 hover:border-b-3 hover:border-gray-800 cursor-pointer">Tienda</Link>
                                    <li onClick={() => handleSectionChange("info")}
                                        className={`py-2.5 border-b-3 hover:text-gray-800 hover:border-b-3 hover:border-gray-800 cursor-pointer ${section === "info" ? "active-aso" : "border-b-transparent"}`} >
                                        Información
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:px-10">
                        {/* info general */}
                        {section === "general" && (
                            <>
                                <div className=" grid lg:grid-cols-4 grid-cols-1 gap-3 p-2 mt-5">
                                    <div className="p-2 rounded-2xl col-span-4">
                                        {/* <div className="bg-red-500 rounded-md">a</div> */}
                                        <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 rounded-xl py-2 text-black">
                                            {articles.map((article) => (
                                                <article
                                                    key={article.id}
                                                    className=" relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                                                >
                                                    <img src={article.image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                                                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                                                    <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                                        <time dateTime={article.date} className="mr-8">{article.date}</time>
                                                        <div className="-ml-4 flex items-center gap-x-4">
                                                            <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                                                <circle cx="1" cy="1" r="1"></circle>
                                                            </svg>
                                                            <div className="flex gap-x-2.5">
                                                                <img src={article.authorImage} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                                                                {article.author}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white text-nowrap text-ellipsis overflow-hidden">
                                                        <a href={article.link}><span className="absolute inset-0"></span>{article.title}</a>
                                                    </h3>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {section === "info" && (
                            <>
                                <div className=" bg-white p-2 mt-5 rounded-2xl mx-auto mb-2">
                                    <div className="border-b border-gray-500 px-1 py-4">
                                        <p className="text-xl font-bold">Información del grupo</p>
                                    </div>
                                    <div className="flex flex-col space-y-1.5 mt-3">
                                        <span className="text-md">
                                            {asociaciones.descripcion}
                                        </span>
                                        <span>
                                            <p className="text-lg font-bold border-b border-gray-500 mb-3">Dirección</p> {asociaciones.direccion}
                                        </span>
                                        <span>
                                            <p className="text-lg font-bold border-b border-gray-500 mb-3">CIF</p> {asociaciones.cif}
                                        </span>
                                        <span className="text-center pt-3">
                                            Creado el {asociaciones.created_at.slice(0, 10)}
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsociacionPage;