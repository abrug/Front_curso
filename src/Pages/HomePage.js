import '../Styles/Componentes/Pages/HomePage.css'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                {/* <img src="public/Images/home/img01.jpg" alt="Avion"/> */}
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>MementoMori</p>
                    <p>MementoMori</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente excelente</span>
                        <span class="autor"> Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default HomePage;