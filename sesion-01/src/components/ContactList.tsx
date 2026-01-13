import  { useState, type ChangeEvent, type FormEvent } from 'react'
import type Contacto from '../types/Contacto'
import { v4 as uuidv4 } from 'uuid' 
export default function ContactList() {
    const [contactos,setContactos] = useState<Contacto[]>([]);
    const [form,setForm] = useState({nombre:'',tlf:'',email:'',contraseña:''})
    const [error, setError] = useState<string>('');
    const agregarContacto=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setError('');
        if (form.nombre.trim() === '' || form.tlf.trim() === '' || form.email.trim() === '') return;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
        setError('El formato del correo electrónico no es válido.');
        return;
        }
        const tieneNumero = /\d/;
        if (!tieneNumero.test(form.contraseña)){
            setError('La contraseña debe tener al menos un número')
            return;
        }

        if (form.contraseña.length<6 || form.contraseña ==='' ){
            setError('La contraseña debe ser igual o mayor a 6 caracteres')
            return;
        }
        
        const contactoNuevo:Contacto = {
            id:uuidv4(), ...form

        }
        setContactos([...contactos,contactoNuevo]);
        setForm({ nombre: '', tlf: '', email: '',contraseña:'' });     
        }
        const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setForm({...form,[e.target.name]:e.target.value})
        }

        const eliminarContacto = (id:string)=>{
            setContactos(contactos.filter(contacto=>{contacto.id!==id}));
        }
    return (
        <div>
        <form onSubmit={agregarContacto}>
            {error && <p>{error}</p>}

            <input
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
        />
        <input
            name="tlf"
            placeholder="Telefono"
            value={form.tlf}
            onChange={handleChange}
        />
        <input
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
        />
        <input
            type="password"
            name="contraseña"
            placeholder="Escriba su contraseña"
            value={form.contraseña}
            onChange={handleChange}
        />
        
        <button type="submit">Agregar contacto</button>
        </form>

        <br />

        {contactos.length > 0 ? (
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {contactos.map((contacto) => (
                <tr key={contacto.id}>
                <td>{contacto.nombre}</td>
                <td>{contacto.tlf}</td>
                <td>{contacto.email}</td>
                <td>
                    <button type="button" onClick={() => eliminarContacto(contacto.id)}>
                    Eliminar
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        ) : (
        <p>No hay ningún contacto</p>
        )}
    </div>
);
}
