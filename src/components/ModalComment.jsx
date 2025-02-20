import Rating from '@mui/material/Rating';
import { useState } from 'react';

const ModalComment = ({ comment, onClose, datos }) => {

    const [value, setValue] = useState(2);

    return (
        <>
            <div className=" fixed inset-0 z-200 flex justify-center items-center bg-black/80 bg-opacity-50 select-none">
                <div className="bg-white 
                 w-140 h-100   
                 flex flex-col justify-between overflow-hidden rounded-xl p-3 pt-2">
                    <div className="flex flex-row-reverse justify-between items-center">
                        <div className="font-bold cursor-pointer text-xl text-sky-700">
                            Borradores
                        </div>
                        <button onClick={() => onClose(null)} className=" right-0 p-2 text-black hover:bg-gray-300/60 rounded-full cursor-pointer
                            ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                                <path d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col space-x-3 text-2xl">
                        <div className="flex flex-row items-center space-y-2 border-b-1 border-gray-300">
                            <div className="w-[40px] h-[40px] relative shrink-0">
                                <img className="w-full h-full rounded-full object-cover absolute" src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww" alt="" />
                            </div>
                            <input className=" w-full outline-0 p-2" type="text" name="text-modal-1" placeholder="Escribe una portada..." id="text-modal-1" />
                        </div>
                        <div className="flex flex-col space-y-2 ">
                            <textarea className=" p-2 outline-0 w-full" name="textarea" id="textarea" placeholder="Comenta aqui sobre el poducto... " rows={6} />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center border-t-1 pt-3 border-gray-300">
                        <Rating
                            name="simple-controlled"
                            size="large"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <div className=" row-end-6">
                            <button className="bg-sky-700 text-white p-2 text-lg rounded-3xl px-10 w-full " type="button">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalComment;