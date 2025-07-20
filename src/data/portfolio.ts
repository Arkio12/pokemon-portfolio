// This file contains all the sample data for our Pokemon portfolio
// In a real application, this might come from a database or API

import { Pokemon, Project, Skill, AboutMe } from '@/types/pokemon';

// Sample Pokemon data - using Gen 1 favorites
export const samplePokemon: Pokemon[] = [
  {
    id: 25,
    name: "Pikachu",
    types: ["electric"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    description: "The iconic Electric Mouse Pokemon, known for its cheerful personality and powerful electric attacks."
  },
  {
    id: 6,
    name: "Charizard",
    types: ["fire", "flying"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    description: "A powerful Fire/Flying type Pokemon that resembles a dragon and breathes intense flames."
  },
  {
    id: 9,
    name: "Blastoise",
    types: ["water"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    description: "A Water-type Pokemon with water cannons on its shell, known for its defensive capabilities."
  },
  {
    id: 3,
    name: "Venusaur",
    types: ["grass", "poison"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    description: "A Grass/Poison type Pokemon with a large flower on its back that releases a soothing scent."
  },
  {
    id: 94,
    name: "Gengar",
    types: ["ghost", "poison"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    description: "A mischievous Ghost/Poison type Pokemon that hides in shadows and loves to play pranks."
  },
  {
    id: 150,
    name: "Mewtwo",
    types: ["psychic"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    description: "A legendary Psychic-type Pokemon created through genetic manipulation, possessing incredible psychic powers."
  }
];

// About me data - customize this with your information
export const aboutMe: AboutMe = {
  name: "Andrew Glico",
  title: "Full Stack Developer & Pokemon Trainer",
  description: "I'm a passionate developer who loves creating digital experiences as much as I love catching Pokemon! With expertise in modern web technologies, I build applications that are both functional and fun. When I'm not coding, you can find me exploring new Pokemon regions or planning my next team strategy.",
  email: "andrewglico790@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  favoriteType: "electric"
};

// Sample skills data - each skill is associated with a Pokemon
export const skills: Skill[] = [
  {
    name: "React",
    level: 90,
    pokemon: samplePokemon[0] // Pikachu - electric like React's energy
  },
  {
    name: "TypeScript",
    level: 85,
    pokemon: samplePokemon[5] // Mewtwo - psychic like TypeScript's intelligence
  },
  {
    name: "Next.js",
    level: 80,
    pokemon: samplePokemon[1] // Charizard - fire/flying like Next.js's power
  },
  {
    name: "Node.js",
    level: 75,
    pokemon: samplePokemon[3] // Venusaur - grass/poison like Node.js's growth
  },
  {
    name: "CSS/Tailwind",
    level: 88,
    pokemon: samplePokemon[2] // Blastoise - water like CSS's flow
  },
  {
    name: "Git",
    level: 82,
    pokemon: samplePokemon[4] // Gengar - ghost like Git's version control
  }
];

// Sample projects data
export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and inventory management.",
    technologies: ["Next.js", "TypeScript", "React", "PostgreSQL", "Tailwind CSS", "Git"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://pokemon-ecommerce-six.vercel.app/",
    pokemon: samplePokemon[0] // Pikachu
  },
  
];
