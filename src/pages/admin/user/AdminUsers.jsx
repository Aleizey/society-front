import { useEffect, useState } from "react";
import CrudManager from "../../../hooks/CrudManager";
import OverflowBody from "../../../components/OverflowBody";
import Loading from "../../../components/Loading";
import { Link, Route, Routes } from "react-router";

const AdminUsers = () => {

    const { views } = CrudManager({ url: 'http://localhost:8000/api/users' });

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [modalAprobar, setModalAprobar] = useState(null);


    const fetchData = () => {
        views({ setData: setUsers, setLoading, setErrors: setError });
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

    return (
        <>
            <div className="h-full w-full flex flex-col bg-gray-100">
                <main className="flex-grow h-screen flex flex-col overflow-auto lg:justify-center" >
                    <div className="py-12 h-full">
                        <div className="max-w-full h-full mx-auto sm:px-6 lg:px-8 space-y-6">
                            <div className="p-4 sm:p-8 text-[#352c07] bg-white h-full overflow-y-scroll shadow sm:rounded-lg">
                                <div className="w-full">
                                    <div className="sm:flex sm:items-center">
                                        <div className="sm:flex-auto">
                                            <h1 className="text-base font-semibold leading-6 text-[#352c07]">Administración de Usuarios</h1>
                                        </div>
                                        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                            <Link to="/admin/users/crear" type="button" className="cursor-pointer block rounded-md bg-sky-900 px-12 py-2 text-center text-sm font-semibold text-white shadow hover:bg-sky-700">Add new</Link>
                                        </div>
                                    </div>

                                    <div className="flow-root">
                                        <div className="mt-8 overflow-x-auto">
                                            <div className="inline-block min-w-full py-2 align-middle">
                                                <table className="w-full divide-y text-start divide-gray-300">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-[#352c07] bg-white">ID</th>
                                                            <th scope="col" className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-[#352c07] bg-white">Name</th>
                                                            <th scope="col" className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-[#352c07] bg-white">Email</th>
                                                            <th scope="col" className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-[#352c07] bg-white">Telefono</th>
                                                            <th scope="col" className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-[#352c07] bg-white">Direccion</th>
                                                            <th scope="col" className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-[#352c07] bg-white">Admin</th>
                                                            <th scope="col" className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#352c07] bg-white"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 text-[#352c07] bg-white">
                                                        {users.map((user) => (
                                                            <tr key={user.id} className="even:bg-gray-50">
                                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-[#352c07] bg-white">1</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#352c07] bg-white">{user.name}</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#352c07] bg-white">{user.email}</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#352c07] bg-white">{user.telf}</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#352c07] bg-white">{user.direccion}</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-[#352c07] bg-white">{user.admin ? "Si" : "No"}</td>
                                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#352c07] bg-white">
                                                                    <Link to={`/admin/users/${user.id}/show`} className="text-gray-800 bg-gray-200 px-7 rounded-md p-2 font-bold hover:text-black hover:bg-slate-400 mr-2">Show</Link>
                                                                    <Link to={`/admin/users/${user.id}/actualizar`} className="text-sky-800 bg-sky-200 p-2 px-7 rounded-md font-bold hover:text-sky-600 mr-2">Edit</Link>
                                                                    <Link to={`/admin/users/${user.id}/show`} className="text-red-800 bg-red-300 p-2 px-7 rounded-md font-bold hover:text-red-600">Delete</Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}

export default AdminUsers;