import { useState } from "react";
import CrudManager from "../../hooks/CrudManager";
import Success from "../Success";

const ModalAprobar = ({ idAsociacion, onClose }) => {

    const { updates } = CrudManager({ url: `api/asociaciones/${idAsociacion}/aprobados` });

    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);
    const [open, setOpen] = useState(false)

    const handleClick = async (e) => {
        e.preventDefault();
        await updates({ setErrors, setStatus });
        setOpen(true)
        setTimeout(() => {
            onClose();
        }, 500);
    };

    return (
        <>
            {open && (
                <Success />
            )}
            <div className=" fixed inset-0 z-200 flex justify-center items-center bg-black/80 bg-opacity-50 select-none">
                <div className="bg-white m-2 w-120 h-80 flex flex-col justify-between overflow-hidden rounded-xl p-3 pt-2">
                    <div className="flex flex-col my-auto items-center text-green-800 justify-center text-center text-lg space-y-5 font-medium">
                        <span className="bg-green-100 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 text">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                        </span>
                        <p >
                            Estas seguro que quieres aprobar esta Asociación?
                        </p>
                    </div>
                    <div className=" grid grid-cols-3 gap-3">
                        <button onClick={() => onClose(null)} className="bg-gray-300 cursor-pointer transition-all text-sm p-2 text-gray-600 rounded-md hover:bg-gray-500 hover:text-gray-200">Cancelar</button>
                        <button onClick={handleClick} type="button" className="bg-green-300 cursor-pointer transition-all col-span-2 font-medium text-green-700 p-2 rounded-md hover:bg-green-400 hover:text-green-200">Aceptar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalAprobar;