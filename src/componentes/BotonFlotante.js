import React, { Component } from 'react';
import './Buscador.css';

class BotonFlotante extends Component{

    render(){
        return(
            
            <div>
                 <div className="App">
                     <button style={{ position: "fixed", top: "30%", right: "10%" }} >
                        LIKE
                     </button>
             
                </div>
            </div>
          
        );
    }

}

export default BotonFlotante;