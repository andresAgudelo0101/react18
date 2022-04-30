import {useState} from "react"

function MainPage(props) {
 
    return (
        <div className="containerChild">
            <img src="nada" className="imagen"/>
            <h1>Nombre</h1>
            <button>Ramdon Pokemon</button>
            <button onClick={props.cambiarTema}>cambiar fondo</button>
        </div>
    )
}

export default MainPage;
