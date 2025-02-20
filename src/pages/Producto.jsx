import { useFetch } from "../components/UseFetch";
import { useParams } from "react-router";
import { Link } from "react-router";
import ModalComment from "../components/ModalComment";
import { useState } from "react";
import PostComment from "../components/PostComment";
import Rating from '@mui/material/Rating';

function Producto() {

    const params = useParams();
    const { datos, error, loading } = useFetch(`https://adrian.informaticamajada.es/api/productos/${params.id}`, "GET");
    const [comment, setComment] = useState(null);
    const [value, setValue] = useState(2);

    if (comment) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }



    if (error) return <p> Error </p>;
    if (loading) return <p> Cargando </p>;

    return (
        <>
            {comment && (
                <ModalComment comment={comment} onClose={() => setComment(null)} datos={datos} />
            )}

            <div className="w-full px-4 py-8">
                <div className="grid md:grid-cols-3 grid-cols-1 w-full -mx-4 relative min-h-screen">

                    {/* Div de imagenes */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 relative px-4 mb-8 col-span-2">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                    </div>

                    <div className="w-auto self-start sticky top-20 h-fit p-4 bg-white">
                        <div className="w-full h-full">
                            <h2 className="text-xl font-bold"> {datos.nombre.toUpperCase()} </h2>
                            <div className="mb-4 mt-2">
                                <p className="text-md mr-2"> {datos.precio} EUR </p>
                            </div>

                            {/* Descripcion */}
                            <p className="text-gray-700 w-full mt-15 mb-10"> {datos.descripcion.toUpperCase()} </p>

                            {/* Colores */}
                            <div className="mb-10">
                                <div className="flex space-x-2">
                                    <button
                                        className="size-5 border border-gray-300 bg-black   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                                    <button
                                        className="size-5 border border-gray-300 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                                    <button
                                        className="size-5 border border-gray-300 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                                </div>
                            </div>

                            {/* Tallas */}
                            <div className="flex justify-between space-x-2 pb-4 border-t-1 border-gray-200 pt-1 mb-2">

                                <label className="">

                                    <input type="radio"
                                        className="flex items-center justify-center hover:border-b-1 before:content-['XS'] size-12 checked:border-b-1 appearance-none"
                                        name="size" value="xs" />

                                </label>
                                <label className="">
                                    <input type="radio" className="flex items-center justify-center hover:border-b-1 before:content-['S'] size-12 checked:border-b-1 appearance-none" name="size"
                                        value="s" />

                                </label>
                                <label className="">
                                    <input type="radio" className="flex items-center justify-center hover:border-b-1 before:content-['M'] size-12 checked:border-b-1 appearance-none" name="size"
                                        value="m" />

                                </label>
                                <label className="">
                                    <input type="radio" className="flex items-center justify-center hover:border-b-1 before:content-['L'] size-12 checked:border-b-1 appearance-none" name="size"
                                        value="l" />

                                </label>
                                <label className="">
                                    <input type="radio" className="flex items-center justify-center hover:border-b-1 before:content-['XL'] size-12 checked:border-b-1 appearance-none" name="size"
                                        value="xl" />

                                </label>
                            </div>

                            {/* Cantidad */}
                            {/* Botones */}
                            <div className="flex flex-col space-y-2 mb-6">
                                <div className="grid grid-cols-1 xl:grid-cols-3">
                                    <div className="">
                                        <input type="number" id="quantity" name="quantity" defaultValue={1} min="1" max={datos.stock}
                                            className="py-2.5 w-full text-center border border-gray-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                        {/* <Link className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white" to={`/asociacion/${datos.asociacion_id}`}> Go Asociacion </Link> */}
                                    </div>

                                    <Link to={'/carrito'}
                                        className="bg-sky-600 flex col-span-2 gap-2 items-center justify-center text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 py-2.5 w-full focus:ring-offset-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        AÑADIR
                                    </Link>
                                </div>
                                <button type="button" onClick={() => setComment(datos)}
                                    className="bg-gray-300 w-full justify-center cursor-pointer flex gap-2 items-center  text-gray-800 px-6 py-2.5 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    COMENTAR
                                </button>
                            </div>
                            {/* Div de las estrellas de reseña */}
                            {/* <div className="flex items-center mb-4">

                            </div> */}
                            <Rating name="read-only" value={3} readOnly />
                            {/*  */}
                            <div>
                                <div className="flex flex-row justify-between items-center w-full mt-3 border-y-1 hover:italic transition-all cursor-pointer border-gray-300 py-4 text-lg px-1">
                                    <p>
                                        Envío - Cambios y Devoluciones
                                    </p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center w-full border-b-1 hover:italic transition-all cursor-pointer border-gray-300 py-4 text-lg px-1">
                                    <p>
                                        Detalles
                                    </p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Comentarios */}
            <PostComment product={datos.id} />
        </>
    );

}

export default Producto;