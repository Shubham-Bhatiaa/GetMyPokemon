import React, { useState } from "react";

const PokemonCard = ({ currPokemon }) => {
  const [isClicked, setIsClicked] = useState(false);

  const typeColors = {
    electric: "bg-yellow-500",
    grass: "bg-green-500",
    water: "bg-blue-500",
    ice: "bg-blue-300",
    dark: "bg-gray-800",
    normal: "bg-gray-400",
    rock: "bg-gray-600",
    poison: "bg-purple-500",
    fairy: "bg-pink-400",
    fire: "bg-red-400",
    ground: "bg-yellow-700",
    fighting: "bg-cyan-500",
    psychic: "bg-yellow-600",
    ghost: "bg-indigo-900",
    bug: "bg-orange-400",
    dragon: "bg-red-500"
  };

  if (!currPokemon) return null;

  const {
    name,
    sprites,
    types,
    height,
    weight,
    stats,
    base_experience,
    abilities,
  } = currPokemon;

  return (
    <div
      className={`bg-white rounded-xl shadow-md px-2 py-3 transition-transform duration-300 cursor-pointer 
        ${
          isClicked ? "scale-115 shadow-2xl" : "hover:scale-105 hover:shadow-lg"
        }`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <h2 className="text-2xl font-bold text-center text-blue-600 capitalize">
        {name}
      </h2>
      <img
        src={
          sprites?.other?.dream_world?.front_default || sprites?.front_default
        }
        alt={name}
        className="w-50 h-50 bg-amber-50 my-4 rounded-2xl p-3 mx-auto transition-transform duration-300 hover:scale-110"
      />
      <div className="flex justify-center my-3">
        <span
          className={`${typeColors[types?.[0]?.type?.name]} px-4 py-2 text-white rounded-full text-lg font-semibold capitalize`}
        >
          {types?.[0]?.type?.name || "Unknown"}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 text-sm font-semibold text-center">
        <div>
          <p className="text-gray-500">Height</p>
          <p className="text-blue-500">{height}</p>
        </div>
        <div>
          <p className="text-gray-500">Weight</p>
          <p className="text-blue-500">{weight}</p>
        </div>
        <div>
          <p className="text-gray-500">Speed</p>
          <p className="text-blue-500">{stats?.[5]?.base_stat || "N/A"}</p>
        </div>
        <div>
          <p className="text-gray-500">Attack</p>
          <p className="text-blue-500">{stats?.[1]?.base_stat || "N/A"}</p>
        </div>
        <div>
          <p className="text-gray-500">Experience</p>
          <p className="text-blue-500">{base_experience || "N/A"}</p>
        </div>
        <div>
          <p className="text-gray-500">Ability</p>
          <p className="text-blue-500">
            {abilities?.[1]?.ability?.name ||
              abilities?.[0]?.ability?.name ||
              "Unknown"}
          </p>
        </div>
      </div>
      <p className="text-center text-fuchsia-600 font-bold mt-4">
        Click the card for effect!
      </p>
    </div>
  );
};

export default PokemonCard;
