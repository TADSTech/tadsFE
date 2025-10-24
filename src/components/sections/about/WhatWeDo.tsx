"use client"

import React from "react"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { motion } from "motion/react"
import { Palette, Zap, Blocks, Workflow } from "lucide-react"

export const WhatWeDo: React.FC = () => {
    // ============================================================
    // SERVICES DATA
    // ============================================================
    
    const services = [
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Crafting intuitive interfaces that balance aesthetics with functionality and user needs."
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Building lightning-fast applications that deliver exceptional user experiences."
        },
        {
            icon: Blocks,
            title: "Component Architecture",
            description: "Developing reusable, scalable component systems for modern web applications."
        },
        {
            icon: Workflow,
            title: "Full-Stack Integration",
            description: "Seamlessly connecting frontends with backends and third-party services."
        }
    ]

    const RightIcon = services[services.length - 1].icon

    // ============================================================
    // RENDER
    // ============================================================

    return(
        <section id="what-we-do" className="min-h-screen bg-background py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* ============================================================ */}
                {/* SECTION TITLE */}
                {/* ============================================================ */}
                
                <motion.div 
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-32 sm:h-40 md:h-48 flex items-center justify-center mb-8 sm:mb-12"
                >
                    <div className="scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
                        <TextHoverEffect text="WHAT WE DO" duration={2} />
                    </div>
                </motion.div>

                {/* ============================================================ */}
                {/* INTRODUCTION TEXT */}
                {/* ============================================================ */}

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-mono"
                    >
                        We specialize in modern frontend development with a focus on creating performant, 
                        accessible, and visually striking web applications. From concept to deployment, 
                        we handle every aspect of the frontend experience.
                    </motion.p>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm md:text-base text-foreground/60 leading-relaxed font-mono"
                    >
                        Our services blend technical expertise with creative vision to deliver 
                        solutions that exceed expectations.
                    </motion.p>
                </div>

                {/* ============================================================ */}
                {/* SERVICES CARDS */}
                {/* ============================================================ */}

                <div className="flex flex-col lg:flex-row-reverse gap-6 max-w-7xl mx-auto">
                    {/* Featured Service Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/3"
                    >
                        <CardSpotlight 
                            radius={320}
                            color="#134a87"
                            className="h-full p-10 border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 group"
                        >
                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <div className="mb-8 text-secondary group-hover:scale-110 transition-transform duration-300 inline-block">
                                    <RightIcon className="w-14 h-14" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-header text-2xl mb-4 text-foreground group-hover:text-secondary transition-colors duration-300">
                                    {services[services.length - 1].title}
                                </h3>
                                <div className="w-16 h-0.5 bg-secondary/30 mb-6 group-hover:w-24 group-hover:bg-secondary transition-all duration-300" />
                                <p className="text-base text-foreground/70 leading-relaxed font-mono">
                                    {services[services.length - 1].description}
                                </p>
                            </div>
                        </CardSpotlight>
                    </motion.div>

                    {/* Additional Services Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 gap-6">
                        {services.slice(0, -1).map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <CardSpotlight 
                                    radius={280}
                                    color="#134a87"
                                    className="h-full p-8 border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 group"
                                >
                                    <div className="relative z-10 h-full flex flex-col">
                                        <div className="mb-6 text-secondary group-hover:scale-110 transition-transform duration-300 inline-block">
                                            <service.icon className="w-10 h-10" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="font-header text-xl mb-3 text-foreground group-hover:text-secondary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-secondary/30 mb-4 group-hover:w-20 group-hover:bg-secondary transition-all duration-300" />
                                        <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-mono grow">
                                            {service.description}
                                        </p>
                                    </div>
                                </CardSpotlight>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}