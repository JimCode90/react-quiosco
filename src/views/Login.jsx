import React from 'react';
import {Link} from "react-router-dom";

function Login(props) {
    return (
        <>
            <h1 className="text-4xl font-black">Iniciar sesión</h1>
            <p>Para crear un pedido debes iniciar sesión</p>
            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">Email :</label>
                        <input
                            id="email"
                            type="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Tu email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password">Password :</label>
                        <input
                            id="password"
                            type="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="Tu password"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Iniciar sesión"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/registro">¿No tienes cuenta? Crea una</Link>
            </nav>
        </>
    );
}

export default Login;