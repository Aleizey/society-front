import { Link } from "react-router-dom";
import FormUsers from "./FormUsers";
import CrudManager from "../../../hooks/CrudManager";
import { useState } from "react";

const CreateUser = () => {

    const { creates } = CrudManager({ url: `https://adrian.informaticamajada.es//api/users` });

    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState([]);

    const handleUpdate = async (formData) => {
        console.log(formData)
        await creates({
            data: formData, setErrors, setStatus
        });
    };
    return (
        <div className="py-12">
            <div className="max-w-full mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <div className="w-full">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-gray-900">Create User</h1>
                                <p className="mt-2 text-sm text-gray-700">Add a new User.</p>
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
                                    <FormUsers
                                        onSubmit={handleUpdate}
                                        status={status}
                                        errors={errors}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
