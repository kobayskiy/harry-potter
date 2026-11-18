import React from 'react';
import type { Character } from '../types/character';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img 
          src={character.imageUrl} 
          alt={character.name} 
          className="card-image" 
        />
      </div>
      <div className="card-content">
        <h3 className="card-name">{character.name}</h3>
        <p className="card-text">
          <span className="card-label">Actor:</span> {character.actor}
        </p>
        <p className="card-text">
          <span className="card-label">Gender:</span> {character.gender}
        </p>
        <p className="card-text">
          <span className="card-label">House:</span> {character.house}
        </p>
        <p className="card-text">
          <span className="card-label">Wand core:</span> {character.wandCore}
        </p>
        <p className="card-text">
          <span className="card-label">Alive:</span> {character.alive}
        </p>
      </div>
    </div>
  );
};