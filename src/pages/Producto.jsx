import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ModalComment from "../components/ModalComment";
import { useEffect, useState } from "react";
import PostComment from "../components/PostComment";
import Rating from '@mui/material/Rating';
import OverflowBody from "../components/OverflowBody";
import CrudManager from "../hooks/CrudManager";
import { useAuth } from "../hooks/auth";
import axios from "axios";
import { DatasetSharp } from "@mui/icons-material";

let controller = 0;
function Producto() {

    const params = useParams();
    const navigate = useNavigate();

    // Server
    // const { views } = CrudManager({ url: 'https://adrian.informaticamajada.es/api/productos' });

    // Local
    const { views } = CrudManager({ url: `https://adrian.informaticamajada.es/api/productos/${params.id}` });

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dataPedido, setDataPedido] = useState([]);
    const [enCarrito, setEnCarrito] = useState(false);
    const [comment, setComment] = useState(null);

    OverflowBody(comment);

    useEffect(() => {
        views({ setData: setProductos, setLoading, setErrors: setError, navigate });
    }, []);

    const { user } = useAuth({ middleware: 'auth' });
    const idUser = user?.id;

    useEffect(() => {
        if (!idUser || controller !== 0) return;

        controller = 1;
        setLoading(true);
        axios.get(`https://adrian.informaticamajada.es/api/usuarios/${idUser}/pedidos`)
            .then(response => {
                const pedidoCarrito = response.data.data.find(p => p.estado === "carrito");
                if (pedidoCarrito) {
                    setDataPedido([pedidoCarrito]);
                }
            })
            .catch(setError)
            .finally(() => setLoading(false));
    }, [idUser]);

    useEffect(() => {
        if (!dataPedido.length || !dataPedido[0]?.id) return;

        setLoading(true);
        axios.get(`https://adrian.informaticamajada.es/api/pedidos/${dataPedido[0].id}/productos/${params.id}`)

            .then(response => {
                if (response.status === 200) setEnCarrito(true);
            })
            .catch(() => setEnCarrito(false))
            .finally(() => setLoading(false));
    }, [dataPedido]);

    const aniadirCarrito = () => {
        if (!dataPedido.length || !dataPedido[0]?.id) return;

        setLoading(true);
        axios.post(`https://adrian.informaticamajada.es/api/pedidos/${dataPedido[0].id}/productos/associate`, {
            related_key: params.id
        })
            .then(() => setEnCarrito(true))
            .catch(setError)
            .finally(() => setLoading(false));
    };


    if (error) return <p> Error </p>;
    if (loading);

    return (
        <>
            {comment && (
                <ModalComment onClose={() => setComment(null)} productos={productos} />
            )}

            <div className="w-full px-4 flex justify-center py-8">
                <div className="grid md:grid-cols-3 grid-cols-1 w-full -mx-4 relative min-h-screen">

                    {/* Div de imagenes */}
                    <div className="flex flex-row overflow-hidden overflow-x-scroll md:grid md:grid-cols-1 lg:grid-cols-2 gap-1 relative px-4 mb-8 col-span-2">
                        <img src={productos.imagenPrincipal ? productos.imagenPrincipal : "https://answers-afd.microsoft.com/static/images/image-not-found.jpg"} alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://answers-afd.microsoft.com/static/images/image-not-found.jpg" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://answers-afd.microsoft.com/static/images/image-not-found.jpg" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://answers-afd.microsoft.com/static/images/image-not-found.jpg" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://answers-afd.microsoft.com/static/images/image-not-found.jpg" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                        <img src="https://answers-afd.microsoft.com/static/images/image-not-found.jpg" alt="Product"
                            className="w-full h-full object-cover shadow-md rounded-2xl" id="mainImage" />
                    </div>

                    <div className="md:w-auto self-start sticky w-full top-20 h-fit p-4 bg-white">
                        <div className="w-full h-full">
                            <h2 className="text-xl font-bold"> {productos.nombre ? productos.nombre.toUpperCase() : ""} </h2>
                            <div className="mb-4 mt-2">
                                <p className="text-md mr-2"> {productos.precio} EUR </p>
                            </div>

                            {/* Descripcion */}
                            <p className="text-gray-700 w-full mt-8 mb-10"> {productos.descripcion ? productos.descripcion.toUpperCase() : ""} </p>

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
                                        <input type="number" id="quantity" name="quantity" defaultValue={1} min="1" max={productos.stock}
                                            className="py-2.5 w-full text-center border border-gray-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                        {/* <Link className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white" to={`/asociacion/${productos.asociacion_id}`}> Go Asociacion </Link> */}
                                    </div>

                                    <button
                                        onClick={aniadirCarrito}
                                        disabled={enCarrito} // Deshabilita el botón si el producto está en el carrito
                                        className={`bg-sky-600 flex col-span-2 gap-2 items-center justify-center text-white 
                hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 
                py-2.5 w-full focus:ring-offset-2 
                ${enCarrito ? "opacity-50 cursor-not-allowed" : ""}`} // Estilos cuando está deshabilitado
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                            <path d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        {loading ? "Cargando..." : enCarrito ? "En carrito" : "Añadir"}
                                    </button>


                                </div>
                                <button type="button" onClick={() => setComment(productos)}
                                    className="bg-gray-300 w-full justify-center cursor-pointer flex gap-2 items-center  text-gray-800 px-6 py-2.5 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" className="size-6">
                                        <path
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    COMENTAR
                                </button>
                            </div>
                            {/* Div de las estrellas de reseña */}
                            {/* <div className="flex items-center mb-4">

                            </div> */}
                            <Rating name="read-only" value={0} readOnly />
                            {/*  */}
                            <div>
                                <div className="flex flex-row justify-between items-center w-full mt-3 border-y-1 hover:italic transition-all cursor-pointer border-gray-300 py-4 text-lg px-1">
                                    <p>
                                        Envío - Cambios y Devoluciones
                                    </p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                            <path d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center w-full border-b-1 hover:italic transition-all cursor-pointer border-gray-300 py-4 text-lg px-1">
                                    <p>
                                        Detalles
                                    </p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                            <path d="M12 4.5v15m7.5-7.5h-15" />
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
            <PostComment product={params.id} />
        </>
    );

}

export default Producto;