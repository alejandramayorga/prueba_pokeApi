import React, { Component } from 'react';

import ImgPokemon from './ImgPokemon';


class Pokemon extends Component{
    
   habilidad = ()=>{

   
    const poke = this.props.poke;
    const info = this.props.info;
    const num = this.props.poke.id;
    if(poke.length === 0) return null;
    if(info.length === 0) return null;


    var texto =  info.flavor_text_entries.reduce(function(topic, current) {
     
        return current.language.name === "es"?current:topic;
    }, undefined);



    return(
        <React.Fragment>
               
              
                 {       
                  
                    
                    <ImgPokemon
                        imagen = {poke.sprites.other.dream_world.front_default} 
                        name ={poke.name} 
                        descripcion = {texto.flavor_text}
                        key = {poke.id}
                        num= {poke.id}
                        peso = {poke.weight}
                        altura = {poke.height}
                    />
                }
        </React.Fragment>
    )
   }

    render(){
        return( 
            <React.Fragment>
               {this.habilidad()}
            </React.Fragment>
        );
    }
}

export default Pokemon;