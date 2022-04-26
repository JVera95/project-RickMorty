import { Link } from "react-router-dom";
import Switch from "../Switch/Switch";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <Link to="/">
          <img
            src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-face-kushmastafresh-deviantart-19.png"
            width="80px"
            alt=""
          />
        </Link>
        <h1>Rick and Morty Characters</h1>
        <Switch />
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
          />
          <button className="btn btn-info" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}
