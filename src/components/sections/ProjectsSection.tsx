// ProjectsSection component - displays portfolio projects with Pokemon associations
// Each project is represented by a Pokemon and shows technologies used

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { 
  getTypeColor, 
  getTypeTextColor, 
  capitalize, 
  formatPokemonId,
  animationVariants 
} from "@/utils/pokemon";

// Individual project card component
function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div
      variants={animationVariants.fadeIn}
      custom={index}
      className="group h-full"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/50 flex flex-col">
        <CardHeader className="pb-4">
          {/* Pokemon Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Image
                src={project.pokemon.sprite}
                alt={project.pokemon.name}
                width={60}
                height={60}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <div className="text-sm text-muted-foreground font-mono">
                  {formatPokemonId(project.pokemon.id)}
                </div>
                <div className="font-medium capitalize">{project.pokemon.name}</div>
              </div>
            </div>
            
            {/* Pokemon Types */}
            <div className="flex gap-1 flex-wrap">
              {project.pokemon.types.map((type) => (
                <Badge 
                  key={type}
                  className={`${getTypeColor(type)} ${getTypeTextColor(type)} px-2 py-1 text-xs`}
                >
                  {capitalize(type)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Title */}
          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          {/* Project Description */}
          <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

          {/* Technologies */}
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-sm">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto">
            {/* {project.github && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(project.github, '_blank')}
                className="flex-1 cursor-pointer"
              >
                <span className="mr-2">GitHub
                </span>
              </Button>
            )} */}
            {project.demo && (
              <Button 
                size="sm"
                onClick={() => window.open(project.demo, '_blank')}
                className="flex-1 cursor-pointer"
              >
                <span className="mr-2">Live Demo</span>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
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
            My Projects & <span className="text-primary">Pokemon Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each project is paired with a Pokemon that represents its essence and characteristics. 
            Explore my digital adventures and the Pokemon that helped make them possible!
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants.staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants.fadeIn}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Own Adventure?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate and create something amazing together! Whether you need a web application, 
                mobile app, or just want to discuss Pokemon, I'm here to help.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="cursor-pointer"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Connect! 🤝
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => window.open('https://github.com/Arkio12', '_blank')}
                >
                  View All Projects 📱
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pokemon Team Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants.fadeIn}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">My Project Pokemon Team</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={project.pokemon.sprite}
                      alt={project.pokemon.name}
                      width={60}
                      height={60}
                      className="mx-auto mb-2"
                    />
                    <div className="text-sm font-medium capitalize">{project.pokemon.name}</div>
                    <div className="text-xs text-muted-foreground">{project.title}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
