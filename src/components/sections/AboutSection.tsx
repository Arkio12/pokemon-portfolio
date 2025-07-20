// AboutSection component - displays personal information with Pokemon theme
// This is the hero section of the portfolio

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutMe } from "@/data/portfolio";
import { getTypeColor, getTypeTextColor, capitalize, animationVariants } from "@/utils/pokemon";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants.staggerChildren}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Personal Information */}
          <motion.div
            variants={animationVariants.slideInLeft}
            className="space-y-6"
          >
            {/* Name and Title */}
            <div className="space-y-2">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                variants={animationVariants.fadeIn}
              >
                {aboutMe.name}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground"
                variants={animationVariants.fadeIn}
              >
                {aboutMe.title}
              </motion.p>
            </div>

            {/* Favorite Pokemon Type Badge */}
            <motion.div
              variants={animationVariants.fadeIn}
              className="flex items-center space-x-2"
            >
              <span className="text-sm text-muted-foreground">Favorite Type:</span>
              <Badge 
                className={`${getTypeColor(aboutMe.favoriteType)} ${getTypeTextColor(aboutMe.favoriteType)} px-3 py-1`}
              >
                {capitalize(aboutMe.favoriteType)}
              </Badge>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg leading-relaxed text-muted-foreground"
              variants={animationVariants.fadeIn}
            >
              {aboutMe.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={animationVariants.fadeIn}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 cursor-pointer"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch 📧
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="cursor-pointer"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects 🚀
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={animationVariants.fadeIn}
              className="flex space-x-4"
            >
              {aboutMe.github && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open(aboutMe.github, '_blank')}
                  className="flex items-center space-x-2"
                >
                  <span>📱</span>
                  <span>GitHub</span>
                </Button>
              )}
              {aboutMe.linkedin && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open(aboutMe.linkedin, '_blank')}
                  className="flex items-center space-x-2"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = `mailto:${aboutMe.email}`}
                className="flex items-center space-x-2"
              >
                <span>📧</span>
                <span>Email</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Pokemon Avatar and Stats */}
          <motion.div
            variants={animationVariants.slideInRight}
            className="flex flex-col items-center space-y-6"
          >
            {/* Pokemon Avatar */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-4 border-primary/30">
                <Image
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                  alt="Avatar Pokemon"
                  width={200}
                  height={200}
                  className="drop-shadow-lg"
                />
              </div>
              
              {/* Floating elements around the avatar */}
              <motion.div
                className="absolute -top-4 -right-4 text-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 text-2xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                💻
              </motion.div>
            </motion.div>

            {/* Fun Stats Card */}
            <Card className="w-full max-w-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-center">Trainer Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">Skills</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground">Curiosity</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">⚡</div>
                    <div className="text-sm text-muted-foreground">Energy</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
