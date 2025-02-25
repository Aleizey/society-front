import { useState } from "react";

const SubirImagen = () => {
    const [file, setFile] = useState(null);
    const [productoId, setProductoId] = useState("");
    const [mensaje, setMensaje] = useState("");

    // const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleIdChange = (event) => {
        setProductoId(event.target.value);
    };

    const subirImagen = async () => {
        if (!file || !productoId) {
            setMensaje("Por favor, selecciona una imagen y un ID de producto.");
            return;
        }

        const formData = new FormData();
        formData.append("url", file);
        formData.append("producto_id", productoId);

        try {
            const response = await fetch("https://adrian.informaticamajada.es///api/imagenes", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (response.ok) {
                setMensaje(`Imagen subida con éxito: ${data.url}`);
            } else {
                setMensaje(`Error: ${data.error}`);
            }
        } catch (error) {
            setMensaje("Error al subir la imagen.");
            console.error(error);
        }
    };

    return (
        <div className="w-full flex justify-center m-5">
            <div className="bg-white border border-gray-200 w-min shadow-2xl p-10 rounded-sm flex flex-col space-y-1.5 items-start justify-center">
                <h2 className="text-MD font-bold text-center w-full mb-5">IMAGEN PRODUCTO</h2>
                <input className="bg-white border-b-1 text-gray-500 py-2 flex" type="file" accept="image/*" onChange={handleFileChange} />
                <input
                    className="border-b-1 py-2 w-full flex text-gray-500"
                    type="text"
                    placeholder="ID del Producto"
                    value={productoId}
                    onChange={handleIdChange}
                />
                <button className="bg-sky-500 mt-5 p-2 px-4 w-full rounded-md text-white  " onClick={subirImagen}>Subir Imagen</button>
                {mensaje &&

                    <span className="bg-gray-300 w-full mt-5 rounded-md p-2 font-bold flex flex-row justify-between items-center">
                        <p>{mensaje}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-8">
                            <path  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>

                    </span>
                }

            </div>
        </div>
    );
};

export default SubirImagen;
