export interface Producto {
    id:number,
    nombre:string,
    precio:number,
    disponible:boolean,
    categoria?:string
}


// Datos de productos
export const productosElectronicos: Producto[] = [
  { id: 1, nombre: "Laptop", precio: 1200, disponible: true, categoria: "Electrónicos" },
  { id: 2, nombre: "Mouse", precio: 25, disponible: true, categoria: "Electrónicos" },
  { id: 3, nombre: "Teclado", precio: 80, disponible: false, categoria: "Electrónicos" }
];

export const productosAlimentos: Producto[] = [
  { id: 4, nombre: "Pan", precio: 2.5, disponible: true, categoria: "Alimentos" },
  { id: 5, nombre: "Leche", precio: 3.8, disponible: true,categoria: "Alimentos"},
  { id: 6, nombre: "Huevos", precio: 4.2, disponible: true, categoria: "Alimentos" }
];

export const productosRopa: Producto[] = [
  { id: 7, nombre: "Camiseta", precio: 15, disponible: true, categoria: "Ropa" },
  { id: 8, nombre: "Pantalón", precio: 45, disponible: true, categoria: "Ropa" },
  { id: 9, nombre: "Zapatos", precio: 85, disponible: false, categoria: "Ropa" }
];