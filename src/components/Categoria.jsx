import React from 'react';

const Categoria = ({ categoria }) => {
    const { icono, nombre, id } = categoria
    return (
        <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
            <img src={`/img/icono_${icono}.svg`} alt="Imagen icono" className="w-12"/>
            <p className="text-lg font-bold cursor-pointer truncate">{ nombre }</p>
        </div>
    );
};

export default Categoria;
