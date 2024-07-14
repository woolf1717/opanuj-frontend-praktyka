import React, { useEffect, useState } from 'react';

import { Character } from '../api/api-client-generated/models/Character';

const RickAndMorty = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const filterCharacters = () => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = characters.filter((character) =>
        character.name?.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredCharacters(filtered);
    };

    filterCharacters();
  }, [searchTerm, characters]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Rick and Morty</h1>
      <input
        type="text"
        placeholder="Search for a character"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="text-center">
            <img
              src={character.image}
              alt={character.name}
              className="mx-auto mb-2"
            />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
