import { useEffect, useState } from "react";
import AddProduct from "../../components/CrudProduct/AddProduct";
import { Link } from "react-router-dom";
import RemoveProduct from "../../components/CrudProduct/RemoveProduct";
import EditProduct from "../../components/CrudProduct/EditProduct";
import OverflowBody from "../../components/OverflowBody";
import CrudManager from "../../hooks/CrudManager";
import Loading from '../../components/Loading';
import PulseElements from "../../components/PulseElements";

const AdminProductos = () => {

    const { views } = CrudManager({ url: 'https://adrian.informaticamajada.es/api/productos' });
    // const { views: viewImagenProducts } = CrudManager({ url: 'https://adrian.informaticamajada.es/api/productos' });

    const [productos, setProductos] = useState([]);
    // const [imagenProduct, viewImagenProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        views({ setData: setProductos, setLoading, setErrors: setError });
        // viewImagenProduct({ setData: viewImagenProduct, setLoading, setErrors: setError });
    }, []);

    const [addProduct, setAddProduct] = useState(null);
    const [removeProduct, setRemoveProduct] = useState(null);
    const [editProduct, setEditProduct] = useState(null);

    OverflowBody(addProduct)
    if (removeProduct) { OverflowBody(removeProduct) }
    if (editProduct) { OverflowBody(editProduct) }

    if (error) return <p> Error </p>;
    if (loading) return <PulseElements />;

    return (
        <>
            {addProduct && (
                <AddProduct onClose={() => setAddProduct(null)} />
            )}
            {removeProduct && (
                <RemoveProduct productId={removeProduct} onClose={() => setRemoveProduct(null)} />
            )}
            {editProduct && (
                <EditProduct productFull={editProduct} onClose={() => setEditProduct(null)} />
            )}
            <div className="flex md:flex-row space-y-2 justify-between p-3">
                <div className="p-2 text-3xl">Administrar Productros</div>
                <div>
                    <button onClick={() => setAddProduct(true)} className="flex flex-row bg-sky-500 space-x-2 hover:bg-sky-900 cursor-pointer p-2.5 px-5 rounded-md font-medium text-white mt-2 ms-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                        </svg>
                        <span>
                            Añadir
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12 lg:px-8">
                    {productos.map(product => {
                        return (

                            <div key={product.id} className="flex flex-col overflow-hidden relative">
                                <div className="h-full w-full relative overflow-hidden">

                                    <Link to={`/producto/${product.id}`} className=" hover-shop">
                                        <img className="object-cover h-full w-full mb-2 relative" src="https://nude-project.com/cdn/shop/files/MILESTONES_WINDBREAKER_BLUE_front_800x.jpg?v=1738834825" alt="" />
                                    </Link>

                                    <div onClick={() => setEditProduct(product)} className=" bg-sky-200 text-sky-500 rounded-full absolute top-0 right-0 mt-2 mr-2 p-2 shadow-2xl hover:bg-sky-800 hover:text-white transition-all cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                        </svg>

                                    </div>
                                    <div onClick={() => setRemoveProduct(product.id)} className=" bg-red-200 text-red-500 rounded-full absolute top-0 left-0 mt-2 ms-2 p-2 shadow-2xl hover:bg-red-800 hover:text-white transition-all cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="flex flex-col ">
                                    <div className="flex flex-col text-center">
                                        <div className="">
                                            <p className="text-md text-ellipsis font-medium overflow-hidden text-nowrap">{product.nombre.toUpperCase()}</p>
                                        </div>
                                        <p className="text-xs text-ellipsis overflow-hidden text-nowrap"><span className="font-medium">{product.precio}</span> EUR </p>
                                    </div>
                                    <div>
                                        {/* <button onClick={() => setRemoveProduct(product.id)} className="bg-red-500 w-full p-1 mt-2 rounded-2xl text-white font-bold">
                                            borrar
                                        </button> */}
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div >
            </div>
        </>
    )
}

export default AdminProductos;