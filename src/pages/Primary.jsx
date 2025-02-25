import { useContext, useState } from "react";
import { SocietyContext } from "../components/ProviderSociety";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from "react-router-dom";

const Primary = () => {

    const { asociaciones } = useContext(SocietyContext);

    return (
        <>
            {asociaciones ? (
                <>
                    {/* <SubirImagen /> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 lg:px-8 ">
                        {asociaciones.map(dataAso => (
                            <Link to={`/asociacion/${dataAso.id}`} className="flex flex-col justify-between border-1 border-black/10 overflow-hidden w-full rounded-2xl text-black shadow-2xl" key={dataAso.id} >
                                <div>
                                    <img src={dataAso.imagenPrincipal ? dataAso.imagenPrincipal : "https://trebeki.info/wp-content/uploads/2018/02/trebeki-asociacion-cooperativa-1801.jpg"} alt="" className="border-b-1 border-black/10 w-full h-40 object-cover" />
                                </div>
                                <div className="p-1">
                                    <h2 className="text-2xl text-ellipsis text-nowrap overflow-hidden mb-2"> {dataAso.nombre}</h2>
                                    <p className="text-sm overflow-hidden text-ellipsis line-clamp-2">
                                        {dataAso.descripcion}
                                    </p>
                                    <div className="pt-2">
                                        <p className=" text-ellipsis text-nowrap overflow-hidden text-lg "> <strong>100</strong> Miembros</p> {/* CAMBIAR */}
                                    </div>

                                </div>
                                <div className="flex justify-between py-1.5 px-1.5">
                                    <button className="bg-sky-200 text-sky-500 rounded-full text-ellipsis text-nowrap overflow-hidden font-bold p-2 w-full hover:bg-sky-400 hover:text-white transition-all cursor-pointer">JOIN ASOCIACION</button>
                                </div>
                            </Link>
                        ))}
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

export default Primary; 
