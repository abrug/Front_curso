import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../Componentes/novedades/novedadItem.js';
import '../Styles/Componentes/Pages/NovedadesPage.css'

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState ([]);

    useEffect(()=>{
        const cargarNovedades = async() => {
            setLoading (true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading (false);
        };
        cargarNovedades();
    },[]);

    return (
        <section className="holder">
            <h2>Novedades</h2>
            {loading ? (
                <p>
                    Cargando...
                </p>
            ):(
                novedades.map(item => <NovedadItem key = {item.id} titulo = {item.titulo} 
                subtitulo = {item.subtitlo} cuerpo = {item.cuerpo} imagen = {item.imagen}/>)
            )}
            
        </section>
    );
}

export default NovedadesPage;