import { createContext, useState } from "react";
import  { categorias as categoriasDB } from "../data/categorias.js";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);

    return (
        <QuioscoContext.Provider value={{
            autenticado
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext;
