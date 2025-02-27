import NavbarShop from "../components/NavbarShop";
import ButtonsEnvio from "../components/ButtonsEnvio";
import SelectPlanEnvio from "../components/SelectPlanEnvio";

function EnvioCarrito() {
    return (
        <>
            <NavbarShop currentStep={2} />
            <SelectPlanEnvio />
            <ButtonsEnvio />
        </>
    );
};

export default EnvioCarrito;
