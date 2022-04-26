import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacter() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      let json = await res.json();
      json = await json.results;
      setCharacters(json.splice(0, 20));
    }
    fetchCharacter();
  }, []);

  const handleDelete = (id) => {
    return function (e) {
      setCharacters(characters.filter((characters) => characters.id !== id));
      console.log(characters);
    };
  };
  return (
    <div className="row">
      {characters.map((character) => (
        <div
          className="card m-auto my-5 col-sm-6"
          style={{ width: "18rem" }}
          key={character.id}
        >
          <img src={character.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">{character.species}</p>
            <p className="card-text">{character.location.name}</p>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                onClick={handleDelete(character.id)}
              >
                Eliminar
              </button>
              <Link to={`characters/${character.id}`} className="btn btn-info">
                Detalles
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
