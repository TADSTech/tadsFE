"use client";
import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, X, Globe, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
    // ============================================================
    // DYNAMIC DATA
    // ============================================================
    
    const currentYear = new Date().getFullYear();

    // ============================================================
    // NAVIGATION LINKS - Internal site navigation
    // SEO: Helps crawlers understand site structure
    // ============================================================
    
    const navLinks = [
        { name: "Home", href: "#hero", description: "Back to homepage" },
        { name: "About", href: "#who-we-are", description: "Learn about our team" },
        { name: "Services", href: "#what-we-do", description: "Our services and expertise" },
        { name: "Tech Stack", href: "#tech-stack", description: "Technologies we use" },
        { name: "Projects", href: "#projects", description: "View our portfolio" },
        { name: "Clients", href: "#clients", description: "Client testimonials" },
    ];

    // ============================================================
    // SOCIAL MEDIA LINKS - External profile connections
    // SEO: Builds social presence and brand authority
    // ============================================================
    
    const socialLinks = [
        { 
            name: "GitHub", 
            icon: Github, 
            href: "https://github.com/tadstech",
            color: "#F5F5F5",
            description: "View our open source projects on GitHub"
        },
        { 
            name: "LinkedIn", 
            icon: Linkedin, 
            href: "https://linkedin.com/in/tadstech",
            color: "#0A66C2",
            description: "Connect with us on LinkedIn"
        },
        { 
            name: "Email", 
            icon: Mail, 
            href: "mailto:motrenewed@gmail.com",
            color: "#EA4335",
            description: "Send us an email"
        },
        { 
            name: "X (Twitter)", 
            icon: X, 
            href: "https://x.com/tads_tech",
            color: "#000000",
            description: "Follow us on X (Twitter)"
        },
        { 
            name: "Website", 
            icon: Globe, 
            href: "https://tadstech.web.app",
            color: "#134a87",
            description: "Visit our main website"
        },
    ];

    // ============================================================
    // SMOOTH SCROLL HANDLERS
    // UX: Smooth navigation for better user experience
    // ============================================================
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // ============================================================
    // RENDER
    // ============================================================
    
    return (
        <footer 
            className="relative bg-background border-t border-foreground/10"
            role="contentinfo"
            aria-label="Site footer"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                {/* ============================================================ */}
                {/* MAIN FOOTER CONTENT - Three-column layout */}
                {/* ============================================================ */}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    {/* ============================================================ */}
                    {/* BRAND SECTION - Company identity and tagline */}
                    {/* SEO: Reinforces brand and value proposition */}
                    {/* ============================================================ */}
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="font-header text-xl sm:text-2xl text-foreground mb-4">
                            TADS<span className="text-secondary">-FE</span>
                        </h3>
                        <p className="text-sm text-foreground/60 leading-relaxed font-mono mb-6">
                            Building clean, minimalist digital experiences with a data-driven approach. 
                            Modern frontend development for the web.
                        </p>
                        <p className="text-xs text-foreground/50 font-mono">
                            Specializing in React, Next.js, TypeScript, and Modern web development.
                        </p>
                    </motion.div>

                    {/* ============================================================ */}
                    {/* QUICK NAVIGATION LINKS - Site structure overview */}
                    {/* SEO: Internal linking for better crawlability */}
                    {/* ============================================================ */}
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:pl-12"
                    >
                        <h4 className="font-header text-base sm:text-lg text-foreground mb-4 sm:mb-6">
                            Quick Links
                        </h4>
                        <nav 
                            className="flex flex-col gap-3"
                            aria-label="Footer navigation"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="text-sm text-foreground/60 hover:text-secondary transition-colors duration-300 font-mono group flex items-center gap-2"
                                    aria-label={link.description}
                                >
                                    <span className="w-0 h-px bg-secondary group-hover:w-4 transition-all duration-300" aria-hidden="true" />
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* ============================================================ */}
                    {/* SOCIAL MEDIA SECTION - External connections */}
                    {/* SEO: Social signals and brand presence */}
                    {/* ============================================================ */}
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="font-header text-base sm:text-lg text-foreground mb-4 sm:mb-6">
                            Connect
                        </h4>
                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-2.5 sm:p-3 rounded-lg border border-foreground/10 bg-card/30 hover:border-secondary/50 transition-all duration-300"
                                    aria-label={social.description}
                                    title={social.name}
                                >
                                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60 group-hover:text-secondary transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-foreground/50 font-mono mb-2">
                            Available for freelance opportunities
                        </p>
                        <a 
                            href="mailto:motrenewed@gmail.com"
                            className="text-xs text-secondary hover:text-secondary/80 font-mono transition-colors duration-300"
                        >
                            motrenewed@gmail.com
                        </a>
                    </motion.div>
                </div>

                {/* ============================================================ */}
                {/* DIVIDER - Visual separator */}
                {/* ============================================================ */}
                
                <div className="w-full h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent mb-6 sm:mb-8" />

                {/* ============================================================ */}
                {/* BOTTOM BAR - Copyright and utility links */}
                {/* SEO: Legal information and copyright notice */}
                {/* ============================================================ */}
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    {/* Copyright Notice */}
                    <p className="text-xs text-foreground/50 font-mono text-center md:text-left">
                        © {currentYear} TADS-FE. All rights reserved. Built with passion and precision.
                    </p>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-xs text-foreground/60 hover:text-secondary transition-colors duration-300 font-mono"
                        aria-label="Scroll to top of page"
                        type="button"
                    >
                        <span>Back to top</span>
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" aria-hidden="true" />
                    </button>
                </motion.div>
            </div>

            {/* ============================================================ */}
            {/* DECORATIVE ACCENT - Visual enhancement */}
            {/* ============================================================ */}
            
            <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none" aria-hidden="true">
                <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-secondary/20 rounded-tl-full" />
            </div>
        </footer>
    );
};
