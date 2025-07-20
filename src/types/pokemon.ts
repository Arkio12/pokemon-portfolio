// This file defines the TypeScript types we'll use throughout our Pokemon portfolio
// Types help us catch errors early and provide better developer experience

export interface Pokemon {
  id: number;           // Unique identifier for each Pokemon
  name: string;         // Pokemon's name
  types: string[];      // Array of types (e.g., ["fire", "flying"])
  sprite: string;       // URL to Pokemon image
  description: string;  // Short description of the Pokemon
}

export interface Project {
  id: number;           // Unique identifier for each project
  title: string;        // Project title
  description: string;  // Project description
  technologies: string[]; // Array of technologies used
  github?: string;      // Optional GitHub link
  demo?: string;        // Optional demo link
  image?: string;       // Optional project image
  pokemon: Pokemon;     // Associated Pokemon theme
}

export interface Skill {
  name: string;         // Skill name (e.g., "React", "TypeScript")
  level: number;        // Skill level (1-100)
  pokemon: Pokemon;     // Associated Pokemon for this skill
}

export interface AboutMe {
  name: string;         // Your name
  title: string;        // Your job title/description
  description: string;  // About you description
  email: string;        // Your email
  github?: string;      // Your GitHub profile
  linkedin?: string;    // Your LinkedIn profile
  favoriteType: string; // Your favorite Pokemon type
}
