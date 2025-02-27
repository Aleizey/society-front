import { Link, useParams } from "react-router";
import FormUsers from "./FormUsers";
import CrudManager from "../../../hooks/CrudManager";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading"

const UpdateUsers = () => {

    const { id } = useParams();
    const { updates } = CrudManager({ url: `https://adrian.informaticamajada.es/api/users/${id}` });

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState([]);

    const { views } = CrudManager({ url: `https://adrian.informaticamajada.es/api/users/${id}` });


    useEffect(() => {
        const fetchUser = async () => {
            views({ setData: setUser, setLoading, setErrors: setError });
        }
        fetchUser();
    }, [id]);

    const handleUpdate = async (formData) => {

        await updates({
            product: formData, setErrors, setStatus
        });
    };

    return (
        <>
            <div className="py-12 w-full text-start">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="w-full">
                            <div className="sm:flex sm:items-center">
                                <div className="sm:flex-auto">
                                    <h1 className="text-base font-semibold leading-6 text-gray-900">Update User</h1>
                                    <p className="mt-2 text-sm text-gray-700">Update existing User.</p>
                                </div>
                                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                    <Link
                                        to="/admin/users"
                                        className="block rounded-md bg-sky-900 px-10 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
                                    >
                                        Back
                                    </Link>
                                </div>
                            </div>

                            <div className="flow-root">
                                <div className="mt-8 overflow-x-auto">
                                    <div className="max-w-xl py-2 align-middle">
                                        {loading ? (
                                            <Loading />
                                        ) : error ? (
                                            <p>{error}</p>
                                        ) : (
                                            <FormUsers
                                                user={user}
                                                onSubmit={handleUpdate}
                                                status={status}
                                                errors={errors}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UpdateUsers;