import React, { useEffect, useState } from "react";
import "./index.css";
import PokemonCard from "./components/PokemonCard";
import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";

const App = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState("")

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        const detailedData = await Promise.all(
          data.results.map(async (currPokemon) => {
            const res = await fetch(currPokemon.url);
            return await res.json();
          })
        );
        console.log(detailedData)
        setPokemon(detailedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonData();
  }, []);

  const searchData = pokemon.filter((currPokemon)=>currPokemon.name.toLowerCase().includes(formData.toLowerCase()))

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-5xl font-bold text-center animate-pulse text-blue-600">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-5xl font-bold text-center text-red-500">
          {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-gray-50">
      <Heading />
      <SearchBar formData={formData} setFormData={setFormData}/>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 w-full max-w-6xl">
        {searchData.map((currPokemon) => (
          <PokemonCard key={currPokemon.id} currPokemon={currPokemon} />
        ))}
      </ul>
    </div>
  );
};

export default App;
