"use client"

import React from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { motion } from "motion/react"
import { Layout, Gauge, Code, Link } from "lucide-react"

export const WhatWeDo: React.FC = () => {
    const services = [
        {
            icon: Layout,
            title: "User Interface Design",
            description: "Functional, intuitive interfaces that balance aesthetics with usability."
        },
        {
            icon: Gauge,
            title: "Performance Optimization",
            description: "Fast load times and smooth interactions through careful optimization."
        },
        {
            icon: Code,
            title: "Frontend Development",
            description: "Scalable, maintainable component architecture that stands the test of time."
        },
        {
            icon: Link,
            title: "System Integration",
            description: "Connecting APIs, databases, and third-party services into cohesive solutions."
        }
    ]

    return(
        <section id="what-we-do" className="min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <SectionTitle text="WHAT WE DO" duration={2} />

                <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-mono"
                    >
                        I specialize in frontend development, design systems, and performance optimization. 
                        Modern tools, proven practices.
                    </motion.p>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm md:text-base text-foreground/60 leading-relaxed font-mono"
                    >
                        From interactive web applications to data visualizations and marketing sites.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {services.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden"
                            >
                                <div className="absolute -inset-1 bg-linear-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
                                
                                <div className="relative p-8 sm:p-10 rounded-lg border border-foreground/5 group-hover:border-secondary/20 transition-all duration-500">
                                    <div className="mb-6 text-secondary/70 group-hover:text-secondary transition-colors duration-300">
                                        <Icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                                    </div>
                                    
                                    <h3 className="font-header text-xl sm:text-2xl text-foreground mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-sm sm:text-base text-foreground/60 leading-relaxed font-mono">
                                        {item.description}
                                    </p>
                                    
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-secondary to-transparent group-hover:w-full transition-all duration-700" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}