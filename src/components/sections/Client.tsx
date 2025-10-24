import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "motion/react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Star } from "lucide-react";
import Link from "next/link";

export const ClientSection: React.FC = () => {
    const clientTestimonials = [
        {
            quote: "Working with Mike was an absolute pleasure. They delivered a sleek, performant website that exceeded our expectations. Their attention to detail and clean code practices are outstanding.",
            name: "Sarah Mitchell",
            title: "HRM, TechFlow Solutions"
        },
        {
            quote: "TADS data-driven approach to frontend development really set them apart. They optimized our user experience based on real metrics, resulting in a 20% increase in engagement.",
            name: "Matilda Olasunkanmi",
            title: "Product Manager, DataViz Pro"
        },
        {
            quote: "TADS transformed our outdated interface into a modern, minimalist masterpiece. The performance improvements were incredible, and our users love the new design.",
            name: "Emily Adams",
            title: "Software Engineer, CloudSync"
        },
        {
            quote: "Fast, reliable, and beautiful work. TADS delivered our project ahead of schedule with zero compromises on quality. Highly recommend!",
            name: "Aisha Olawale",
            title: "Director of Engineering, NexGen Apps"
        }
    ];

    return(
        <section id="clients" className="min-h-screen bg-background py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <div className="h-48 flex items-center justify-center mb-8">
                    <TextHoverEffect text="CLIENT STORIES" duration={2} />
                </div>

                {/* Intro Text */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-mono"
                    >
                        We've partnered with innovative startups and established businesses to create 
                        exceptional digital experiences. Here's what our clients have to say.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8"
                    >
                        <div className="flex flex-col items-center">
                            <span className="font-header text-3xl md:text-4xl text-secondary mb-1">5+</span>
                            <span className="text-xs md:text-sm text-foreground/60 font-mono">Projects Delivered</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-header text-3xl md:text-4xl text-secondary mb-1">100%</span>
                            <span className="text-xs md:text-sm text-foreground/60 font-mono">Client Satisfaction</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                ))}
                            </div>
                            <span className="text-xs md:text-sm text-foreground/60 font-mono">Average Rating</span>
                        </div>
                    </motion.div>
                </div>

                {/* Testimonials Carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
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
}