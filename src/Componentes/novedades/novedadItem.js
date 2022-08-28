import React from "react"; 

const NovedadItem = (props) => {
    const { titulo, subtitulo, imagen, cuerpo} = props;

    return (
        <div className="novedades">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <img src={imagen}></img>
            <div dangerouslySetInnerHTML={{__html: cuerpo}}></div>
            <hr></hr>
        </div>
    );
}
    
export default NovedadItem;