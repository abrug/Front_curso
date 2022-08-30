import '../Styles/Componentes/Pages/NosotrosPage.css'
const NosotrosPage = (props) => {
    return (
        <main className='bgNosotros'>
            <div className="Historia">
                <div className='contHistoria'>
                    <img src={require("../img/nosotros/nosotros1.jpg")} alt="nosotros1"/>
                    <h1>German Bitácora</h1>
                    <h3>CEO-Travel Nix</h3>
                </div>
                <div>
                    <p>Mi nombre como pueden observar es German, junto a unos amigos decidimos formar Travel Nix con la idea de
                        que cualquier persona pudiese viajar y disfrutar de un lindo lugar. Junto con nosotros podran encontrar
                        hermosos paisajes, ya sea de dia o de noche. Nos enfocamos en priorizar un sentir unico al contacto con la naturaleza,
                        sin necesidad de hoteles de lujos ni nada material. Podes venir con la persona (o personas) que decidas que te acompañe
                        en esta linda aventura.
                    </p>
                </div>  
            </div>
            <h2 className='TitleStaff'>Staff</h2>
            <div className="Staff">
                <div>
                    <div className="Personas">
                    <img src={require("../img/nosotros/nosotros4.jpg")} alt="nosotros2"/>
                        <div className="Persona">
                            <h5>Michelle Videla</h5>
                            <h6>Gerente General</h6>
                            <p>Nos acompaña hace 15 años en el rubro.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Personas">
                    <img src={require("../img/nosotros/nosotros2.jpg")} alt="nosotros2"/>
                        <div className="Persona">
                            <h5>Anita Lawerfanita </h5>
                            <h6>Gerente de viajes</h6>
                            <p>Nos acompaña hace 10 años en el rubro.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Personas">
                    <img src={require("../img/nosotros/nosotros5.jpg")} alt="nosotros2"/>
                        <div className="Persona">
                            <h5>Alex Tintor</h5>
                            <h6>Gerente de incendios</h6>
                            <p>Nos acompaña hace 8 años en el rubro.</p>
                        </div>
                    </div>
                </div>
            </div>  
        </main>
    );
}

export default NosotrosPage;