import { Link } from "react-router";

function ButtonsEnvio() {
    return (
        <>
            <div class="sm:flex max-w-screen items-center">
                <div class="sm:w-1/2"></div>
                <div class="sm:w-1/2">
                    <div class="flex items-center justify-center">
                        <Link to='/carrito/pay' class="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800 m-4"> Cancelar </Link>
                        <Link to='/carrito/confirm' class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600 m-4"> Confirmar </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ButtonsEnvio;
