import '../Styles/Componentes/Pages/ContactoPage.css';
import React, {useState} from 'react';
import axios from 'axios';


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        Contacto: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await 
axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2> Contacto Rápido </h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} 
                className="formulario">
                    <p>
                        <label> Nombre </label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} ></input>
                    </p>
                    <p>
                        <label> Email </label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label> Contacto </label>
                        <input type="text" name="contacto" value={formData.contacto} onChange={handleChange}/>
                    </p>
                    <p>
                        <label> Comentario </label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>

                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p> {msg} </p> : null}
                    <p className='centrar'><input type="submit" value="Enviar"/></p>

                </form>
            </div>
            <div class="datos">
                <h2> Otras vías de comunicación: </h2>
                <ul>
                    <li className='nav__li'> Contacto: 45567893</li>
                    <li className='nav__li'> Email: transportex@contacto.com.ar</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;