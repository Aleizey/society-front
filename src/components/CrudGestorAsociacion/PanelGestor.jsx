import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useFetch } from '../UseFetch';
import { useState } from 'react';
import ModalVistaGeneral from './ModalVistaGeneral';
import OverflowBody from '../OverflowBody';

const PanelGestor = ({ asociacion }) => {

    const [modalVistaGeneral, setModalVistaGeneral] = useState(false);
    OverflowBody(modalVistaGeneral)

    const { datos, error, loading } = useFetch(`https://adrian.informaticamajada.es/api/users/${asociacion.user_id}`, "GET");
    if (error) return <p>Error</p>;
    if (loading) return <p>Loading...</p>;
    return (
        <>
            {modalVistaGeneral && (
                <ModalVistaGeneral datosAso={asociacion} onClose={() => setModalVistaGeneral(false)} />
            )}
            <div className="bg-white shrink-0 w-80 h-auto self-start sticky top-22 p-4 z-2 md:flex flex-col hidden">

                <div className='flex flex-row font-bold justify-between items-center border-b pb-6 border-gray-200'>
                    <div>
                        <p className='text-black'>{datos.name}</p>
                        <p className='font-medium text-gray-500'>Admin</p>
                    </div>
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 50, height: 50 }}
                        />
                    </Stack>
                </div>

                <div className="text-3xl font-bold text-gray-900 mb-1 py-3">
                    <p>Gestion </p>
                </div>
                <ul className="text-lg font-medium flex flex-col pb-6">
                    <li onClick={() => setModalVistaGeneral(true)} className="transition-all  cursor-pointer hover:bg-sky-100 py-4 px-2
                    flex flex-row items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clip-rule="evenodd" />
                        </svg>

                        <p className='text-nowrap'> Vista General</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ms-auto">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </li>
                    <li className="transition-all  cursor-pointer hover:bg-sky-100 py-4 px-2
                    flex flex-row items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                        </svg>
                        <p className='text-nowrap'>Productos</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ms-auto">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </li>
                    <li className="transition-all  cursor-pointer hover:bg-sky-100 py-4 px-2
                    flex flex-row items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>
                        <p className='text-nowrap'>Miembros</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ms-auto">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </li>
                    <li></li>
                </ul>
            </div >
        </>
    )
}

export default PanelGestor;