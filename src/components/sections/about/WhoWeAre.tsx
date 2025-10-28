"use client"

import React from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { motion } from "motion/react"
import { Code2, Coffee, Zap, Heart } from "lucide-react"

export const WhoWeAre: React.FC = () => {
    const principles = [
        {
            icon: Code2,
            title: "Code that makes sense",
            description: "Clean, maintainable code without unnecessary complexity. Built for humans to read."
        },
        {
            icon: Coffee,
            title: "Details matter",
            description: "Pixel-perfect designs, smooth animations, and thoughtful interactions throughout."
        },
        {
            icon: Zap,
            title: "Performance first",
            description: "Fast load times and responsive interfaces. Users shouldn't have to wait."
        },
        {
            icon: Heart,
            title: "Purpose-driven development",
            description: "Technology that solves real problems and delivers genuine value."
        }
    ]

    return(
        <section id="who-we-are" className="min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <SectionTitle text="WHO WE ARE" duration={2} />

                <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-mono"
                    >
                        I develop web applications with a focus on frontend development and user experience. 
                        My background in data analytics informs how I approach design and optimization.
                    </motion.p>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm md:text-base text-foreground/60 leading-relaxed font-mono"
                    >
                        I believe in simple, effective code and intentional design choices.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
                    {principles.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                
                                <div className="relative p-6 sm:p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="mt-1 text-secondary/60 group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                                            <Icon className="w-8 h-8" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-header text-lg sm:text-xl text-foreground/90 group-hover:text-foreground transition-colors duration-300 leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-sm sm:text-base text-foreground/60 leading-relaxed font-mono pl-12">
                                        {item.description}
                                    </p>
                                    <div className="absolute left-6 top-0 w-px h-full bg-linear-to-b from-transparent via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}