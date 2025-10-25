"use client";
import { motion } from "motion/react";
import { HeroScene } from "../3d/HeroScene";
import { Github, Linkedin, Mail, ArrowRight, X, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Hero: React.FC = () => {
    const router = useRouter();

    const handleViewProjects = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push('/main');
        setTimeout(() => {
            const element = document.getElementById('projects');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center bg-background overflow-hidden"
        >
            <div className="absolute inset-0 h-full w-full z-10 pointer-events-none">
                <HeroScene />
            </div>
            
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6"
                    >
                        <span className="text-secondary text-xs sm:text-sm tracking-widest uppercase font-mono">
                            TADS | FrontEnd
                        </span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 tracking-tight leading-none"
                    >
                        Maximalist<br />Minimalism
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-sm sm:text-base md:text-lg max-w-lg mb-10 text-foreground/60"
                    >
                        Frontend development by a data minded individual
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <button 
                            onClick={handleViewProjects}
                            className="glow-on-hover w-auto sm:w-auto px-8 py-4 text-sm sm:text-base group flex items-center justify-center gap-2"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>

                        <Link href="/contact/">
                            <button className="regular-hover w-full sm:w-auto px-8 py-4 border border-foreground/20 rounded-lg bg-transparent text-foreground hover:border-secondary transition-all text-sm sm:text-base">
                                Get In Touch
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-6"
                    >
                        <a
                            href="https://github.com/tadstech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        >
                            <Github className="w-5 h-5" />
                        </a>

                        <a
                            href="https://linkedin.com/in/tadstech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>

                        <a
                            href="mailto:motrenewed@gmail.com"
                            className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        >
                            <Mail className="w-5 h-5" />
                        </a>

                        <a
                            href="https://tadstech.web.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        >
                            <GlobeIcon className="w-5 h-5" />
                        </a>

                        <a
                            href="https://x.com/tads_tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="regular-hover text-foreground/60 hover:text-secondary transition-colors p-2"
                        >
                            <X className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};