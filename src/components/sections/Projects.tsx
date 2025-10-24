import React from "react";
import { motion } from "motion/react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { LayoutGrid } from "../ui/layout-grid";
import { GlowingEffect } from "../ui/glowing-effect";
import { ExternalLink, Github } from "lucide-react";

export const Projects: React.FC = () => {
    const projects = [
        {
            id: 1,
            className: "md:col-span-2",
            thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
            content: (
                <div>
                    <p className="font-header text-2xl md:text-3xl text-white mb-2">
                        E-Commerce Platform
                    </p>
                    <p className="font-mono text-sm text-white/80 mb-4">
                        Modern e-commerce solution built with Next.js, React, and Stripe integration. 
                        Features include real-time inventory, cart management, and secure checkout.
                    </p>
                    <div className="flex gap-4 mb-4">
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            Next.js
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            TypeScript
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            Tailwind
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm">
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm">
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            className: "col-span-1",
            thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
            content: (
                <div>
                    <p className="font-header text-xl md:text-2xl text-white mb-2">
                        3D Portfolio
                    </p>
                    <p className="font-mono text-sm text-white/80 mb-4">
                        Interactive 3D portfolio using Three.js and React Three Fiber. 
                        Immersive user experience with custom shaders.
                    </p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            R3F
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            Three.js
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm">
                            <ExternalLink className="w-4 h-4" />
                            <span>View</span>
                        </a>
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            className: "col-span-1",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            content: (
                <div>
                    <p className="font-header text-xl md:text-2xl text-white mb-2">
                        Data Dashboard
                    </p>
                    <p className="font-mono text-sm text-white/80 mb-4">
                        Analytics dashboard with real-time data visualization using Python backend 
                        and React frontend.
                    </p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            React
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            Python
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            D3.js
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm">
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                        </a>
                    </div>
                </div>
            ),
        },
        {
            id: 4,
            className: "md:col-span-2",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            content: (
                <div>
                    <p className="font-header text-2xl md:text-3xl text-white mb-2">
                        SaaS Platform
                    </p>
                    <p className="font-mono text-sm text-white/80 mb-4">
                        Full-stack SaaS application with authentication, subscription management, 
                        and cloud deployment. Built for scalability and performance.
                    </p>
                    <div className="flex gap-4 mb-4 flex-wrap">
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            Next.js
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            Prisma
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            PostgreSQL
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                            Stripe
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm">
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="projects" className="min-h-screen bg-background py-20 px-6 relative overflow-hidden">
            {/* Title Section */}
            <div className="max-w-7xl mx-auto relative z-20">
                <div className="h-48 flex items-center justify-center mb-8">
                    <TextHoverEffect text="PROJECTS" duration={2} />
                </div>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-mono mb-4">
                        A selection of projects showcasing my expertise in modern web development, 
                        3D graphics, and data visualization.
                    </p>
                    <p className="text-sm text-foreground/60 font-mono italic">
                        Click on any project to explore details
                    </p>
                </motion.div>
            </div>

            {/* Projects Grid with Glowing Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20"
            >
                <div className="relative max-w-7xl mx-auto">
                    {/* Glowing border effect */}
                    <div className="relative rounded-3xl border border-foreground/10 bg-background/50 backdrop-blur-sm p-4">
                        <GlowingEffect
                            blur={20}
                            spread={80}
                            proximity={100}
                            borderWidth={2}
                            disabled={false}
                        />
                        <LayoutGrid cards={projects} />
                    </div>
                </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-4xl mx-auto mt-20 relative z-20"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                            className="relative group"
                        >
                            <div className="relative p-6 rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 text-center">
                                <GlowingEffect
                                    blur={15}
                                    spread={60}
                                    proximity={80}
                                    borderWidth={1}
                                    disabled={false}
                                />
                                <div className="font-header text-3xl md:text-4xl text-secondary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm text-foreground/60 font-mono">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
