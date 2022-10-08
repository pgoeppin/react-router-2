import Cards from "../components/Cards";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";



export default function PokemonStats() {


    return (
      <div className="mt-5 d-flex flex-column align-items-center">
        <Cards />
        <Link to="/pokemons">
            <Button variant="success" className="mt-3">Choose another Pokemon</Button>
        </Link>

      </div>
    );
  }
