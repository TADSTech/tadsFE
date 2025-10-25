"use client";
import React from "react";
import { motion } from "motion/react";
import { SectionTitle } from "../ui/section-title";
import { CardSpotlight } from "../ui/card-spotlight";
import { ExternalLink, Github, Code2, Layers, Database, Zap } from "lucide-react";

export const Projects: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "TADS | FE",
            description: "Modern interactive portfolio website built with Next.js, React, and Tailwind CSS. Showcases 3D graphics and responsive design for TADS|FE",
            icon: Layers,
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
        >
            <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/5 to-background pointer-events-none" />
            
            <h2 className="sr-only">Projects</h2>
            
            <div className="max-w-7xl mx-auto relative z-20">
                <SectionTitle text="PROJECTS" duration={2} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto mb-12 sm:mb-16"
                >
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed font-mono">
                        Things I've built. Some for clients, some for fun.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CardSpotlight className="h-full group">
                                <div className="relative h-full p-6 sm:p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/30 group-hover:scale-110 transition-transform duration-300">
                                            <project.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-header text-xl sm:text-2xl md:text-3xl text-foreground group-hover:text-secondary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-sm sm:text-base text-foreground/70 font-mono leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-foreground/50 font-mono">
                                                {project.stats.label}
                                            </span>
                                            <span className="text-lg sm:text-xl font-header text-secondary">
                                                {project.stats.value}
                                            </span>
                                        </div>
                                        
                                        <div className="flex gap-3">
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    className="p-2.5 rounded-lg bg-foreground/5 hover:bg-secondary/10 border border-foreground/10 hover:border-secondary transition-all group/link"
                                                    aria-label={`View ${project.title} on GitHub`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="w-5 h-5 text-foreground/70 group-hover/link:text-secondary transition-colors" />
                                                </a>
                                            )}
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    className="p-2.5 rounded-lg bg-foreground/5 hover:bg-secondary/10 border border-foreground/10 hover:border-secondary transition-all group/link"
                                                    aria-label={`View ${project.title} live`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="w-5 h-5 text-foreground/70 group-hover/link:text-secondary transition-colors" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-5xl mx-auto mt-12 sm:mt-20 relative z-20"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        { label: "Projects", value: "5+" },
                        { label: "Tech", value: "10+" },
                        { label: "Clients", value: "12+" },
                        { label: "Quality", value: "A" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                            className="p-4 sm:p-6 text-center border border-foreground/10 rounded-xl bg-background/30 backdrop-blur-sm hover:border-secondary/30 transition-all duration-300"
                        >
                            <div className="font-header text-2xl sm:text-3xl md:text-4xl text-secondary mb-1 sm:mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-foreground/60 font-mono">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
