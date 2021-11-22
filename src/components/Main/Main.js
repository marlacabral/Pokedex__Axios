import "./Main.css";
import Barra from '../Barra/Barra';
import Card from '../Card/Card';
import { useState } from "react";
import axios from 'axios';

const Main = () => {

  const [dadosPokemon, setDadosPokemon] = useState({});
  const [desenhaCard, setDesenhaCard] = useState(false);

  const pegarDados = (event) => {
    event.preventDefault();
    const nome = event.target[0].value;
    
    const url = "https://pokeapi.co/api/v2/pokemon/" + nome.toLowerCase();

    axios.get(url)
    .then((response) => {
      setDadosPokemon(response.data)

      setDesenhaCard(true);
    })
  }
  return (
    <div className="background">
      <Barra onSubmit={pegarDados} />
      
      <div className="pokemonArea">
        {
          desenhaCard && <Card nome={dadosPokemon.name} imagem={dadosPokemon.sprites.front_default} />
        }
        
      </div>
    </div>
  );
};

export default Main;
