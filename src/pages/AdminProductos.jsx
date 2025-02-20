import { useState } from "react";
import AddProduct from "../components/CrudProduct/AddProduct";
import { useFetch } from "../components/UseFetch";
import { Link } from "react-router";
import RemoveProduct from "../components/CrudProduct/RemoveProduct";
import EditProduct from "../components/CrudProduct/EditProduct";
import OverflowBody from "../components/OverflowBody";

const AdminProductos = () => {

    const { datos: productos, error: errorProductos, loading: loadingProductos } = useFetch("https://adrian.informaticamajada.es/api/productos", "GET");
    // const { datos: imagenProduct, error: errorImagenProduct, loading: loadingImagenProduct } = useFetch("https://adrian.informaticamajada.es/api/imagenes", "GET");
    const [addProduct, setAddProduct] = useState(null);
    const [removeProduct, setRemoveProduct] = useState(null);
    const [editProduct, setEditProduct] = useState(null);

    if (addProduct) { OverflowBody(addProduct) }
    if (removeProduct) { OverflowBody(removeProduct) }
    if (editProduct) { OverflowBody(editProduct) }

    if (errorProductos) return <p> Error </p>;
    if (loadingProductos) return <p> Cargando... </p>;

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
            <div>
                <button onClick={() => setAddProduct(true)} className="bg-blue-500 hover:bg-blue-900 cursor-pointer p-2 text-white mt-2 ms-2" >Añadir </button>
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

                                    <div onClick={() => setEditProduct(product)} className=" bg-sky-500 text-white rounded-full absolute top-0 right-0 mt-2 mr-2 p-2 shadow-2xl hover:bg-sky-800 hover:text-white transition-all cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
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
                                        <button onClick={() => setRemoveProduct(product.id)} className="bg-red-500 w-full p-1 mt-2 rounded-2xl text-white font-bold">
                                            borrar
                                        </button>
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