import { useEffect, useState } from "react";
import CrudManager from "../../hooks/CrudManager";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import ModalAprobar from "../../components/admin/ModalAprobar";
import OverflowBody from "../../components/OverflowBody";

const AdminAsociacion = () => {
    const { views } = CrudManager({ url: 'http://localhost:8000/api/asociaciones/pendientes' });

    const [asociaciones, setAsociaciones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalAprobar, setModalAprobar] = useState(null);

    OverflowBody(modalAprobar)

    const fetchData = () => {
        views({ setData: setAsociaciones, setLoading, setErrors: setError });
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

    return (

        <>
            {modalAprobar &&
                (<ModalAprobar idAsociacion={modalAprobar} onClose={() => setModalAprobar(null)} />
                )}
            <div className=" container mx-auto mt-10 px-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Administrar Asociaciones
                </h1>

                {asociaciones.length > 0 ? (
                    <div className=" overflow-x-auto rounded-md ">
                        <table className="w-full text-sm text-left text-gray-500">
                            {/* Encabezado */}
                            <thead className="text-xs text-gray-700 uppercase border-b-1 border-gray-400 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">id</th>
                                    <th scope="col" className="px-6 py-3">
                                        <button className="flex items-center">
                                            NOMBRE
                                            <svg className="w-3 h-3 ml-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                            </svg>
                                        </button>
                                    </th>
                                    <th scope="col" className="px-6 py-3">Descripción</th>
                                    <th scope="col" className="px-6 py-3">Estado</th>
                                    <th scope="col" className="px-6 py-3">Imagen</th>
                                    <th scope="col" className="px-6 py-3 text-center">Acciones</th>
                                </tr>
                            </thead>

                            {/* Cuerpo */}
                            <tbody>
                                {asociaciones.map((aso) => (
                                    <tr
                                        key={aso.id}
                                        className={`border-b border-b-gray-200`}
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-800 ">{aso.id}</td>
                                        <td className="px-6 py-4 font-medium text-gray-800 ">{aso.nombre}</td>
                                        <td className="px-6 py-4 text-gray-600 line-clamp-2">{aso.descripcion}</td>
                                        <td className="px-6 py-4 font-semibold">
                                            <span className={`rounded-md ${aso.aprobados === 1 ? "text-green-500 bg-green-100" :
                                                aso.aprobados === 0 ? "text-yellow-500 bg-yellow-200 " :
                                                    "text-red-500 bg-red-100 "
                                                }`}>
                                                {aso.aprobados ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                                    </svg>

                                                )}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <img
                                                src={aso.imagenPrincipal || "https://trebeki.info/wp-content/uploads/2018/02/trebeki-asociacion-cooperativa-1801.jpg"}
                                                alt="Asociación"
                                                className="w-15 h-15 object-cover rounded-xl border-2 border-gray-300 shadow-sm"
                                            />
                                        </td>
                                        <td className="px-6 py-4 flex flex-col text-center justify-center gap-2">
                                            <Link
                                                to={`/asociacion/${aso.id}`}
                                                className="bg-sky-200 text-sky-600 px-10 py-1.5 rounded-md font-semibold hover:bg-blue-400 transition">
                                                Ver
                                            </Link>
                                            <button
                                                className="bg-green-200 text-green-800 px-10 py-1.5 rounded-md font-semibold hover:bg-green-400 transition" onClick={() => setModalAprobar(aso.id)}>
                                                Aprobar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-2xl text-gray-500 text-center mt-10">No hay asociaciones pendientes...</div>
                )}
            </div>
        </>
    );
};

export default AdminAsociacion;
