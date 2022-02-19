import React, { useState } from 'react';
import './style.css';

import axios from 'axios';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [pokemon, setPokemon] = useState({});

  const fetchPokemonStats = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${searchValue}`
    );
    setPokemon(response.data);
  };

  const PokemonStats = ({ pokemon }) => {
    return (
      <>
        {Object.keys(pokemon).length === 0 ? (
          <div>No pokemon yet. Search for one</div>
        ) : (
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={pokemon.sprites?.front_default}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{pokemon.name}</h5>
              <p className="card-text">
                <strong>Type:</strong> {pokemon.types[0].type.name}
                <br />
                <strong>Specie:</strong> {pokemon.species.name}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Hp</strong>: {pokemon.stats[0].base_stat}{' '}
              </li>
              <li className="list-group-item">
                <strong>Attack</strong>: {pokemon.stats[1].base_stat}{' '}
              </li>
              <li className="list-group-item">
                <strong>Defense</strong>: {pokemon.stats[2].base_stat}{' '}
              </li>
              <li className="list-group-item">
                <strong>Special Attack</strong>: {pokemon.stats[3].base_stat}{' '}
              </li>
              <li className="list-group-item">
                <strong>Special Defense</strong>: {pokemon.stats[4].base_stat}{' '}
              </li>
              <li className="list-group-item">
                <strong>Speed</strong>: {pokemon.stats[5].base_stat}{' '}
              </li>
            </ul>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <div className="app">
        <div className="titleSection">
          <h1>Pokemon stats</h1>
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <button onClick={fetchPokemonStats} className="btn btn-secondary">
            Obtener stats
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <PokemonStats pokemon={pokemon} />
      </div>
    </div>
  );
}
