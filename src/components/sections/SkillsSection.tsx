// SkillsSection component - displays programming skills with Pokemon associations
// Each skill is represented by a Pokemon with animated progress bars

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";
import { 
  getTypeColor, 
  getTypeTextColor, 
  capitalize, 
  getSkillLevelDescription,
  animationVariants 
} from "@/utils/pokemon";

// Individual skill card component
function SkillCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  return (
    <motion.div
      variants={animationVariants.fadeIn}
      custom={index}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-primary/50">
        <CardContent className="p-6">
          {/* Pokemon Image */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Image
                src={skill.pokemon.sprite}
                alt={skill.pokemon.name}
                width={80}
                height={80}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Floating skill level indicator */}
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {skill.level}
              </div>
            </div>
          </div>

          {/* Skill Name */}
          <h3 className="text-xl font-bold text-center mb-2">{skill.name}</h3>

          {/* Pokemon Name */}
          <p className="text-center text-muted-foreground mb-3 capitalize">
            {skill.pokemon.name}
          </p>

          {/* Pokemon Types */}
          <div className="flex gap-1 mb-4 flex-wrap justify-center">
            {skill.pokemon.types.map((type) => (
              <Badge 
                key={type}
                className={`${getTypeColor(type)} ${getTypeTextColor(type)} px-2 py-1 text-xs`}
              >
                {capitalize(type)}
              </Badge>
            ))}
          </div>

          {/* Skill Level Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Level</span>
              <span className="font-medium">{getSkillLevelDescription(skill.level)}</span>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              {skill.level}% Mastery
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants.fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Skills & <span className="text-primary">Pokemon Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each skill is represented by a Pokemon that embodies its characteristics. 
            Together, they form a powerful development team ready for any challenge!
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants.staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Fun Facts about Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants.fadeIn}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Why These Pokemon?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={skills[0].pokemon.sprite}
                      alt="Pikachu"
                      width={40}
                      height={40}
                    />
                    <div>
                      <strong>Pikachu ⚡ React:</strong> Both are energetic, popular, and bring applications to life!
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={skills[1].pokemon.sprite}
                      alt="Mewtwo"
                      width={40}
                      height={40}
                    />
                    <div>
                      <strong>Mewtwo 🧠 TypeScript:</strong> Psychic intelligence meets type safety and code prediction.
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={skills[2].pokemon.sprite}
                      alt="Charizard"
                      width={40}
                      height={40}
                    />
                    <div>
                      <strong>Charizard 🔥 Next.js:</strong> Powerful, fast, and ready to soar to new heights!
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={skills[3].pokemon.sprite}
                      alt="Venusaur"
                      width={40}
                      height={40}
                    />
                    <div>
                      <strong>Venusaur 🌱 Node.js:</strong> Grows robust backend ecosystems and nurtures applications.
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={skills[4].pokemon.sprite}
                      alt="Blastoise"
                      width={40}
                      height={40}
                    />
                    <div>
                      <strong>Blastoise 💧 CSS:</strong> Flows smoothly and shapes the visual landscape beautifully.
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={skills[5].pokemon.sprite}
                      alt="Gengar"
                      width={40}
                      height={40}
                    />
                    <div>
                      <strong>Gengar 👻 Git:</strong> Manages versions like a ghost managing parallel dimensions!
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
