// Footer component - provides footer information with Pokemon theme
// Includes copyright, fun Pokemon facts, and additional links

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMe } from "@/data/portfolio";
import { getRandomPokemonFact } from "@/utils/pokemon";
import { useState, useEffect } from "react";

export default function Footer() {
  const [pokemonFact, setPokemonFact] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setPokemonFact(getRandomPokemonFact());
  }, []);

  const generateNewFact = () => {
    setPokemonFact(getRandomPokemonFact());
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-xl">PokéFolio</span>
            </div>
            <p className="text-muted-foreground">
              A Pokemon-themed portfolio showcasing the journey of a passionate developer. 
              Gotta code 'em all!
            </p>
            <div className="flex space-x-2">
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="Pikachu"
                width={30}
                height={30}
              />
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                alt="Charizard"
                width={30}
                height={30}
              />
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
                alt="Blastoise"
                width={30}
                height={30}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start px-0 h-auto cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start px-0 h-auto cursor-pointer"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start px-0 h-auto cursor-pointer"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start px-0 h-auto cursor-pointer"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start px-0 h-auto cursor-pointer"
                onClick={() => window.location.href = `mailto:${aboutMe.email}`}
              >
                📧 Email
              </Button>
              {aboutMe.github && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start px-0 h-auto cursor-pointer"
                  onClick={() => window.open(aboutMe.github, '_blank')}
                >
                  📱 GitHub
                </Button>
              )}
              {aboutMe.linkedin && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start px-0 h-auto cursor-pointer"
                  onClick={() => window.open(aboutMe.linkedin, '_blank')}
                >
                  💼 LinkedIn
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Pokemon Fact Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="mr-2">🎯</span>
                  Pokemon Dev Fact
                </h3>
                <p className="text-muted-foreground">{pokemonFact}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={generateNewFact}
                className="ml-4 cursor-pointer"
              >
                New Fact ⚡
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {aboutMe.name}. All rights reserved.
            </p>
            <div className="flex space-x-2">
              <span className="text-sm">Made with</span>
              <span className="text-red-500">❤️</span>
              <span className="text-sm">and</span>
              <span className="text-yellow-500">⚡</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Built with Next.js, TypeScript & shadcn/ui</span>
            <div className="flex space-x-1">
              <span>⚛️</span>
              <span>🔷</span>
              <span>🎨</span>
            </div>
          </div>
        </div>

        {/* Easter Egg */}
        <motion.div
          className="text-center mt-8 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>
            "The very best, like no one ever was..." - Building web experiences, one component at a time. 🌟
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
