import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Character() {
  let { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${characterId}`
      );
      let json = await res.json();
      setCharacter(json);
    }
    fetchCharacter();
  }, [characterId]);

  return (
    <div className="container">
      {character ? (
        <>
          <img src={character.image} alt="" />
          <h5>{character.name}</h5>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.type}</p>
          <p>{character.gender}</p>
          <p>{character.origin.name}</p>
          <p>{character.location.name}</p>
        </>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      )}
    </div>
  );
}
