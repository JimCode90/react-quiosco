import { productos } from "../data/productos.js";
import Producto from "../components/Producto.jsx";

function Inicio() {
    return (
        <>
            <h1 className="text-4xl font-black">Inicio</h1>
            <p className="text-2xl my-10">Elige y personaliza tu pedido</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                { productos.map(producto => (
                    <Producto key={producto.id} producto={producto}/>
                ))}
            </div>
        </>
    );
}

export default Inicio;