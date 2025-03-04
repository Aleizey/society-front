import NavbarShop from "../components/NavbarShop";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { useEffect, useState } from "react";
import axios from "axios";

const Carrito = () => {
    const { user } = useAuth({ middleware: 'auth' });
    const idUser = user?.id;

    const [dataPedido, setDataPedido] = useState([]);
    const [dataProducto, setDataProducto] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [precio, setPrecio] = useState(0);

    // Obtener los pedidos del usuario
    useEffect(() => {
        if (!idUser) return;

        setLoading(true);
        axios.get(`https://adrian.informaticamajada.es/api/usuarios/${idUser}/pedidos`)
            .then(response => setDataPedido(response.data.data))
            .catch(setError)
            .finally(() => setLoading(false));
    }, [idUser]);

    useEffect(() => {
        if (dataPedido.length === 0) return;

        setLoading(true);
        const fetchProductos = async () => {
            try {
                const promises = dataPedido
                    .filter(pedido => pedido.estado === 'carrito')
                    .map(async (pedido) => {
                        const response = await axios.get(`https://adrian.informaticamajada.es/api/pedidos/${pedido.id}/productos`);
                        return response.data.data;
                    });

                const resultados = await Promise.all(promises);
                setDataProducto(resultados.flat());
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, [dataPedido]);

    useEffect(() => {
        const total = dataProducto.reduce((sum, producto) => sum + parseFloat(producto.precio || 0), 0);
        setPrecio(total);
    }, [dataProducto]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <NavbarShop currentStep={0} />
            <div className="container mx-auto mt-10">
                <div className="sm:flex shadow-md my-10">
                    <div className="w-full sm:w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Carrito</h1>
                            <h2 className="font-semibold text-2xl">{dataProducto.length}</h2>
                        </div>
                        {dataProducto.length === 0 ? (
                            <p>No hay productos en el carrito</p>
                        ) : (
                            dataProducto.map((producto) => (
                                <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50" key={producto.id}>
                                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                                        <img src={producto.imagen} alt={producto.nombre} className="h-full object-center object-cover md:block hidden" />
                                    </div>
                                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-base font-black leading-none text-gray-800">{producto.nombre}</p>
                                            <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                                {[1, 2, 3, 4, 5].map(num => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <p className="w-96 text-xs leading-3 text-gray-600">{producto.descripcion}</p>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Eliminar</p>
                                            <p className="text-base font-black leading-none text-gray-800">{producto.precio} €</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
                                />
                            </svg>
                            Seguir comprando
                        </Link>
                    </div>
                    <div id="summary" className="w-full sm:w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Resumen del pedido</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {dataProducto.length}</span>
                            <span className="font-semibold text-sm">{precio.toFixed(2)} €</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">
                                Envío
                            </label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Compra normal</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                                Código de descuento
                            </label>
                            <input type="text" id="promo" placeholder="Introduce tu código" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                            Aplicar
                        </button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Costo total</span>
                                <span>{precio.toFixed(2)} €</span>
                            </div>
                            <Link to='/carrito/pay' className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full p-3 text-center block">
                                Realizar pago
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carrito;
