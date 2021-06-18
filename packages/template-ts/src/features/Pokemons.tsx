import React, { useState } from "react";
import Pokemon from "./Pokemon";

const pokemons: Array<string> = ["pikachu", "ditto", "bulbasaur", "mewtwo"];

function Pokemons() {
  return (
    <div className="Pokemons">
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} name={pokemon} />
      ))}
    </div>
  );
}

export default Pokemons;
