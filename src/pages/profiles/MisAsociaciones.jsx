import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import CrudManager from "../../hooks/CrudManager";
import { Link } from "react-router";
import { Divider } from "@mui/material";
import PulseElement from "../../components/pulseElements";

const MisAsociaciones = () => {

    const { user } = useAuth({ middleware: 'auth' });

    const { views } = CrudManager({ url: `https://adrian.informaticamajada.es/api/users/${user?.id}/asociaciones` });
    const { views: asociacionGestor } = CrudManager({ url: `https://adrian.informaticamajada.es/api/asociaciones` });

    useEffect(() => {

        views({ setData: setMyAsociaciones, setLoading, setErrors: setError });
        asociacionGestor({ setData: setAsociacionGestor, setLoading, setErrors: setError });
    }, []);

    const [MyAsociaciones, setMyAsociaciones] = useState([]);
    const [AsociacionGestor, setAsociacionGestor] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (loading) return <PulseElement />;

    const gestor = AsociacionGestor?.filter(asociacion => asociacion.user_id === user?.id) || [];

    return (
        <>
            <div className="px-8 mt-10 text-xl flex md:flex-row flex-col justify-between">
                <p className="text-nowrap overflow-hidden text-ellipsis">Todas las asociaciones a los que te has unido <span className="font-medium"> ({MyAsociaciones.length && gestor.length ? MyAsociaciones.length + gestor.length : 0})</span></p>
                <Link to="/asociaciones/create" className="bg-sky-600 text-nowrap p-2 rounded-md text-white space-x-3 px-10 text-lg flex flex-row items-center justify-center md:justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Crear Asociación</span>
                </Link>
            </div>
            <div className="my-4">
                <Divider />
            </div>
            <div className="px-8 text-xl flex md:flex-row flex-col justify-between">
                <p className="text-nowrap overflow-hidden text-ellipsis">Gestor  <span className="font-medium"> ({gestor.length ? gestor.length : 0})</span></p>
            </div>
            {gestor ? (
                <div className="grid p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center md:gap-8 gap-2 lg:px-8 px-2">
                    {gestor.map(AsoGestor => (
                        <Link to={`/asociacion/${AsoGestor.id}`} className="bg-gray-100 w-full h-full flex flex-col justify-between overflow-hidden rounded-2xl text-black shadow-2xl" key={AsoGestor.id} >
                            <div>
                                <img src={AsoGestor.imagenPrincipal ? AsoGestor.imagenPrincipal : "https://trebeki.info/wp-content/uploads/2018/02/trebeki-asociacion-cooperativa-1801.jpg"} alt="" className="border-b-1 border-black/10 w-full h-40 object-cover" />
                            </div>
                            <div className="p-1">
                                <h2 className="text-2xl text-ellipsis  text-nowrap overflow-hidden mb-2"> {AsoGestor.nombre}</h2>
                                <p className="text-xs text-gray-500 overflow-hidden text-ellipsis line-clamp-2">
                                    {AsoGestor.descripcion}
                                </p>
                            </div>
                            <div className="p-1 w-full text-center bg-sky-200 font-medium text-sky-700">Gestor</div>
                        </Link>
                    ))}
                </div>
            ) : (
                <>
                    <div className="text-4xl w-full font-medium flex justify-center items-center mt-15">No hay resultados...

                    </div>
                </>
            )}
            <div className="px-8 text-xl flex md:flex-row flex-col justify-between">
                <p className="text-nowrap overflow-hidden text-ellipsis">Miembro  <span className="font-medium"> ({MyAsociaciones.length ? MyAsociaciones.length : 0})</span></p>
            </div>
            {MyAsociaciones ? (
                <>
                    <div className="grid p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center md:gap-8 gap-2 lg:px-8 px-2">
                        {MyAsociaciones.map(dataAso => {

                            return (
                                <Link to={`/asociacion/${dataAso.id}`} className="bg-gray-100 flex flex-col justify-between overflow-hidden rounded-2xl text-black shadow-2xl" key={dataAso.id} >
                                    <div>
                                        <img src={dataAso.imagenPrincipal ? dataAso.imagenPrincipal : "https://trebeki.info/wp-content/uploads/2018/02/trebeki-asociacion-cooperativa-1801.jpg"} alt="" className="border-b-1 border-black/10 w-full h-40 object-cover" />
                                    </div>
                                    <div className="p-1">
                                        <h2 className="text-2xl text-ellipsis  text-nowrap overflow-hidden mb-2"> {dataAso.nombre}</h2>
                                        <p className="text-xs text-gray-500 overflow-hidden text-ellipsis line-clamp-2">
                                            {dataAso.descripcion}
                                        </p>
                                        <div className="pt-2">
                                            {/* <p className=" text-ellipsis text-gray-500 text-sm text-nowrap overflow-hidden "> <span className="font-medium">{AsoUsers.length}</span> Miembros</p> CAMBIAR */}
                                        </div>

                                    </div>

                                </Link>
                            )
                        })}
                    </div>
                </>
            ) : (
                <>
                    <div className="text-4xl w-full font-medium flex justify-center items-center mt-15">No hay resultados...

                    </div>
                </>
            )}

        </>
    )
}

export default MisAsociaciones;