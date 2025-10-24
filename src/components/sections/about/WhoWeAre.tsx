"use client"

import React from "react"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { motion } from "motion/react"
import { Code2, Database, Lightbulb, Target } from "lucide-react"

export const WhoWeAre: React.FC = () => {
    // ============================================================
    // CORE VALUES DATA
    // ============================================================
    
    const values = [
        {
            icon: Code2,
            title: "Clean Code",
            description: "Writing maintainable, scalable code with best practices and modern standards."
        },
        {
            icon: Database,
            title: "Data-Driven",
            description: "Leveraging analytics and insights to inform design and development decisions."
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Exploring new technologies and approaches to solve complex problems."
        },
        {
            icon: Target,
            title: "User-Focused",
            description: "Prioritizing user experience and accessibility in every project."
        }
    ]

    const LeftIcon = values[0].icon

    // ============================================================
    // RENDER
    // ============================================================

    return(
        <section id="who-we-are" className="min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* ============================================================ */}
                {/* SECTION TITLE */}
                {/* ============================================================ */}
                
                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-24 sm:h-32 md:h-40 lg:h-48 flex items-center justify-center mb-6 sm:mb-8 md:mb-12"
                    >
                    <div className="w-4/5 sm:w-3/4 md:w-2/3 aspect-3/1">
                        <TextHoverEffect text="WHO WE ARE" duration={2} />
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
                        We are a frontend development team focused on creating clean, minimalist digital experiences. 
                        With a background in data analytics, we bring a unique perspective to web development—combining 
                        aesthetic design with data-driven decision making.
                    </motion.p>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm md:text-base text-foreground/60 leading-relaxed font-mono"
                    >
                        Our approach prioritizes simplicity, performance, and user experience. 
                        Every line of code serves a purpose, every design choice is intentional.
                    </motion.p>
                </div>

                {/* ============================================================ */}
                {/* CORE VALUES CARDS */}
                {/* ============================================================ */}

                <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
                    {/* Featured Value Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
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
                                    <LeftIcon className="w-14 h-14" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-header text-2xl mb-4 text-foreground group-hover:text-secondary transition-colors duration-300">
                                    {values[0].title}
                                </h3>
                                <div className="w-16 h-0.5 bg-secondary/30 mb-6 group-hover:w-24 group-hover:bg-secondary transition-all duration-300" />
                                <p className="text-base text-foreground/70 leading-relaxed font-mono">
                                    {values[0].description}
                                </p>
                            </div>
                        </CardSpotlight>
                    </motion.div>

                    {/* Additional Values Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 gap-6">
                        {values.slice(1).map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                            >
                                <CardSpotlight 
                                    radius={280}
                                    color="#134a87"
                                    className="h-full p-8 border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 group"
                                >
                                    <div className="relative z-10 h-full flex flex-col">
                                        <div className="mb-6 text-secondary group-hover:scale-110 transition-transform duration-300 inline-block">
                                            <value.icon className="w-10 h-10" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="font-header text-xl mb-3 text-foreground group-hover:text-secondary transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-secondary/30 mb-4 group-hover:w-20 group-hover:bg-secondary transition-all duration-300" />
                                        <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-mono grow">
                                            {value.description}
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