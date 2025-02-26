import { useContext, useEffect, useState } from "react";
import { SocietyContext } from "../components/ProviderSociety";
import { Link, useNavigate } from "react-router-dom";
import CrudManager from "../hooks/CrudManager";
import { useAuth } from "../hooks/auth";
import Loading from "../components/Loading";

const Primary = () => {
    const { asociaciones } = useContext(SocietyContext);
    const { user } = useAuth({ middleware: "auth" });
    const navigate = useNavigate();

    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [asoUsers, setAsoUsers] = useState({});

    useEffect(() => {
        asociaciones.forEach((dataAso) => {
            const { views } = CrudManager({ url: `https://adrian.informaticamajada.es/api/asociaciones/${dataAso.id}/users` });

            views({
                setData: (users) => setAsoUsers((prevState) => ({ ...prevState, [dataAso.id]: users, })),
                setLoading,
                setErrors: setError,
            });
        });
    }, [asociaciones]);

    if (loading) return <Loading />;

    return (
        <>
            {asociaciones.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center md:gap-8 gap-2 mt-12 lg:px-8 px-2">
                    {asociaciones.map((dataAso) => {
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
                                        if (!isJoined) handleClick();
                                    }}
                                    className="flex justify-between py-1.5 px-1.5"
                                >
                                    <button
                                        className={`bg-sky-200 text-sky-500 rounded-full text-ellipsis text-nowrap overflow-hidden font-bold p-2 w-full transition-all ${isJoined ? "cursor-not-allowed opacity-50" : "hover:bg-sky-400 hover:text-white cursor-pointer"
                                            }`}
                                    >
                                        {isJoined ? "Unido" : "Unirse a la asociación"}
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
