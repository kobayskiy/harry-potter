import { useState, useMemo } from 'react';
import type { Character } from './types/character';
import { CharacterCard } from './components/CharacterCard';
import hermioneImg from './assets/hermiona.jpg';
import dracoImg from './assets/draco.jpg';
import './App.css';

const INITIAL_CHARACTERS: Character[] = [
  {
    id: '1',
    name: 'Hermione Granger',
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wandCore: 'dragon heartstring',
    alive: 'yes',
    imageUrl: hermioneImg,
  },
  {
    id: '2',
    name: 'Draco Malfoy',
    actor: 'Tom Felton',
    gender: 'male',
    house: 'Slytherin',
    wandCore: 'unicorn tail-hair',
    alive: 'yes',
    imageUrl: dracoImg,
  },
  {
    id: '3',
    name: 'Hermione Granger',
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wandCore: 'dragon heartstring',
    alive: 'yes',
    imageUrl: hermioneImg,
  },
];

export default function App() {
  const [searchName, setSearchName] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('');

  const filteredCharacters = useMemo(() => {
    return INITIAL_CHARACTERS.filter((char) => {
      const matchesName = char.name.toLowerCase().includes(searchName.toLowerCase());
      const matchesHouse = selectedHouse === '' || char.house === selectedHouse;
      return matchesName && matchesHouse;
    });
  }, [searchName, selectedHouse]);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Harry Potter</h1>
        <p className="subtitle">View all characters from the Harry Potter universe</p>
      </header>

      <div className="filters-container">
        <div className="filter-group filter-name">
          <label htmlFor="name-search" className="filter-label">Name</label>
          <input
            id="name-search"
            type="text"
            placeholder="Hermione"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="input"
          />
        </div>

        <div className="filter-group filter-school">
          <label htmlFor="school-select" className="filter-label">School</label>
          <select
            id="school-select"
            value={selectedHouse}
            onChange={(e) => setSelectedHouse(e.target.value)}
            className="select"
          >
            <option value="">Choose one</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </div>
      </div>

      <hr className="separator" />

      <main className="grid">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </main>
    </div>
  );
}