import {motion} from 'motion/react';
import { HeroScene } from '../3d/HeroScene';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 h-full w-full z-10 pointer-events-none"> 
            <HeroScene />
      </div>

      <div 
        className="relative h-screen flex flex-col items-center justify-center z-20 px-6 max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-secondary text-sm md:text-base tracking-wider uppercase">
            Frontend Development
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-header text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
        >
          Building Digital<br />Experiences
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg lg:text-xl max-w-2xl mb-4 text-foreground/80 leading-relaxed"
        >
          Crafting clean, minimalist interfaces with a data-driven approach.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-base max-w-xl mb-12 text-foreground/60"
        >
          Frontend development by a data minded individual
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <button className="glow-on-hover group flex items-center justify-center gap-2">
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="regular-hover px-8 py-3 border border-foreground/20 rounded-lg bg-transparent text-foreground hover:border-secondary transition-all">
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center gap-6"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          
          <a 
            href="mailto:contact@example.com"
            className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-foreground/40">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}