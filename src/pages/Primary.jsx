import { useContext, useState } from "react";
import { SocietyContext } from "../components/ProviderSociety";
import SubirImagen from "../components/SubirImagen";
import { Link } from "react-router-dom";

const Primary = () => {

    const { asociaciones } = useContext(SocietyContext);

    return (
        <>
            {/* <SubirImagen /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 lg:px-8 ">
                {asociaciones.map(dataAso => (
                    <div className="flex flex-col justify-between border-1 border-black/10 overflow-hidden w-full rounded-2xl text-black shadow-2xl" key={dataAso.id} >
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
                            <Link to={`/asociacion/${dataAso.id}`} className="bg-sky-700 w-35 text-center rounded-2xl text-ellipsis text-nowrap overflow-hidden rounded-e-none border-e-2 font-bold text-white p-2 hover:bg-sky-950 transition-all cursor-pointer">VIEW</Link>
                            <button className="bg-sky-700 rounded-2xl text-ellipsis text-nowrap overflow-hidden rounded-s-none border-s-2 font-bold text-white p-2 w-full hover:bg-sky-950 transition-all cursor-pointer">JOIN ASOCIACION</button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Primary; 
