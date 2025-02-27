import Rating from '@mui/material/Rating';
import { useState } from 'react';
import CrudManager from '../hooks/CrudManager';
import { useAuth } from '../hooks/auth';

const ModalComment = ({ comment, onClose, productos }) => {
    const { user } = useAuth({ middleware: 'auth' });
    const { creates } = CrudManager({ url: `https://adrian.informaticamajada.es/api/comentarios` });

    const [value, setValue] = useState(0);

    comment(value)

    const [createcomment, setCreatecomment] = useState({
        text: "",
        valoracion: 0,
    });
    const [errors, setErrors] = useState(null);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreatecomment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await creates({
            data: {
                ...createcomment,
                valoracion: value,
                producto_id: productos.id,
                user_id: user.id,
            },
            setErrors,
            setStatus,
        });
        onClose()
    };

    return (
        <div className="fixed inset-0 z-200 flex justify-center items-center bg-black/80 bg-opacity-50 select-none">
            <div className="bg-white w-140 h-100 flex flex-col justify-between overflow-hidden rounded-xl p-3 pt-2">
                <div className="flex flex-row-reverse justify-between items-center">
                    <div className="font-bold cursor-pointer text-xl text-sky-700">Borradores</div>
                    <button onClick={() => onClose(null)} className="right-0 p-2 text-black hover:bg-gray-300/60 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                            <path d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-x-3 text-2xl">
                        <div className="flex flex-row items-start space-y-2 border-b-1 border-gray-300">
                            <div className="w-[40px] h-[40px] relative shrink-0">
                                <img className="w-full h-full rounded-full object-cover absolute" src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww" alt="" />
                            </div>
                            <textarea className="p-2 outline-0 w-full" onChange={handleChange} value={createcomment.text} name="text" placeholder="Comenta aquí sobre el producto..." rows={6} />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center border-t-1 pt-3 border-gray-300">
                        <Rating
                            name="rating"
                            size="large"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                setCreatecomment((prev) => ({
                                    ...prev,
                                    valoracion: newValue,
                                }));
                            }}
                        />
                        <div className="row-end-6">
                            <button className="bg-sky-700 text-white p-2 text-lg rounded-3xl px-10 w-full" type="submit">
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
                <p className='text-red-500 w-full font-bold text-nowrap text-ellipsis overflow-hidden'>{status} : Rellena todos los campos</p>
            </div>
        </div>
    );
};

export default ModalComment;
