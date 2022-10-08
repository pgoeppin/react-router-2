import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import PokemonStats from "./views/PokemonStats";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
                <Home />
            }
          />
          <Route
            path="/pokemons"
            element={
              <Pokemons />
            }
            />
          <Route
            path="/pokemons/:pokeName"
            element={
                <PokemonStats />
            }
          />
          <Route
            path="*"
            element={<h1 className="mt-5 text-center">404 Not Found. Please go back</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
