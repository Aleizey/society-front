
export default function OverflowBody(dato) {

    if (dato) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
}