import React from "react";
import { motion } from "motion/react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { 
    Code2, 
    Layers, 
    FileCode, 
    Palette, 
    Sparkles,
    Box,
    Globe,
    Zap,
    Package,
    GitBranch,
    Terminal,
    BarChart3,
    Database,
    PieChart,
    Cpu,
    Boxes,
    Brush,
    Binary
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const TechStack: React.FC = () => {
    const techCategories = [
        {
            category: "Frontend",
            technologies: [
                { name: "React", icon: Code2, color: "#61DAFB" },
                { name: "Next.js", icon: Layers, color: "#000000" },
                { name: "TypeScript", icon: FileCode, color: "#3178C6" },
                { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
                { name: "Framer Motion", icon: Sparkles, color: "#FF0055" },
            ]
        },
        {
            category: "3D & Animation",
            technologies: [
                { name: "Three.js", icon: Box, color: "#000000" },
                { name: "React Three Fiber", icon: Globe, color: "#134a87" },
                { name: "Drei", icon: Boxes, color: "#1a6bb8" },
                { name: "GSAP", icon: Zap, color: "#88CE02" },
            ]
        },
        {
            category: "Backend & Tools",
            technologies: [
                { name: "Python", icon: Code2, color: "#3776AB" },
                { name: "Node.js", icon: Package, color: "#339933" },
                { name: "Git", icon: GitBranch, color: "#F05032" },
                { name: "VS Code", icon: Terminal, color: "#007ACC" },
            ]
        },
        {
            category: "Data & Analytics",
            technologies: [
                { name: "Pandas", icon: BarChart3, color: "#150458" },
                { name: "NumPy", icon: Binary, color: "#013243" },
                { name: "Plotly", icon: PieChart, color: "#11557c" },
                { name: "SQL", icon: Database, color: "#CC2927" },
            ]
        }
    ];

    return (
        <section id="tech-stack" className="min-h-screen bg-background py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="h-48 flex items-center justify-center mb-12">
                    <TextHoverEffect text="TECH STACK" duration={2} />
                </div>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-mono">
                        A curated selection of technologies I use to build modern, 
                        performant web applications with exceptional user experiences.
                    </p>
                </motion.div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {techCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="border border-foreground/10 rounded-2xl p-8 bg-background/50 backdrop-blur-sm hover:border-secondary/30 transition-all duration-300"
                        >
                            {/* Category Title */}
                            <h3 className="font-header text-xl md:text-2xl mb-6 text-foreground flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                {category.category}
                            </h3>

                            {/* Tech Items */}
                            <div className="grid grid-cols-2 gap-4">
                                {category.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.3, 
                                            delay: categoryIndex * 0.1 + techIndex * 0.05 
                                        }}
                                        whileHover={{ 
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="group relative"
                                    >
                                        <div className="relative p-4 rounded-xl border border-foreground/10 bg-card/30 hover:border-secondary/50 transition-all duration-300 cursor-pointer overflow-hidden">
                                            {/* Glow effect on hover */}
                                            <div className="absolute inset-0 bg-linear-to-br from-secondary/0 via-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            
                                            {/* Content */}
                                            <div className="relative z-10 flex flex-col items-center gap-2">
                                                <motion.div
                                                    whileHover={{ 
                                                        rotate: [0, -10, 10, -10, 0],
                                                        transition: { duration: 0.5 }
                                                    }}
                                                >
                                                    <tech.icon 
                                                        className="w-8 h-8 text-secondary group-hover:text-secondary/80 transition-colors duration-300" 
                                                        strokeWidth={1.5}
                                                    />
                                                </motion.div>
                                                <span className="text-sm font-mono text-foreground/70 group-hover:text-secondary transition-colors duration-300">
                                                    {tech.name}
                                                </span>
                                            </div>

                                            {/* Bottom accent line */}
                                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Tech - Centered Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <h3 className="font-header text-xl text-center mb-8 text-foreground/80">
                        Currently Exploring
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        {["WebGL", "Shaders", "3D modelling", "WebAssembly"].map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="group relative"
                            >
                                <div className="relative px-6 py-2 rounded-full border-2 border-secondary/30 bg-background hover:border-secondary hover:shadow-[0_0_20px_rgba(19,74,135,0.3)] transition-all duration-300">
                                    <span className="font-mono text-sm text-foreground group-hover:text-secondary transition-colors duration-300">
                                        {tech}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-xs md:text-sm text-foreground/50 font-mono italic">
                        "The best tool is the one that solves the problem elegantly."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
