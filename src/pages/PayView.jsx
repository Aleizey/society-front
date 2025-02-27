import NavbarShop from "../components/NavbarShop";
import { Link } from "react-router";

function PayView() {
    return (
        <>
            <NavbarShop currentStep={1}/>
            <div class="max-w-md mx-auto bg-gray-100 shadow-md rounded-md overflow-hidden mt-16">
                <div class="bg-blue-600 text-white p-4 flex justify-between">
                    <div class="font-bold text-lg">Credit Card</div>
                    <div class="text-lg"><i class="fab fa-cc-visa"></i></div>
                </div>
                <div class="p-6">
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="card_number">
                            Card Number
                        </label>
                        <div class="relative mt-1">
                            <input type="text" name="card_number" id="card_number" class="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500" placeholder="xxxx xxxx xxxx xxxx" required />
                            <span class="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="20px" height="20px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
                                    <path id="XMLID_2192_" d="M92,23.4c0-4.1-3.3-7.4-7.4-7.4H7.4C3.3,16,0,19.3,0,23.4v45.3C0,72.7,3.3,76,7.4,76h77.3 c4.1,0,7.4-3.3,7.4-7.4V23.4z M84,24v7H8v-7H84z M8,68V43h76v25H8z M76.5,55c0,2.2-1.8,4-4,4h-19c-2.2,0-4-1.8-4-4s1.8-4,4-4h19 C74.7,51,76.5,52.8,76.5,55z" />
                                </svg>

                            </span>
                        </div>
                    </div>
                    <div class="mb-4 flex justify-between">
                        <div>
                            <label class="block text-gray-700 font-bold mb-2" for="expiration_date">
                                Expiration Date
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="expiration_date" type="text" placeholder="MM/YY" />
                        </div>
                        <div>
                            <label class="block text-gray-700 font-bold mb-2" for="cvv">
                                CVV
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cvv" type="text" placeholder="XXX" />
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="name_on_card">
                            Name on Card
                        </label>
                        <div class="relative mt-1">
                            <input type="text" name="name" id="name" class="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500" placeholder="Alejandro Valdivia" required />
                            <span class="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                                <svg width="20px" height="20px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="11" r="7" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4 41C4 32.1634 12.0589 25 22 25" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M31 42L41 32L37 28L27 38V42H31Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </span>
                        </div>
                    </div>
                    <Link to='/carrito/envio'
                        class="bg-blue-600 text-white py-2 px-4 rounded font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline">Save
                        Card
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PayView;
