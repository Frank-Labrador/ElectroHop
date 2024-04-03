// CheckoutForm.js
import './CheckoutForm.css';
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        if (!name || !phone || !email) { // Validación de entrada
            alert('Por favor complete todos los campos.');
            return;
        }

        if (!validateEmail(email)) { // Validación de correo electrónico
            alert('Por favor ingrese un correo electrónico válido.');
            return;
        }

        const userData = {
            name, phone, email
        };

        onConfirm(userData);
    };

    const validateEmail = (email) => {
        // Expresión regular para validar el formato de correo electrónico
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className='Label'>
                    Teléfono
                    <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className='Label'>
                    Correo electrónico
                    <input
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='Button' >Crear Orden</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;

