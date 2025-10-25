/**
 * ============================================================
 * PROJECTS SHOWCASE SECTION
 * ============================================================
 * Purpose: Portfolio display with interactive cards
 * SEO: Rich project metadata, external links for authority
 * Features: CardSpotlight hover effects, tech stack badges
 * Mobile: Fully responsive grid, touch-friendly interactions
 * ============================================================
 */

"use client";
import React from "react";
import { motion } from "motion/react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { CardSpotlight } from "../ui/card-spotlight";
import { ExternalLink, Github, Code2, Layers, Database, Zap } from "lucide-react";

export const Projects: React.FC = () => {
    // ============================================================
    // PROJECT DATA - Portfolio items with SEO-rich descriptions
    // ============================================================
    
    const projects = [
        {
            id: 1,
            title: "TADS | FE",
            description: "Modern interactive portfolio website built with Next.js, React, and Tailwind CSS. Showcases 3D graphics and responsive design for TADS|FE",
            icon: Layers,
            technologies: ["Next.js", "TypeScript", "Tailwind", "R3F", "GLSL", "Three.js"],
            links: {
                github: "https://github.com/TADSTech/tadsFE",
            },
            stats: {
                label: "Design",
                value: "Minimalist"
            }
        },
        {
            id: 2,
            title: "TADSTech website",
            description: "The average data scientist main portfolio website built with Vite, React, and MUI. Showcases projects and skills with a clean, professional design.",
            icon: Code2,
            technologies: ["Vite", "React", "MUI"],
            links: {
                demo: "https://tadstech.web.app",
                github: "https://github.com/TADSTech/tadstech"  
            },
            stats: {
                label: "UI",
                value: "Clean"
            }
        },
        {
            id: 3,
            title: "SalesScope",
            description: "SalesScope is a lightweight sales analytics platform that showcases how businesses can track, explore, and visualize sales performance. It combines a Python backend (for generating and cleaning realistic sales datasets) with a React + TypeScript frontend (for dashboards, KPIs, and interactive charts).",
            icon: Database,
            technologies: ["React", "Python", "Plotly.js", "WebSocket"],
            links: {
                github: "https://github.com/TADSTech/sales-scope",
                demo: "https://salesscope.web.app"
            },
            stats: {
                label: "Data Points",
                value: "100k+"
            }
        },
        {
            id: 4,
            title: "ReactiveNotes",
            description: "A simple note-taking application. Built for scalability and performance.",
            icon: Zap,
            technologies: ["React", "CSS", "HTML"],
            links: {
                demo: "https://reactionnotes.web.app/",
                github: "https://github.com/TADSTech/ReactiveNotes"
            },
            stats: {
                label: "Uptime",
                value: "99.9%"
            }
        },
    ];

    return (
        <section 
            id="projects" 
            className="min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
            aria-label="Portfolio projects showcase"
        >
            {/* ============================================================ */}
            {/* BACKGROUND DECORATION - Subtle gradient layer */}
            {/* ============================================================ */}
            
            <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/5 to-background pointer-events-none" aria-hidden="true" />
            
            {/* ============================================================ */}
            {/* SEO: Hidden heading for search engines and screen readers */}
            {/* ============================================================ */}
            
            <h2 className="sr-only">
                Web Development Projects - Next.js, React, Three.js Portfolio
            </h2>
            
            {/* ============================================================ */}
            {/* TITLE SECTION - Animated heading */}
            {/* ============================================================ */}
            
            <div className="max-w-7xl mx-auto relative z-20">
                <div className="h-32 sm:h-48 flex items-center justify-center mb-8">
                    <TextHoverEffect text="PROJECTS" duration={2} />
                </div>

                {/* Introduction text - SEO context */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
                >
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed font-mono mb-4">
                        A selection of projects showcasing my expertise in modern web development, 
                        3D graphics, and data visualization.
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/60 font-mono italic">
                        Hover over cards to see interactive effects
                    </p>
                </motion.div>
            </div>

            {/* ============================================================ */}
            {/* PROJECTS GRID - Portfolio cards with CardSpotlight effects */}
            {/* SEO: role="list" helps crawlers understand structure */}
            {/* ============================================================ */}
            
            <div className="max-w-7xl mx-auto relative z-20">
                <div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                    role="list"
                    aria-label="Project portfolio grid"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            role="listitem"
                        >
                            <CardSpotlight className="h-full">
                                <article className="relative z-20 p-6 sm:p-8 flex flex-col h-full">
                                    {/* ======================================== */}
                                    {/* PROJECT HEADER - Icon & Title */}
                                    {/* ======================================== */}
                                    
                                    <div className="flex items-start gap-4 mb-4">
                                        <div 
                                            className="p-3 rounded-xl bg-secondary/10 border border-secondary/30"
                                            aria-hidden="true"
                                        >
                                            <project.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-header text-xl sm:text-2xl md:text-3xl text-foreground mb-2">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Project description - SEO keyword rich */}
                                    <p className="text-sm sm:text-base text-foreground/70 font-mono leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* ======================================== */}
                                    {/* TECH STACK BADGES - SEO visibility */}
                                    {/* ======================================== */}
                                    
                                    <div 
                                        className="flex flex-wrap gap-2 mb-6"
                                        role="list"
                                        aria-label={`Technologies used in ${project.title}`}
                                    >
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/30 font-mono"
                                                role="listitem"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* ======================================== */}
                                    {/* PROJECT METADATA - Stats & Links */}
                                    {/* SEO: External links boost authority */}
                                    {/* ======================================== */}
                                    
                                    <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-foreground/50 font-mono">
                                                {project.stats.label}
                                            </span>
                                            <span className="text-lg sm:text-xl font-header text-secondary">
                                                {project.stats.value}
                                            </span>
                                        </div>
                                        
                                        <div className="flex gap-3" role="group" aria-label="Project links">
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    className="p-2 rounded-lg bg-foreground/5 hover:bg-secondary/10 border border-foreground/10 hover:border-secondary/30 transition-all group"
                                                    aria-label={`View ${project.title} source code on GitHub`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-secondary transition-colors" />
                                                </a>
                                            )}
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    className="p-2 rounded-lg bg-foreground/5 hover:bg-secondary/10 border border-foreground/10 hover:border-secondary/30 transition-all group"
                                                    aria-label={`View ${project.title} live demo`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-secondary transition-colors" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ============================================================ */}
            {/* PORTFOLIO STATS - Achievement metrics */}
            {/* SEO: Quantifiable metrics build credibility */}
            {/* ============================================================ */}
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-5xl mx-auto mt-12 sm:mt-20 relative z-20"
                role="region"
                aria-label="Portfolio statistics"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        { label: "Projects", value: "5+" },
                        { label: "Technologies", value: "10+" },
                        { label: "Happy Clients", value: "12+" },
                        { label: "Code Quality", value: "A" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        >
                            <CardSpotlight radius={200}>
                                <div 
                                    className="relative p-4 sm:p-6 text-center"
                                    role="group"
                                    aria-label={`${stat.value} ${stat.label}`}
                                >
                                    <div 
                                        className="font-header text-2xl sm:text-3xl md:text-4xl text-secondary mb-1 sm:mb-2"
                                        aria-hidden="true"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-foreground/60 font-mono">
                                        {stat.label}
                                    </div>
                                </div>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
