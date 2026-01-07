import { useState } from 'react';
import { productosAlimentos, productosElectronicos, productosRopa } from '../types/Producto'
import type { Producto } from '../types/Producto'
import { calcularTotal } from '../utils/calcularTotal';

export const ProductList = () => {
    const [categoria, setCategoria] = useState<'Alimentos' | 'Electrónica' | 'Ropa'>('Electrónica');

    const getProductos = (): Producto[] => {
        switch (categoria) {
            case 'Alimentos': return productosAlimentos;
            case 'Electrónica': return productosElectronicos;
            case 'Ropa': return productosRopa;
            default: return productosElectronicos;
        }
    }

    const productos = getProductos();
    const total = calcularTotal(productos);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <header className="mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-800">Calculadora de productos</h1>
            </header>

            <main>
                <div className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">Selecciona una categoría</h2>
                    <div className="flex gap-2">
                        {(['Electrónica', 'Ropa', 'Alimentos'] as const).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategoria(cat)}
                                className={`px-4 py-2 rounded-md transition-colors ${
                                    categoria === cat 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Lista de productos</h2>
                    <div className="grid gap-4">
                        {productos.map((producto) => (
                            <div 
                                key={producto.id} 
                                className={`p-4 rounded-lg border-2 shadow-sm ${
                                    producto.disponible 
                                    ? 'bg-green-50 border-green-200' 
                                    : 'bg-red-50 border-red-200'
                                }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-lg font-bold text-gray-900">{producto.nombre}</p>
                                        <p className="text-gray-600">Precio: {producto.precio}€</p>
                                    </div>
                                    <p className={`text-sm font-bold ${producto.disponible ? 'text-green-700' : 'text-red-700'}`}>
                                        {producto.disponible ? 'Disponible' : 'Agotado'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-gray-100 rounded-xl text-right">
                        <h3 className="text-2xl font-bold text-gray-800">
                            Total: <span className="text-blue-600">{total}€</span>
                        </h3>
                    </div>
                </div>
            </main>
        </div>
    );
}