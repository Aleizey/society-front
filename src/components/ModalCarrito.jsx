import { Avatar, Divider, Stack } from "@mui/material";
import { Link } from "react-router";
import CrudManager from "../hooks/CrudManager";
import { useEffect, useState } from "react";

const ModalCarrito = ({ user }) => {

    const { views } = CrudManager({ url: 'https://adrian.informaticamajada.es/api/pedidos' });

    const [pedidos, setpedidos] = useState([]);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log(productos)

    useEffect(() => {
        views({ setData: setpedidos, setLoading, setErrors: setError });
        console.log(pedidos);

        const misPedidios = pedidos.find(pedido => pedido.user_id === user.id && pedido.estado === "carrito");
        console.log(misPedidios?.id);

        const { views: producto } = CrudManager({ url: `https://adrian.informaticamajada.es/api/pedidos/${misPedidios?.id}/productos` });

        if (misPedidios) {
            producto({ setData: setProductos, setLoading, setErrors: setError });
        }
    }, []);



    return (
        <>
            <div className="fixed bg-white p-3 rounded-lg right-25.5 mt-0.5 shadow-2xl border-1 border-gray-200">
                <div className="grid grid-cols-3">
                    <div>{productos.id}</div>
                    <div>{productos.nombre}</div>
                    <div>{productos.descripcion}</div>
                </div>
            </div>
        </>
    )
}

export default ModalCarrito;