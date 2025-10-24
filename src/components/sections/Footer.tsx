import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, X, Globe, ArrowUp, Heart } from "lucide-react";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#who-we-are" },
        { name: "Services", href: "#what-we-do" },
        { name: "Tech Stack", href: "#tech-stack" },
        { name: "Projects", href: "#projects" },
        { name: "Clients", href: "#clients" },
    ];

    const socialLinks = [
        { 
            name: "GitHub", 
            icon: Github, 
            href: "https://github.com/tadstech",
            color: "#F5F5F5"
        },
        { 
            name: "LinkedIn", 
            icon: Linkedin, 
            href: "https://linkedin.com/in/tadstech",
            color: "#0A66C2"
        },
        { 
            name: "Email", 
            icon: Mail, 
            href: "mailto:motrenewed@gmail.com",
            color: "#EA4335"
        },
        { 
            name: "X", 
            icon: X, 
            href: "https://x.com/tads_tech",
            color: "#000000"
        },
        { 
            name: "Website", 
            icon: Globe, 
            href: "https://tadstech.web.app",
            color: "#134a87"
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-background border-t border-foreground/10">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="font-header text-2xl text-foreground mb-4">
                            TADS<span className="text-secondary">-FE</span>
                        </h3>
                        <p className="text-sm text-foreground/60 leading-relaxed font-mono mb-6">
                            Building clean, minimalist digital experiences with a data-driven approach. 
                            Modern frontend development for the web.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:pl-12"
                    >
                        <h4 className="font-header text-lg text-foreground mb-6">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-foreground/60 hover:text-secondary transition-colors duration-300 font-mono group flex items-center gap-2"
                                >
                                    <span className="w-0 h-px bg-secondary group-hover:w-4 transition-all duration-300" />
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="font-header text-lg text-foreground mb-6">
                            Connect
                        </h4>
                        <div className="flex flex-wrap gap-4 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-3 rounded-lg border border-foreground/10 bg-card/30 hover:border-secondary/50 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5 text-foreground/60 group-hover:text-secondary transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-foreground/50 font-mono">
                            Available for freelance opportunities
                        </p>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent mb-8" />

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-xs text-foreground/50 font-mono text-center md:text-left">
                        © {currentYear} TADS-FE. All rights reserved. Built with passion and precision.
                    </p>

                    {/* Scroll to Top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-xs text-foreground/60 hover:text-secondary transition-colors duration-300 font-mono"
                        aria-label="Scroll to top"
                    >
                        <span>Back to top</span>
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </motion.div>
            </div>

            {/* Decorative Corner Accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-secondary/20 rounded-tl-full" />
            </div>
        </footer>
    );
};
