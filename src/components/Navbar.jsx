import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import pokeball from "../assets/Pokeball.png"

export default function Header() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "unactive");
  return (
    <>
      <Navbar bg="danger" variant="dark" className="">
          <Navbar.Brand><img alt="" src={pokeball} /></Navbar.Brand>
          <Container className="d-flex justify-content-end">
            <NavLink className={setActiveClass} to="/" end>
              Home
            </NavLink>
            <NavLink className={setActiveClass} to="/pokemons" end>
              Pokemons
            </NavLink>
          </Container>
      </Navbar>
    </>
  );
}
