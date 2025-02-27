import { Divider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CrudManager from "../hooks/CrudManager";
import PulseElements from "./PulseElements";

const SearchPanel = ({ onClose }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [asociaciones, setAsociaciones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const query = searchParams.get("filter") || "";

    const { views } = CrudManager({
        url: `https://adrian.informaticamajada.es/api/asociaciones${query ? `?search=${query}` : ""}`
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            views({ setData: setAsociaciones, setLoading, setError });
        }, 300);

        return () => clearTimeout(timeout);
    }, [query]);

    const handleSearchChange = (event) => {
        setSearchParams(event.target.value ? { filter: event.target.value } : {});
    };

    return (
        <div className="fixed inset-0 flex flex-col z-200 justify-start bg-gray-100 bg-opacity-50 select-none">
            <div className="w-full flex items-center flex-row shadow-2xl">
                <TextField
                    sx={
                        {
                            background: "white",
                        }
                    }
                    className="w-full"
                    id="standard-basic"
                    name="filter"
                    value={query}
                    onChange={handleSearchChange}
                    label="Buscador"
                    variant="standard"
                />
                <span className="bg-black text-white p-3 cursor-pointer hover:bg-sky-900 transition-all" onClick={() => onClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </span>
            </div>

            {loading ? (
                <PulseElements />
            ) : error ? (
                <p className="text-center text-red-500">Error al cargar los datos</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center md:gap-8 gap-2 mt-4 lg:px-8 px-2">
                    {asociaciones.map((dataAso) => (
                        <Link
                            to={`/asociacion/${dataAso.id}`}
                            className="w-full flex flex-col justify-between overflow-hidden rounded-2xl text-black shadow-2xl"
                            key={dataAso.id}
                        >
                            <div>
                                <img
                                    src={dataAso.imagenPrincipal || "https://trebeki.info/wp-content/uploads/2018/02/trebeki-asociacion-cooperativa-1801.jpg"}
                                    alt={dataAso.nombre}
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
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPanel;
