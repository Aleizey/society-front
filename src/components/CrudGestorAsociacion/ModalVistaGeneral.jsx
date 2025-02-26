import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Divider, Fab } from '@mui/material';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import CrudManager from '../../hooks/CrudManager';
import { useNavigate } from 'react-router';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const CustomButton = styled(Button)({
    backgroundColor: "rgba(0, 0, 0, 0.547)",
    color: "white",
    width: "100%",
    height: "100%",
    position: "absolute",
    boxShadow: "none",
    minWidth: "unset",
    "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.747)",
    },
});

const ModalVistaGeneral = ({ datosAso, onClose }) => {

    const { updates } = CrudManager({ url: `https://adrian.informaticamajada.es/api/asociaciones/${datosAso.id}` });

    const [product, setProduct] = useState({
        nombre: datosAso.nombre || "",
        descripcion: datosAso.descripcion || "",
        cif: datosAso.cif || "",
        direccion: datosAso.direccion || "",
        tipo: datosAso.tipo || "",
        imagenPrincipal: datosAso.imagenPrincipal || "",
        // logo: "",
    });

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const [previews, setPreviews] =
        useState({ imagenPrincipal: datosAso.imagenPrincipal, logo: datosAso.imagenPrincipal });

    const handleFileChange = (event, tipo) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviews((prev) => ({ ...prev, [tipo]: imageUrl }));
            setProduct((prev) => ({ ...prev, [tipo]: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedFields = {};

        Object.keys(product).forEach((key) => {
            if (product[key] !== datosAso[key]) {
                updatedFields[key] = product[key];
            }
        });

        console.log("Datos antes de enviar:", updatedFields);
        updates({ product: updatedFields, setErrors, setStatus });
        onClose()

    };

    return (
        <div className="fixed inset-0 z-200 flex justify-center items-center bg-black/80 bg-opacity-50 select-none h-screen">
            <div className="bg-white w-full h-min md:w-240 scale-y-85 md:scale-80 md:rounded-lg p-5">
                <div className='grid grid-cols-2 items-center pb-3'>
                    <div className='text-sm font-medium text-gray-500'>
                        VISTA GENERAL
                    </div>
                    <div className='ms-auto'>
                        <Fab onClick={() => onClose(null)} size='small'
                            sx={{
                                background: "var(--color-gray-400) ",
                                color: "white",
                                boxShadow: 0,
                                ":hover": {
                                    background: "black",
                                }
                            }} aria-label="add">
                            <CloseIcon />
                        </Fab>
                    </div>
                </div>

                <div className='pb-5 m-0 '>
                    <Divider />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col h-full'>
                    <div className='grid grid-cols-1 gap-3 relative overflow-hidden rounded-sm'>
                        <CustomButton component="label" variant="contained">
                            <AddIcon />
                            <VisuallyHiddenInput type="file" accept="image/*" onChange={(e) => handleFileChange(e, "imagenPrincipal")} />
                        </CustomButton>
                        {previews.imagenPrincipal && <img src={previews.imagenPrincipal} alt="Imagen" className="w-full md:h-50 h-20 object-cover" />}
                    </div>

                    <div className='py-5 m-0 '>
                        <Divider />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 md:gap-3 h-auto'>
                        <div className='relative rounded-sm overflow-hidden min-h-[80px] flex items-center justify-center'>
                            <CustomButton component="label" variant="contained" className="absolute inset-0 flex items-center justify-center">
                                <AddIcon />
                                <VisuallyHiddenInput type="file" accept="image/*" onChange={(e) => handleFileChange(e, "logo")} />
                            </CustomButton>
                            {previews.logo && <img src={previews.logo} alt="Logo" className="w-full h-20 md:h-full object-cover" />}
                        </div>
                        <div className='grid col-span-3 grid-cols-1'>
                            <div>
                                <label className='text-xs font-medium text-gray-600' htmlFor="nombre">NOMBRE</label>
                                <input type="text" name="nombre" className='bg-gray-100 text-gray-500 px-2 rounded-t-none py-2 border-b-1 w-full outline-0' value={product.nombre} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label className='text-xs font-medium text-gray-600' htmlFor="tipo">TIPO</label>
                                <select name="tipo" className='bg-gray-100 text-gray-500 px-2 rounded-t-none py-2 border-b-1 w-full outline-0' value={product.tipo} onChange={handleInputChange}>
                                    <option value="">Seleccione un tipo</option>
                                    <option value={datosAso.tipo}>{datosAso.tipo}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='py-5 m-0 '>
                        <Divider />
                    </div>

                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <label className='text-xs font-medium text-gray-600' htmlFor="cif">CIF</label>
                            <input type="text" name="cif" className='bg-gray-100 text-gray-500 px-2 rounded-t-none py-2 border-b-1 w-full outline-0' value={product.cif} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label className='text-xs font-medium text-gray-600' htmlFor="direccion">DIRECCIÓN</label>
                            <input type="text" name="direccion" className='bg-gray-100 text-gray-500 px-2 rounded-t-none py-2 border-b-1 w-full outline-0' value={product.direccion} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <label className='text-xs font-medium text-gray-600' htmlFor="descripcion">DESCRIPCIÓN</label>
                        <textarea name="descripcion" rows={4} className='bg-gray-100 text-gray-500 px-2 rounded-t-none py-2 border-b-1 w-full outline-0' value={product.descripcion} onChange={handleInputChange}></textarea>
                    </div>

                    <div className='py-5 m-0 '>
                        <Divider />
                    </div>

                    <div className='grid grid-cols-1'>
                        <button type='submit' className='bg-sky-600 border-b-4 border-sky-300 cursor-pointer hover:bg-sky-700 transition-all p-1.5 rounded-t-sm text-white font-medium text-lg'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalVistaGeneral;
