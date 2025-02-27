import { useEffect, useState } from "react";
import CrudManager from "../hooks/CrudManager";
import Loading from './Loading';
import { Avatar, Rating } from "@mui/material";

const PostComment = ({ product }) => {

    const { views } = CrudManager({ url: `https://adrian.informaticamajada.es/api/comentarios` });
    const { views: users } = CrudManager({ url: `https://adrian.informaticamajada.es/api/users` });

    const [comentarios, setComentarios] = useState([]);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        views({ setData: setComentarios, setLoading, setErrors: setError });
        users({ setData: setUser, setLoading, setErrors: setError });
    }, []);

    const myComments = comentarios.filter(data => data.producto_id == product);
    if (loading) { return <Loading /> }
    if (error) { return <div>Error...</div> }

    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Los Comentarios</h2>

                <div className="space-y-4">
                    {myComments.map(comment => {
                        const usuario = user.find(user => user.id === comment.user_id);
                        return (
                            <>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <div className="flex items-center space-x-2.5">
                                        <Avatar
                                            alt={usuario.name}
                                            src="/static/images/avatar/1.jpg"
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                ...(user && { '&:hover': { backgroundColor: 'rgba(0, 0, 100)', } })
                                            }}
                                        />
                                        <div>
                                            <h3 className="font-semibold">{usuario.name}</h3>
                                            <p className="text-sm text-gray-500">{comment.created_at.slice(0, 10)}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row item-center my-1">
                                        <Rating name="read-only" value={comment.valoracion} readOnly />
                                    </div>
                                    <p className="text-gray-700">{comment.text}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <button className="text-gray-500 cursor-pointer flex space-x-0.5 flex-row hover:text-blue-600 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                            </svg>
                                            <p>Like</p>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-600">Reply</button>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PostComment;