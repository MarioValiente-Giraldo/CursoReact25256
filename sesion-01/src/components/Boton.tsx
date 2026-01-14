import React from 'react'

type TipoBoton = 'primary' | 'secundary' | 'danger'

interface ButtonProps {
    text: string;
    typeStyle: TipoBoton; 
    submit: boolean;     
    onClick: () => void;
}
export default function Boton({ text, typeStyle, submit, onClick }: ButtonProps) {
    
    const styles = {
        primary: 'bg-blue-500 hover:bg-blue-700 text-white',
        secundary: 'bg-gray-500 hover:bg-gray-700 text-white',
        danger: 'bg-red-500 hover:bg-red-700 text-white'
    }

    return (
        <div>
            <button
                type={submit ? 'submit' : 'button'}
                className={`px-4 py-2 rounded font-semibold shadow transition ${styles[typeStyle]}`}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}