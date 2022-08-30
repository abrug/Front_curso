import React from "react"; 
import '../../Styles/Componentes/Pages/NovedadesPage.css';
const NovedadItem = (props) => {
    const { titulo, subtitulo, imagen, cuerpo} = props;

    return (
        <div className="novedades">
            <div className="headerNov">
                <div className="contImgNov">
                    <img className="imgNov"src={imagen} alt="Imagen no disponible"></img>
                </div>
                <div className="contTextNov">
                    <h1 className="titleNov">{titulo}</h1>
                    <h2 className="subTitleNov">{subtitulo}</h2>
                    <div className="cuerpoNov"dangerouslySetInnerHTML={{__html: cuerpo}}></div>
                </div>
            </div>
        </div>
    );
}
    
export default NovedadItem;