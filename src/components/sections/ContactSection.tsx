// ContactSection component - provides contact information and form with Pokemon theme
// Includes social links and a fun Pokemon-themed contact form

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { aboutMe } from "@/data/portfolio";
import { animationVariants } from "@/utils/pokemon";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
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
            Let's Connect & <span className="text-primary">Start Our Adventure!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to team up? Whether you have a project in mind, want to discuss Pokemon, 
            or just say hello, I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants.slideInLeft}
            className="space-y-6"
          >
            {/* Main Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">📧</span>
                  <span>Get In Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">{aboutMe.email}</div>
                  </div>
                </div>
                
                {aboutMe.github && (
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📱</span>
                    <div>
                      <div className="font-medium">GitHub</div>
                      <div className="text-muted-foreground">Check out my code!</div>
                    </div>
                  </div>
                )}
                
                {aboutMe.linkedin && (
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">💼</span>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-muted-foreground">Professional network</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full justify-start cursor-pointer" 
                size="lg"
                onClick={() => window.location.href = `mailto:${aboutMe.email}`}
              >
                <span className="mr-3 text-xl">📧</span>
                Send Email
              </Button>
              
              {aboutMe.github && (
                <Button 
                  variant="outline" 
                  className="w-full justify-start cursor-pointer" 
                  size="lg"
                  onClick={() => window.open(aboutMe.github, '_blank')}
                >
                  <span className="mr-3 text-xl">📱</span>
                  Visit GitHub
                </Button>
              )}
              
              {aboutMe.linkedin && (
                <Button 
                  variant="outline" 
                  className="w-full justify-start cursor-pointer" 
                  size="lg"
                  onClick={() => window.open(aboutMe.linkedin, '_blank')}
                >
                  <span className="mr-3 text-xl">💼</span>
                  Connect on LinkedIn
                </Button>
              )}
            </div>

            {/* Pokemon Companion */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative inline-block">
                  <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
                    alt="Eevee"
                    width={100}
                    height={100}
                    className="mx-auto mb-3"
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💌
                  </motion.div>
                </div>
                <h3 className="font-bold mb-2">Eevee is waiting for your message!</h3>
                <p className="text-sm text-muted-foreground">
                  Like Eevee's evolution potential, every conversation can lead to amazing possibilities!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants.slideInRight}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">💬</span>
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Trainer Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Ash Ketchum"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="ash@pokemon.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Let's build something amazing!"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell me about your project, favorite Pokemon, or just say hi!"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full cursor-pointer" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span className="mr-2">Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Fun Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants.fadeIn}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-2">
                  <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="Pikachu"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                    alt="Charizard"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
                    alt="Blastoise"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Join Forces?</h3>
              <p className="text-muted-foreground mb-6">
                Like the legendary Pokemon trainers, great things happen when we work together. 
                Let's create something legendary!
              </p>
              <div className="text-4xl">🌟</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
