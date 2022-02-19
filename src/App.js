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
        {!pokemon ? (
          <div>No pokemon yet. Search for one</div>
        ) : (
          <div class="card" style="width: 18rem;">
            <img
              src={pokemon.sprites.front_default}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
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
      <div className="container">
        <PokemonStats pokemon={pokemon} />
      </div>
    </div>
  );
}
