import React, { Component } from 'react';
import './Buscador.css';



class Buscador extends Component{

    //se leen los valores de busqueda
    busquedaRef = React.createRef();

    Datos = (e)=>{
        e.preventDefault();
       //toma el valor del input y lo envia al componente principal 
        const termino = this.busquedaRef.current.value;
 
        this.props.datosBusqueda(termino);
    }

 

    render(){
        return(
            <form onSubmit={this.Datos}>
            <input ref={this.busquedaRef} type="search" placeholder="Busca tu pokémon..." id="Buscador"/>
            
            </form>
        );
    }

}

export default Buscador;

