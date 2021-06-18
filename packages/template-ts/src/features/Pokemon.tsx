import React from "react";
import { useGetPokemonByNameQuery } from "./pokemonSlice";

function Pokemon({ name }: { name: string }) {
  const { data = [], error, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <div>
      {error ? (
        <>Error Occured</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <img
            src={data.sprites.front_shiny}
            alt={data.species.name}
            className="Pokemon"
          />
          <div>{data.species.name}</div>
        </>
      ) : null}
    </div>
  );
}

export default Pokemon;
