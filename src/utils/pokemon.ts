// Utility functions for Pokemon-related functionality
// These help us maintain consistent styling and behavior across the app

/**
 * Returns the appropriate color class for a Pokemon type
 * This creates a consistent color scheme throughout the portfolio
 */
export function getTypeColor(type: string): string {
  const typeColors: { [key: string]: string } = {
    // Primary type colors based on official Pokemon type colors
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-blue-300",
    fighting: "bg-red-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-600",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-green-400",
    rock: "bg-yellow-800",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-700",
    dark: "bg-gray-800",
    steel: "bg-gray-600",
    fairy: "bg-pink-300"
  };
  
  return typeColors[type.toLowerCase()] || "bg-gray-400";
}

/**
 * Returns the appropriate text color for a Pokemon type
 * Ensures good contrast with background colors
 */
export function getTypeTextColor(type: string): string {
  const lightBackgrounds = ['electric', 'ice', 'fairy'];
  return lightBackgrounds.includes(type.toLowerCase()) 
    ? "text-gray-900" 
    : "text-white";
}

/**
 * Capitalizes the first letter of a string
 * Used for displaying Pokemon names and types properly
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Returns animation variants for Framer Motion
 * Used to create smooth animations throughout the portfolio
 */
export const animationVariants = {
  // Card hover animation
  cardHover: {
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  },
  
  // Fade in animation
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  },
  
  // Slide in from left
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  },
  
  // Slide in from right
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  },
  
  // Stagger children animation
  staggerChildren: {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

/**
 * Generates a random Pokemon fact or quote
 * Adds some fun interactivity to the portfolio
 */
export function getRandomPokemonFact(): string {
  const facts = [
    "Did you know? There are over 900 different Pokemon species!",
    "Pikachu was originally going to be called Pika-pika!",
    "The Pokemon world has its own programming language called Pokescript!",
    "Ghost-type Pokemon are perfect for debugging - they can phase through code!",
    "Electric-type Pokemon are great at managing power consumption in apps!",
    "Water-type Pokemon excel at data flow management!",
    "Fire-type Pokemon are known for their hot reloading capabilities!"
  ];
  
  return facts[Math.floor(Math.random() * facts.length)];
}

/**
 * Returns a skill level description based on numeric value
 * Makes skill levels more human-readable
 */
export function getSkillLevelDescription(level: number): string {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Intermediate";
  if (level >= 60) return "Beginner";
  return "Learning";
}

/**
 * Formats a Pokemon ID to always be 3 digits
 * Example: 1 becomes #001, 25 becomes #025
 */
export function formatPokemonId(id: number): string {
  return `#${id.toString().padStart(3, '0')}`;
}
