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
        <main className="contacto bg">
            <div className='contFormulario'>
                <h2 > Contacto Rápido </h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} 
                className="formulario">
                    <div className='contL_I'>
                        <label className='labelContact'> Nombre </label>
                        <input className='inputContact' type="text" required="require" name="nombre" value={formData.nombre} onChange={handleChange} ></input>
                    </div>
                    <div className='contL_I'>
                        <label className='labelContact'> Email </label>
                        <input className='inputContact' type="text" required="require" name="email" value={formData.email} onChange={handleChange}></input>
                    </div>
                    <div className='contL_I'>
                        <label className='labelContact'> Contacto </label>
                        <input className='inputContact' type="text" required="require" name="contacto" value={formData.contacto} onChange={handleChange}/>
                    </div>
                    <div className='contL_I'>
                        <label className='labelContact'> Comentario </label>
                        <textarea className='inputContact' name="mensaje" required="require" value={formData.mensaje} onChange={handleChange}></textarea>
                    </div>

                    {sending ? <p className='msgContact'>Enviando...</p> : null}
                    {msg ? <p className='msgContact'> {msg} </p> : null}
                    <div className='contL_I'>
                        <input className='inputContactSubmit' type="submit" value="Enviar"/>
                    </div>
                    

                </form>
            </div>
            <div class="datos">
                <h2> Otras vías de comunicación: </h2>
                <ul>
                    <li className='liContact'> Contacto: 45567893</li>
                    <li className='liContact'> Email: travelnixcontacto@gmail.com</li>
                    <li className='liContact'> Direccion: Calle Falsa 2345</li>
                    <li className='liContact'> Instagram: PROXIMAMENTE</li>
                </ul>
                <div className="contImgLogo">
                    <img src={require("../img/plane (2).png")} className="imgLogo" alt="Transportes X" />
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;