import React from 'react';
import Logo from '/img/logo.svg'
import  { categorias } from "../data/categorias.js";
import Categoria from "./Categoria.jsx";

const Sidebar = () => {
    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img src={Logo} alt="Logo" className="w-40"/>
            </div>
            <div className="mt-10">
                { categorias.map( categoria => (
                    <Categoria categoria={categoria} key={categoria.id} />
                ))}
            </div>
            <div className="my-5 py-5">
                <button type="button" className="text-center bg-red-500 w-full p-3 font-bold text-white">Cancelar orden</button>
            </div>
        </aside>
    );
};

export default Sidebar;
