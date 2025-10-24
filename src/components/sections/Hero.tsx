"use client";
import { motion } from "motion/react";
import { HeroScene } from "../3d/HeroScene";
import { Github, Linkedin, Mail, ArrowRight, X, GlobeIcon } from "lucide-react";
import Link from "next/link";

/* ================================================================================================
   HERO SECTION - Landing page with 3D scene and CTA
================================================================================================ */

export const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden"
        >
            <div className="absolute inset-0 h-full w-full z-10 pointer-events-none">
                <HeroScene />
            </div>

            <div className="relative h-screen flex flex-col items-center justify-center z-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="text-secondary text-sm md:text-base tracking-wider uppercase">
                        TADS | FrontEnd
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-header text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
                >
                    Building Digital
                    <br />
                    Experiences
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-base md:text-lg lg:text-xl max-w-2xl mb-4 text-foreground/80 leading-relaxed px-4"
                >
                    Crafting clean, minimalist interfaces with a data-driven approach.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-sm md:text-base max-w-xl mb-8 sm:mb-12 text-foreground/60 px-4"
                >
                    Frontend development by a data minded individual
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto px-4 sm:px-0"
                >
               
                    <Link href="/main#projects" className="w-full sm:w-auto">
                        <button className="glow-on-hover w-full! sm:w-auto! h-auto! px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base group flex items-center justify-center gap-2">
                            View Projects
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </Link>

                    <Link href="/contact" className="w-full sm:w-auto">
                        <button className="regular-hover w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-foreground/20 rounded-lg bg-transparent text-foreground hover:border-secondary transition-all text-sm sm:text-base">
                            Get In Touch
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="flex items-center gap-4 sm:gap-6"
                >
                    <a
                        href="https://github.com/tadstech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>

                    <a
                        href="https://linkedin.com/in/tadstech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>

                    <a
                        href="mailto:motrenewed@gmail.com"
                        className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>

                    <a
                        href="https://tadstech.web.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        aria-label="Website"
                    >
                        <GlobeIcon className="w-5 h-5" />
                    </a>

                    <a
                        href="https://x.com/tads_tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        aria-label="X (Twitter)"
                    >
                        <X className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};