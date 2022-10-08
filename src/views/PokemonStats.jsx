import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function PokemonStats() {
    const { pokeName } = useParams();
  const [pokemon, setPokemon] = React.useState([]);
  React.useEffect(() => {
    
    const PokeDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        setPokemon(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    PokeDetails();
  }, [pokeName]);
  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      {
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          />
          <Card.Body>
            <Card.Title className="text-center">
              {pokemon.name? pokemon.name.charAt(0).toUpperCase()
               + pokemon.name.slice(1) : undefined}
            </Card.Title>
            <Card.Subtitle className="my-2 text-center">
                Type : 
            {pokemon.types
              ? pokemon.types.map((element, i) => (
                  <span key={i}>
                    {" " + element.type.name.charAt(0).toUpperCase() +
                      element.type.name.slice(1) + " "}
                  </span>
                ))
              : undefined}
            </Card.Subtitle>
            {pokemon.stats
              ? pokemon.stats.map((element, i) => (
                  <Card.Text key={i} className="m-0">
                    {element.stat.name} : {element.base_stat}
                  </Card.Text>
                ))
              : undefined}
          </Card.Body>
        </Card>
        
      }
              <Link to="/pokemons">
            <Button variant="success" className="mt-3">Choose another Pokemon</Button>
        </Link>
    </div>
  );
}
