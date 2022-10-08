import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import axios from "axios";

function Selector() {
  const [pokeName, setPokeName] = React.useState("");
  const navigate = useNavigate();
  const goToPokemons = () => {
    navigate(`/pokemons/${pokeName}`);
  };
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    const pokeData = async () => {
      try {
        const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=151";
        const response = await axios.get(endpoint);
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    pokeData();
  }, []);
  return (
    <Container className="d-flex flex-column align-items-center">
      <Form.Select
        defaultValue=""
        onChange={(e) => setPokeName(e.target.value)}
      >
        <option disabled value="">
          Choose a pokemon!
        </option>
        {pokemons.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </option>
        ))}
      </Form.Select>
      <Button variant="danger" className="m-2" onClick={goToPokemons}>See Details</Button>
    </Container>
  );
}
export default Selector;
