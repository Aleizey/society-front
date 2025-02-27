import { Avatar, Divider, Stack } from "@mui/material";
import { Link } from "react-router";
import CrudManager from "../hooks/CrudManager";
import { useEffect, useState } from "react";

const ModalCarrito = ({ user }) => {

    const { views } = CrudManager({ url: 'https://adrian.informaticamajada.es/api/productos' });

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        views({ setData: setProductos, setLoading, setErrors: setError });
    }, []);

    return (
        <>
            <div className="fixed bg-white p-3 rounded-lg right-25.5 mt-0.5 shadow-2xl border-1 border-gray-200">
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default ModalCarrito;