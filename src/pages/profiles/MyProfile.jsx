import { useAuth } from "../../hooks/auth";

const MyProfile = () => {

    const { user } = useAuth({ middleware: 'auth' });

    return (
        <div>
            <div class="h-screen w-full flex flex-col">
                <main class="flex-grow w-full flex flex-col overflow-auto mt-5 lg:justify-center">
                    <div class="w-full flex flex-col items-center justify-center ">

                        <div class="p-2 sm:rounded-lg w-full lg:w-[50%]">
                            <div class="max-x-full flex flex-row justify-between bg-white p-4 rounded-lg shadow text-ellipsis text-gray-900 font-bold text-2xl">
                                <div>
                                    Usuario
                                </div>
                                <div>
                                    {user.name}
                                </div>
                            </div>
                        </div>
                        <div class="p-2 sm:rounded-lg w-full lg:w-[50%]">
                            <div class="max-w-full bg-white">
                            </div>
                        </div>

                        {/* <!-- Segundo formulario --> */}
                        <div class="p-2 sm:rounded-lg w-full lg:w-[50%]">
                            <div class="max-w-full bg-white">
                            </div>
                        </div>
                    </div>

                </main>

            </div>
        </div>
    );
}

export default MyProfile;