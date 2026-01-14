import { useState, type ChangeEvent, type FormEvent } from 'react'
import type Contacto from '../types/Contacto'
import { v4 as uuidv4 } from 'uuid'
import Boton from './Boton';

export default function ContactList() {
    // ESTADOS
    const [contactos, setContactos] = useState<Contacto[]>([]);
    const [form, setForm] = useState({ nombre: '', tlf: '', email: '', contraseña: '' });
    const [loginForm, setLoginForm] = useState({ email: '', contraseña: '' }); // Estado para el login
    const [error, setError] = useState<string>('');
    const noHaceNada = ()=>{}
    const agregarContacto = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (form.nombre.trim() === '' || form.tlf.trim() === '' || form.email.trim() === '') {
            setError('Todos los campos son obligatorios');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError('El formato del correo electrónico no es válido.');
            return;
        }

        const tieneNumero = /\d/;
        if (!tieneNumero.test(form.contraseña)) {
            setError('La contraseña debe tener al menos un número');
            return;
        }

        if (form.contraseña.length < 6) {
            setError('La contraseña debe ser igual o mayor a 6 caracteres');
            return;
        }

        const contactoNuevo: Contacto = {
            id: uuidv4(),
            ...form
        }

        setContactos([...contactos, contactoNuevo]);
        setForm({ nombre: '', tlf: '', email: '', contraseña: '' });
    }

    // --- LÓGICA DE LOGIN ---
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Buscamos si existe un contacto con ese email y contraseña
        const usuarioEncontrado = contactos.find(
            (u) => u.email === loginForm.email && u.contraseña === loginForm.contraseña
        );

        if (usuarioEncontrado) {
            alert(`¡Bienvenido de nuevo, ${usuarioEncontrado.nombre}! Has iniciado sesión correctamente.`);
        } else {
            alert('Error: El correo o la contraseña no coinciden con ningún registro.');
        }
    }

    // HANDLERS PARA INPUTS
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    }

    // Eliminación de contacto
    const eliminarContacto = (id: string) => {
        setContactos(contactos.filter(contacto => contacto.id !== id));
    }

    return (
        <div className="container">
            
            {/* SECCIÓN DE REGISTRO */}
            <div className="form-container">
                <h2>Registro de Contactos</h2>
                <form onSubmit={agregarContacto}>
                    {error && <p className="error-msg">{error}</p>}
                    
                    <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
                    <input name="tlf" placeholder="Telefono" value={form.tlf} onChange={handleChange} />
                    <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                    <input type="password" name="contraseña" placeholder="Contraseña" value={form.contraseña} onChange={handleChange} />
                    
                    {/* Botón con clase verde */}
                    <button type="submit" className="btn-register">
                        Registrar e incluir en lista
                    </button>
                </form>
            </div>

            {/* SECCIÓN DE LOGIN */}
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input 
                        name="email" 
                        placeholder="Email" 
                        value={loginForm.email} 
                        onChange={handleLoginChange} 
                    />
                    <input 
                        type="password" 
                        name="contraseña" 
                        placeholder="Contraseña" 
                        value={loginForm.contraseña} 
                        onChange={handleLoginChange} 
                    />
                    <button type="submit">
                        Iniciar Sesión
                    </button>
                </form>
            </div>

            {/* TABLA DE CONTACTOS */}
            <div className="form-container" style={{ backgroundColor: 'transparent', boxShadow: 'none', padding: 0 }}>
                <h2>Lista de Contactos Guardados</h2>
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
                                        <button onClick={() => eliminarContacto(contacto.id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p style={{ color: '#5b3a8f' }}>No hay ningún contacto registrado aún.</p>
                )}
            </div>
            <Boton text='Boton de prueba' typeStyle='danger' submit onClick={noHaceNada}/>
        </div>
    );
}