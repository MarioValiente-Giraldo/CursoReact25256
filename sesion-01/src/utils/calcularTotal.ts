import type { Producto } from "../types/Producto";

export const calcularTotal=(productos: Producto[]):number=>{
    return productos.reduce((total,producto)=>total+producto.precio,0);
};