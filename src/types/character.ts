export interface Character {
  id: string;
  name: string;
  actor: string;
  gender: 'female' | 'male';
  house: 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw';
  wandCore: string;
  alive: 'yes' | 'no';
  imageUrl: string;
}
