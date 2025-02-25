import NavbarShop from "../components/NavbarShop";

function ConfirmEnvio() {
    return (
        <>
        <NavbarShop currentStep={3} />
            <div class="max-w-2xl mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
                <div class="bg-sky-400 py-6 px-8">
                    <h1 class="text-3xl font-bold text-white text-center"> Tu pago se ha completado </h1>
                </div>
                <div class="p-8">
                    <p class="text-gray-700 mb-6"><span class="text-lg font-bold"> Gracias! </span></p>
                    <p class="text-gray-700 mb-6"> Tu pago se ha procesado con exito, aqui tienes tu codigo de compra. </p>
                    <div class="bg-gray-100 rounded-lg p-4 mb-6">
                        <p class="text-4xl font-bold text-center text-sky-400">5695314</p>
                    </div>
                    <p class="text-gray-700 mb-6">This OTP is valid for <span class="font-semibold">2 minutes</span>. Please do not share this code with anyone.</p>
                    <p class="text-gray-700 mb-2">If you didn't request this code, please ignore this email.</p>
                    <p class="text-gray-700">Thank you for using our service!</p>
                </div>
            </div>
        </>
    );
};

export default ConfirmEnvio;
