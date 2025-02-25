import { Avatar, Divider, MenuItem, Stack, TextField } from "@mui/material";
import * as React from 'react';
import CrudManager from "../hooks/CrudManager";
import { useNavigate } from "react-router-dom";

const currencies = [
    { value: 'Deportiva', label: 'Deportiva' },
    { value: 'Cultural', label: 'Cultural' },
    { value: 'Vecinos', label: 'Vecinos' },
    { value: 'Consumidores y Usuarios', label: 'Consumidores y Usuarios' },
    { value: 'Ayuda Mutua', label: 'Ayuda Mutua' },
    { value: 'Voluntariado', label: 'Voluntariado' },
];

const CreateAsociacion = () => {

    const { creates } = CrudManager({ url: `http://localhost:8000/api/asociaciones/` });
    let navigate = useNavigate();

    const [asociaciones, setAsociaciones] = React.useState({
        nombre: "",
        descripcion: "",
        tipo: "",
        user_id: 1,
    });

    const [errors, setErrors] = React.useState([])
    const [status, setStatus] = React.useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAsociaciones((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        creates({ data: asociaciones, setErrors, setStatus })
            .then((data) => {
                navigate(`/asociacion/${data.data.id}`);
            })
            .catch((error) => { console.error(error); });
    };

    return (
        <>
            <div className="flex flex-row w-full h-screen">
                <div className="bg-white shrink-0 w-full md:w-110 md:h-auto h-screen self-start md:sticky fixed top-22 p-4 pt-2 z-2 md:flex flex-col ">
                    <div>
                        <span className="flex text-2xl font-bold mb-5">
                            Crear grupo
                        </span>
                        <div className='flex flex-row font-bold space-x-3.5 items-center border-gray-200'>
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                    alt={"gestor.name"}
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ width: 42, height: 42 }}
                                />
                            </Stack>
                            <div>
                                <p className='text-black font-medium text-lg'>{"gestor.name"}</p>
                                <p className='font-normal  text-sm'>Administrador</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-7">
                        <Divider />
                    </div>
                    <div className="">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <TextField className="w-full" id="outlined-basic" name="nombre" onChange={handleChange} value={asociaciones.nombre} color="info" label="Nombre de la asociación" variant="outlined" />
                            </div>
                            <div>
                                <TextField
                                    className="w-full"
                                    id="outlined-select-currency"
                                    select
                                    label="Tipo"
                                    name="tipo"
                                    color="info"
                                    value={asociaciones.tipo}
                                    onChange={handleChange}
                                    helperText="Please select your currency"
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            </div>
                            <div>
                                <TextField
                                    className="w-full"
                                    id="outlined-multiline-static"
                                    label="Descipción"
                                    color="info"
                                    name="descripcion"
                                    onChange={handleChange}
                                    value={asociaciones.descripcion}
                                    multiline
                                    rows={4}
                                />
                            </div>
                            <div className="py-5">
                                <Divider />
                            </div>
                            <div>
                                <button className="cursor-pointer hover:bg-sky-300 transition-all w-full text-lg font-medium bg-sky-500/35 text-sky-800 p-1.5 rounded-4xl my-auto" type="submit">
                                    {status == ! "success" ? 'cargando...' : 'Crear'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-gray-200 w-full md:flex hidden justify-center items-start p-5 xl:p-20 xl:pt-10">
                    <div className="flex flex-col p-6 bg-white shadow-2xl rounded-lg w-full lg:w-[972px]">
                        <div className="text-md font-medium flex flex-row items-center justify-between">
                            <p>Vista previa Asociación</p>
                            <span className="bg-gray-100 p-2 rounded-full text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-8">
                                    <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </span>
                        </div>
                        <div className="py-4">
                            <Divider />
                        </div>
                        <div>
                            <img className="w-full h-70 object-cover rounded-xl opacity-60 grayscale-100" src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png" alt="imagen" />
                        </div>
                        <div className="py-4">
                            <Divider />
                        </div>
                        <div>
                            <p className="text-2xl text-gray-500">{asociaciones.nombre}</p>
                            <span className="flex flex-row space-x-2 items-center text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                    <path d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                </svg>
                                <p>Grupo - {asociaciones.tipo} · 1 miembro</p>
                            </span>
                        </div>
                        <div className="py-4">
                            <Divider />
                        </div>
                        <div>
                            <div>
                                <ul className="grid grid-cols-3 text-center text-xl font-medium text-gray-500">
                                    <li>General</li>
                                    <li>Tienda</li>
                                    <li>Información</li>
                                </ul>
                            </div>
                            <div className="pt-4">
                                <Divider />
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 rounded-b-2xl p-4">
                                <div className="relative overflow-hidden bg-white rounded-2xl  rounded-t-none h-30">
                                    <img className="w-full h-full object-cover absolute opacity-60 grayscale-100" src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png" alt="" />
                                    <div className="absolute font-bold text-3xl z-100 w-full h-full flex justify-start items-end p-4">
                                        <div className='flex flex-row font-bold space-x-3.5 items-center border-gray-200'>
                                            <Stack direction="row" spacing={2}>
                                                <Avatar
                                                    alt={"User"}
                                                    src="/static/images/avatar/1.jpg"
                                                    sx={{ width: 42, height: 42 }}
                                                />
                                            </Stack>
                                            <div>
                                                <p className='text-black font-medium text-lg'>{"User"}</p>
                                                <p className='font-normal text-black  text-sm'>XXXX-XX-XX</p>
                                            </div>
                                            <div className="">
                                                <p className='text-black text-nowrap w-full text-lg'>...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden bg-white rounded-2xl rounded-t-none h-30 ">
                                    <img className="w-full h-full object-cover absolute opacity-60 grayscale-100" src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png" alt="" />
                                    <div className="absolute font-bold text-3xl z-100 w-full h-full flex justify-start items-end p-4">
                                        <div className=' flex flex-row font-bold space-x-3.5 items-center border-gray-200'>
                                            <Stack direction="row" spacing={2}>
                                                <Avatar
                                                    alt={"User"}
                                                    src="/static/images/avatar/1.jpg"
                                                    sx={{ width: 42, height: 42 }}
                                                />
                                            </Stack>
                                            <div>
                                                <p className='text-black font-medium text-lg'>{"User"}</p>
                                                <p className='font-normal text-black  text-sm'>XXXX-XX-XX</p>
                                            </div>
                                            <div className="">
                                                <p className='text-black text-nowrap w-full text-lg'>...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CreateAsociacion;