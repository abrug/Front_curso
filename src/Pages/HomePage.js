import React from 'react';
import '../Styles/Componentes/Pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="contHome">
            <div className="contHomePage">
                <div className="contTitleHome">
                    <h2 className='titleHome'>Bienvenidos</h2>
                    <p className='textHome'> Gracias por elegirnos y confiar en nosotros. 
                    En Travel Nix encontraras los paisajes mas hermosos y relajantes,
                    lejos de lo material y comun. Solo vos, la naturaleza y una experiencia unica. 
                    Como nosotros decimos ¡¡¡UN CAMINO SOLO DE IDA!!! \(*O*)/</p>
                </div>
                <div className="contTestimonios">
                    <h2 className='titleTesti'>Testimonios</h2>
                    <div className='carTestiBg'>
                        <div className='cardTesti'>
                            <div className='contImgHome'>
                                <img src={require("../img/nosotros/Lego1.jpg")} className="imgTestHome" alt="Juan"/>
                            </div>
                            <div className="testimonio">
                                <span className='cita'>Simplemente excelente</span>
                                <span className="autor"> Abel Perez - Lego.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='carTestiBg2'>
                        <div className='cardTesti'>
                            <div className='contImgHome'>
                                <img src={require("../img/nosotros/Lego1.jpg")} className="imgTestHome" alt="Juan"/>
                            </div>
                            <div className="testimonio">
                                <span className='cita'>Simplemente asombroso</span>
                                <span className="autor"> Kain Perez - Lego.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </main>
    )
}

export default HomePage;