import './CheckoutForm.css'
import {useState} from 'react'

const CheckoutForm = ({onCofirm}) => {
    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.prevenDefault()

        const userData = {
            name, phone, email
        }

        onCofirm(userData)
    }

    return (
        <div className='Container'>
            <form onSubmit = {handleConfirm} className='form'>
                <label className='Label'>
                    Nombre
                    <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({target}) => setName(target.value) } 
                        />
                </label>
                <label className='Label'>
                    <input
                    className='Input'
                    type='email'
                    value ={email}
                    onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type = 'submit' className='Button'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm