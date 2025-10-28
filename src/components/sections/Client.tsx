"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "motion/react";
import { SectionTitle } from "../ui/section-title";
import { Star } from "lucide-react";


export const ClientSection: React.FC = () => {
    const clientTestimonials = [
        {
            quote: "Mike delivered exactly what we needed with clean code and fast performance. Professional, reliable work throughout the project.",
            name: "Sarah Mitchell",
            title: "HRM, TechFlow Solutions"
        },
        {
            quote: "He took time to understand our data and improved the solution beyond initial requirements. User engagement increased by 20%.",
            name: "Matilda Olasunkanmi",
            title: "Product Manager, DataViz Pro"
        },
        {
            quote: "Transformed our outdated platform into a modern, user-friendly application. Fast delivery without compromising quality.",
            name: "Emily Adams",
            title: "Software Engineer, CloudSync"
        },
        {
            quote: "Delivered ahead of schedule with attention to detail and solid technical execution. Would definitely work together again.",
            name: "Aisha Olawale",
            title: "Director of Engineering, NexGen Apps"
        }
    ];
    
    return(
        <section 
            id="clients" 
            className="min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6 overflow-hidden"
            aria-labelledby="client-section-title"
        >
            <div className="max-w-7xl mx-auto">
                <h2 id="client-section-title" className="sr-only">
                    Client Testimonials and Success Stories
                </h2>
                
                <SectionTitle text="CLIENT STORIES" duration={2} />

                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-mono"
                    >
                        I've worked with startups and established businesses on web projects of varying scale. 
                        Here's what some clients have said.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8"
                    >
                        <div className="flex flex-col items-center">
                            <span className="font-header text-2xl sm:text-3xl md:text-4xl text-secondary mb-1">
                                5+
                            </span>
                            <span className="text-xs md:text-sm text-foreground/60 font-mono">
                                Projects Delivered
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="font-header text-2xl sm:text-3xl md:text-4xl text-secondary mb-1">
                                100%
                            </span>
                            <span className="text-xs md:text-sm text-foreground/60 font-mono">
                                Client Satisfaction
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1 mb-1" role="img" aria-label="5 out of 5 stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary" 
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <span className="text-xs md:text-sm text-foreground/60 font-mono">
                                Average Rating
                            </span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                    role="region"
                    aria-label="Client testimonials carousel"
                >
                    <InfiniteMovingCards 
                        direction="left" 
                        speed="slow" 
                        items={clientTestimonials}
                        pauseOnHover={true}
                    />
                </motion.div>
            </div>
        </section>
    );
};