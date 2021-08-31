import './App.css';
import Buscador from './componentes/Buscador';
import { Component } from 'react';
import Pokemon from './componentes/Pokemon';
import BotonFlotante from './componentes/BotonFlotante';
import Popup from "reactjs-popup";
import IconoMenuH from "./menuH/IconomenuH";
import MenuH from "./menuH/menuH";

const contentStyle = {
	background: "rgba(255,255,255,0",
	width: "30%",
	border: "none"
  };

class App extends Component {

	state = {
		termino: "",
		poke : [],
		pokeInfo : "",
		info : [],
		inputValue : ""
		
	}

	consumirApi = () =>{
		const pokemon = this.state.termino;
		var urlInfo = "";
	
		const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
		
		//console.log(url);

		fetch(url)
		.then(respuesta =>respuesta.json())
		.then(resultado => this.setState({poke : resultado}, function () {
			fetch(this.state.poke.species.url)
			.then(respuesta =>respuesta.json())
			.then(resultado => this.setState({info : resultado}))
		}))
	


	}





	datosBusqueda = (termino) =>{
		this.setState({
			termino
		}, ()=>{
			this.consumirApi();
		})
	}

	render() {

	return (
		<div className="container">
			<div class="wrapper">
		      <img src='./descargar.png' className="logo" alt="logo" />
				<div className="nav">
					<Buscador
					  datosBusqueda={this.datosBusqueda}
					/>
					<BotonFlotante
						datosBusqueda={this.datosBusqueda}
						termino = {this.state.termino}
					/>
				</div>
			</div>
			<Pokemon
			poke={this.state.poke}
			info={this.state.info}
			/>
			 <Popup
				modal
				overlayStyle={{ background: "rgba(255,255,255,0.98", width: "30%"}}
				contentStyle={contentStyle}
				closeOnDocumentClick={false}
			
				trigger={open => <IconoMenuH open={open} />}
				>
				{close => <MenuH close={close} />}
			</Popup>


		</div>
		
	);
	}
}

export default App;
