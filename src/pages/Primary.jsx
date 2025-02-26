import { useContext, useEffect, useState } from "react";
import { SocietyContext } from "../components/ProviderSociety";
import { Link, useNavigate } from "react-router-dom";
import CrudManager from "../hooks/CrudManager";
import { useAuth } from "../hooks/auth";
import Loading from "../components/Loading";
import PulseElement from "../components/PulseElements42";

const Primary = () => {
    const { asociaciones } = useContext(SocietyContext);
    const { user } = useAuth({ middleware: "auth" });
    const navigate = useNavigate();

    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [asoUsers, setAsoUsers] = useState({});
    const [ordenar, setordenar] = useState("default");

    useEffect(() => {
        asociaciones.forEach((dataAso) => {
            const { views } = CrudManager({ url: `https://adrian.informaticamajada.es/api/asociaciones/${dataAso.id}/users` });

            views({
                setData: (users) => setAsoUsers((prevState) => ({ ...prevState, [dataAso.id]: users })), setLoading, setErrors: setError,
            });
        });
    }, [asociaciones]);

    if (loading) return <PulseElement />;

    const ordenarOptions = {
        "asc": (a, b) => a.nombre.localeCompare(b.nombre),
        "desc": (a, b) => b.nombre.localeCompare(a.nombre),
        "created-desc": (a, b) => new Date(b.created_at) - new Date(a.created_at),
        "created-asc": (a, b) => new Date(a.created_at) - new Date(b.created_at),
    };

    const ordenarAsocion = [...asociaciones].sort(ordenarOptions[ordenar] || (() => 0));

    return (
        <>
            {asociaciones.length > 0 && (
                <div className="mt-4 text-center top-21 p-2 sticky z-10 ">
                    <button
                        onClick={() => setordenar(ordenar === "asc" ? "desc" : "asc")}
                        className="bg-sky-200 text-sky-800 px-4 py-2 rounded-full mr-2 cursor-pointer shadow-2xl "
                    >
                        Ordenar por Nombre - {ordenar === "asc" ? "A/z" : "Z/a"}
                    </button>
                    <button
                        onClick={() => setordenar(ordenar === "created-desc" ? "created-asc" : "created-desc")}
                        className="bg-sky-200 text-sky-800 px-4 py-2 rounded-full cursor-pointer shadow-2xl "
                    >
                        Ordenar por Creación - {ordenar === "created-desc" ? "New" : "Old"}
                    </button>
                </div>
            )}

            {ordenarAsocion.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center md:gap-8 gap-2 mt-4 lg:px-8 px-2">
                    {ordenarAsocion.map((dataAso) => {
                        const { creates } = CrudManager({
                            url: `https://adrian.informaticamajada.es/api/asociaciones/${dataAso.id}/users/associate`,
                        });

                        const handleClick = async () => {
                            await creates({
                                data: { related_key: user?.id },
                                setErrors,
                                setStatus,
                            })
                                .then(() => navigate(`/asociacion/${dataAso.id}`))
                                .catch((error) => console.error(error));
                        };

                        const isJoined =
                            asoUsers[dataAso.id]?.some((e) => e.id === user?.id || e.id === dataAso.user_id) ?? false;

                        return (
                            <Link
                                to={`/asociacion/${dataAso.id}`}
                                className="w-full flex flex-col justify-between overflow-hidden rounded-2xl text-black shadow-2xl"
                                key={dataAso.id}
                            >
                                <div>
                                    <img
                                        src={
                                            dataAso.imagenPrincipal
                                                ? dataAso.imagenPrincipal
                                                : "https://trebeki.info/wp-content/uploads/2018/02/trebeki-asociacion-cooperativa-1801.jpg"
                                        }
                                        alt=""
                                        className="border-b-1 border-black/10 w-full h-40 object-cover"
                                    />
                                </div>
                                <div className="p-1">
                                    <h2 className="text-2xl text-ellipsis text-nowrap overflow-hidden mb-2">
                                        {dataAso.nombre}
                                    </h2>
                                    <p className="text-xs text-gray-500 overflow-hidden text-ellipsis line-clamp-2">
                                        {dataAso.descripcion}
                                    </p>
                                    <div className="pt-2">
                                        <p className="text-ellipsis text-gray-500 text-sm text-nowrap overflow-hidden">
                                            <span className="font-medium">{asoUsers[dataAso.id]?.length + 1 || 0}</span> Miembros
                                        </p>
                                    </div>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!isJoined || !user?.admin == 1) handleClick();
                                    }}
                                    className="flex justify-between py-1.5 px-1.5"
                                >
                                    <button
                                        className={`bg-sky-200 text-sky-500 rounded-full text-ellipsis text-nowrap overflow-hidden font-bold p-2 w-full transition-all ${isJoined || user?.admin == true ? "cursor-not-allowed opacity-50" : "hover:bg-sky-400 hover:text-white cursor-pointer"
                                            }`}
                                    >
                                        {isJoined || user?.admin == 1 ? "Unido" : "Unirse a la asociación"}
                                    </button>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="text-4xl w-full font-medium flex justify-center items-center mt-15">
                    No hay resultados...
                </div>
            )}
        </>
    );
};

export default Primary;
