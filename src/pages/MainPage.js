import {useState} from "react"

function MainPage(props) {
 
    return (
        <div className="containerChild">
            <h1>Bienvenido</h1>
            <button onClick={props.cambiarTema}>cambiar fondo</button>
        </div>
    )
}

export default MainPage;
