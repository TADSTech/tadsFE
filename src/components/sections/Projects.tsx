"use client";
import React from "react";
import { motion } from "motion/react";
import { SectionTitle } from "../ui/section-title";
import { CardSpotlight } from "../ui/card-spotlight";
import { ExternalLink, Github, Table, Notebook, Database, Zap, Frame, FrameIcon, DatabaseIcon} from "lucide-react";
import Image from "next/image";

type TechIcon = React.ComponentType<any>;

interface Tech {
    name: string;
    icon: TechIcon;
}

const TechIcon = ({ src, alt }: { src: string; alt: string }) => (
    <Image 
        src={src} 
        alt={alt}
        width={16}
        height={16}
        className="w-4 h-4 sm:w-4 sm:h-4 text-secondary shrink-0"
    />
);

export const Projects: React.FC = () => {
    const techIconMap: Record<string, Tech> = {
        "React": { name: "React", icon: () => <TechIcon src="/logo/reactjs.svg" alt="React" /> },
        "TypeScript": { name: "TypeScript", icon: () => <TechIcon src="/logo/ts-logo-256.svg" alt="TypeScript" /> },
        "Firebase": { name: "Firebase", icon: () => <TechIcon src="/logo/Logomark_Full_Firebase.svg" alt="Firebase" /> },
        "Canvas API": { name: "Canvas API", icon: () => <TechIcon src="/logo/canvas_light.svg" alt="Canvas API" /> },
        "Chart.js": { name: "Chart.js", icon: () => <TechIcon src="/logo/Chartsjs.svg" alt="Chart.js" /> },
        "LocalStorage": { name: "LocalStorage", icon: () => <TechIcon src="/logo/database.svg" alt="LocalStorage" /> },
        "Markdown": { name: "Markdown", icon: () => <TechIcon src="/logo/markdown.svg" alt="Markdown" /> },
        "Next.js": { name: "Next.js", icon: () => <TechIcon src="/logo/nextjs.svg" alt="Next.js" /> },
        "Tailwind CSS": { name: "Tailwind CSS", icon: () => <TechIcon src="/logo/tailwindcss.svg" alt="Tailwind CSS" /> },
    };

    const projects = [
        {
            id: 1,
            title: "Mini Data Manim",
            description: "Free and open-source, portable, data manipulation webapp",
            icon: Table,
            tech: ["React", "TypeScript", "Firebase"],
            category: "Data Tool",
            year: "2025"
        },
        {
            id: 2,
            title: "Reactive Image Transformer",
            description: "A web based image transforming tool built with React and TypeScript.",
            icon: FrameIcon,
            tech: ["React", "TypeScript", "Canvas API"],
            category: "Image Tool",
            year: "2025"
        },
        {
            id: 3,
            title: "SalesScope",
            description: "A lightweight sales analysis dashboard application built with React and TypeScript.",
            icon: Database,
            tech: ["React", "TypeScript", "Chart.js"],
            category: "Dashboard",
            year: "2024"
        },
        {
            id: 4,
            title: "ReactiveNotes",
            description: "A simple note-taking application. Built for scalability and performance.",
            icon: Zap,
            tech: ["React", "TypeScript", "LocalStorage"],
            category: "Productivity",
            year: "2024"
        },
        {
            id: 5,
            title: "RMDify",
            description: "A modern, minimalist markdown editor built with React and TypeScript.",
            icon: Notebook,
            tech: ["React", "TypeScript", "Markdown"],
            category: "Editor",
            year: "2025"
        },
        {
            id: 6,
            title: "TADSTech Website",
            description: "Portfolio website built with React and MUI. Showcasing projects and skills with a clean, professional design and interactive terminal.",
            icon: Frame,
            tech: ["React", "Next.js", "Tailwind CSS"],
            category: "Portfolio",
            year: "2024"
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
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed font-mono text-center">
                        A selection of work from the past couple of years. Some client projects, some side projects built for learning.
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
                                <div className="relative h-full p-6 sm:p-8 flex flex-col">
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="p-2.5 rounded-lg bg-secondary/10 border border-secondary/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                            <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-header text-lg sm:text-xl md:text-2xl text-foreground group-hover:text-secondary transition-colors duration-300 leading-snug">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-sm sm:text-base text-foreground/70 font-mono leading-relaxed mb-6 grow">
                                        {project.description}
                                    </p>

                                    <div className="space-y-4 pt-4 border-t border-foreground/10">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((tech) => {
                                                const techData = techIconMap[tech];
                                                const IconComponent = techData?.icon;
                                                return (
                                                    <div
                                                        key={tech}
                                                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md bg-secondary border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group/tech"
                                                    >
                                                        {IconComponent && (
                                                            <IconComponent className="w-4 h-4 sm:w-4 sm:h-4 text-secondary shrink-0" />
                                                        )}
                                                        <span className="text-xs sm:text-sm font-mono text-foreground/70 group-hover/tech:text-foreground transition-colors">
                                                            {tech}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="flex items-center justify-between pt-2">
                                            <div className="flex gap-4 text-xs sm:text-sm font-mono text-foreground/60">
                                                <span className="flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div>
                                                    {project.category}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div>
                                                    {project.year}
                                                </span>
                                            </div>
                                            
                                            <div className="flex gap-2">
                                                <a
                                                    href={`https://github.com/TADSTech/${project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                                                    className="p-2 rounded-lg bg-foreground/5 hover:bg-secondary/10 border border-foreground/10 hover:border-secondary transition-all group/link"
                                                    aria-label={`View ${project.title} on GitHub`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover/link:text-secondary transition-colors" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="p-2 rounded-lg bg-foreground/5 hover:bg-secondary/10 border border-foreground/10 hover:border-secondary transition-all group/link"
                                                    aria-label={`View ${project.title} live`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover/link:text-secondary transition-colors" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
