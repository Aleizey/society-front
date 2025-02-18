import { useFetch } from "../components/UseFetch";
import { useParams } from "react-router";
import { Link } from "react-router";
import ModalComment from "../components/ModalComment";
import { useState } from "react";
import PostComment from "../components/PostComment";

function Producto() {

    const params = useParams();
    const { datos, error, loading } = useFetch(`https://adrian.informaticamajada.es/api/productos/${params.id}`, "GET");
    const [comment, setComment] = useState(null);

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

            <div className="">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap -mx-4">

                        {/* Div de imagenes */}
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product"
                                className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
                            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                                <img src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 1"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)" />
                                <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 2"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)" />
                                <img src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 3"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)" />
                                <img src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 4"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-xl font-bold"> {datos.nombre.toUpperCase()} </h2>
                            <div className="mb-4 mt-2">
                                <p className="text-md mr-2"> {datos.precio} EUR </p>
                            </div>

                            {/* Descripcion */}
                            <p className="text-gray-700 mb-6 w-md"> {datos.descripcion.toUpperCase()} </p>

                            {/* Colores */}
                            <div className="mb-6">
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
                                <div className="flex flex-row">
                                    <div className="">
                                        <input type="number" id="quantity" name="quantity" min="1" value="1"
                                            className="py-2 text-center border border-gray-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                        {/* <Link className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white" to={`/asociacion/${datos.asociacion_id}`}> Go Asociacion </Link> */}
                                    </div>

                                    <Link to={'/carrito'}
                                        className="bg-sky-600 flex gap-2 items-center justify-center text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 py-2 w-full focus:ring-offset-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        AÑADIR
                                    </Link>
                                </div>
                                <button type="button" onClick={() => setComment(datos)}
                                    className="bg-gray-200 w-full justify-center cursor-pointer flex gap-2 items-center  text-gray-800 px-6 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    COMENTAR
                                </button>
                            </div>
                            {/* Div de las estrellas de reseña */}
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-5 text-dark">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-5 text-dark">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-5 text-dark">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-5 text-dark">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-5 text-dark">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                            </div>
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