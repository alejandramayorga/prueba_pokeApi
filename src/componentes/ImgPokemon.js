import React from 'react';
import './ImgPokemon.css';


const ImgPokemon = (props) => {

    
    return(
        <body>
        <div class="pokemon-card_container">
            <div class="pokemon-card">
            <div class="box">
                <img src={props.imagen} alt="pokemon" />
            </div>
            <div class="pokemon-card__nombre "> {props.name}</div>
            <div class="pokemon-card__descricion">
                {props.descripcion}
            </div>

            <div class="stats">
                <div>
                <div>{props.num}</div>
                <div><b>Numero</b></div>
                </div>
                <div >
                <div>{props.altura}</div>
                <div><b>Altura</b></div>
                </div>
                <div >
                <div>{props.peso}</div>
                <div><b>Peso</b></div>
                </div>

            </div>

            </div> 
        </div>
        </body>
  

    )

}

export default ImgPokemon;