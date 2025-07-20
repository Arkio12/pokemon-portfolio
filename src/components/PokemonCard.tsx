// PokemonCard component - displays Pokemon information in a card format
// This component is reusable throughout the portfolio

"use client"; // This makes it a client component so we can use hooks and animations

import { motion } from "framer-motion"; // For smooth animations
import Image from "next/image"; // Optimized image component from Next.js
import { Pokemon } from "@/types/pokemon"; // Our Pokemon type
import { Card, CardContent } from "@/components/ui/card"; // shadcn/ui components
import { Badge } from "@/components/ui/badge"; // For displaying Pokemon types
import { 
  getTypeColor, 
  getTypeTextColor, 
  capitalize, 
  formatPokemonId,
  animationVariants 
} from "@/utils/pokemon"; // Our utility functions

// Define the props this component expects
interface PokemonCardProps {
  pokemon: Pokemon;        // The Pokemon data to display
  size?: "sm" | "md" | "lg"; // Optional size variant
  showDescription?: boolean; // Whether to show the description
  onClick?: () => void;     // Optional click handler
}

// The main PokemonCard component
export default function PokemonCard({ 
  pokemon, 
  size = "md", 
  showDescription = true,
  onClick 
}: PokemonCardProps) {
  // Define different sizes for the card
  const sizeClasses = {
    sm: "w-48 h-64",
    md: "w-64 h-80", 
    lg: "w-80 h-96"
  };

  // Define different image sizes
  const imageSizes = {
    sm: 80,
    md: 120,
    lg: 150
  };

  return (
    <motion.div
      // Framer Motion props for animations
      variants={animationVariants.fadeIn}
      whileHover={animationVariants.cardHover}
      className={`${sizeClasses[size]} cursor-pointer`}
      onClick={onClick}
    >
      {/* shadcn/ui Card component provides the base styling */}
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/50">
        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
          {/* Pokemon ID */}
          <div className="text-sm text-muted-foreground mb-2 font-mono">
            {formatPokemonId(pokemon.id)}
          </div>

          {/* Pokemon Image */}
          <div className="relative mb-4">
            <Image
              src={pokemon.sprite}
              alt={pokemon.name}
              width={imageSizes[size]}
              height={imageSizes[size]}
              className="hover:scale-110 transition-transform duration-300"
              priority // Load this image with high priority
            />
          </div>

          {/* Pokemon Name */}
          <h3 className="text-xl font-bold text-center mb-3 capitalize">
            {pokemon.name}
          </h3>

          {/* Pokemon Types */}
          <div className="flex gap-2 mb-4 flex-wrap justify-center">
            {pokemon.types.map((type) => (
              <Badge 
                key={type}
                className={`${getTypeColor(type)} ${getTypeTextColor(type)} px-3 py-1 text-xs font-medium`}
              >
                {capitalize(type)}
              </Badge>
            ))}
          </div>

          {/* Pokemon Description (if showDescription is true) */}
          {showDescription && (
            <p className="text-sm text-muted-foreground text-center line-clamp-3">
              {pokemon.description}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
