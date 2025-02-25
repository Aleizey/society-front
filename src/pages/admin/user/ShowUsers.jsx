import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CrudManager from "../../../hooks/CrudManager";

const ShowUsers = () => {

    const idUser = useParams().id;

    const { views } = CrudManager({ url: `https://adrian.informaticamajada.es//api/users/${idUser}` });

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        views({ setData: setUser, setLoading, setErrors: setError });
    }, []);

    return (
        <>
            <div class="py-12 w-full bg-gray-100">
                <div class="max-w-full h-full mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div class="p-4 sm:p-8 h-full bg-white shadow sm:rounded-lg">
                        <div class="w-full">
                            <div class="sm:flex sm:items-center">
                                <div class="sm:flex-auto">
                                    <h1 class="text-base font-semibold leading-6 text-gray-900">Show User</h1>
                                </div>
                                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                    <Link to="/admin/users" type="button" class="block rounded-md bg-sky-900 px-10 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-700">Back</Link>
                                </div>
                            </div>

                            <div class="flow-root">
                                <div class="mt-8 overflow-x-auto">
                                    <div class="inline-block min-w-full py-2 align-middle">
                                        <div class="mt-6 border-t border-gray-100">
                                            <dl class="divide-y text-start divide-gray-100">
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Name</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {user.name}
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Email</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {user.email}
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Admin</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {user.admin ? "Si" : "No"}
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Telefono</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {user.telf}
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Dirección</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {user.direccion}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ShowUsers;