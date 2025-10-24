"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "motion/react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Star } from "lucide-react";


export const ClientSection: React.FC = () => {
    // ============================================================
    // TESTIMONIALS DATA - Real client feedback
    // ============================================================
    
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

    // ============================================================
    // RENDER
    // ============================================================
    
    return(
        <section 
            id="clients" 
            className="min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6 overflow-hidden"
            aria-labelledby="client-section-title"
        >
            <div className="max-w-7xl mx-auto">
                {/* ============================================================ */}
                {/* SECTION TITLE - "CLIENT STORIES" header */}
                {/* ============================================================ */}
                
                <div className="h-24 sm:h-32 md:h-40 lg:h-48 flex items-center justify-center mb-6 sm:mb-8">
                    <div className="w-full max-w-full scale-[0.5] sm:scale-[0.6] md:scale-75 lg:scale-90 xl:scale-100 origin-center">
                        <TextHoverEffect text="CLIENT STORIES" duration={2} />
                    </div>
                    {/* Hidden heading for SEO and screen readers */}
                    <h2 id="client-section-title" className="sr-only">
                        Client Testimonials and Success Stories
                    </h2>
                </div>

                {/* ============================================================ */}
                {/* INTRODUCTION TEXT - Context and value proposition */}
                {/* SEO: Explains services and client relationships */}
                {/* ============================================================ */}
                
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-mono"
                    >
                        We've partnered with innovative startups and established businesses to create 
                        exceptional digital experiences. Here's what our clients have to say.
                    </motion.p>

                    {/* ============================================================ */}
                    {/* TRUST INDICATORS - Key statistics and social proof */}
                    {/* SEO: Quantifiable achievements for credibility */}
                    {/* ============================================================ */}
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8"
                    >
                        {/* Projects Delivered Count */}
                        <div className="flex flex-col items-center">
                            <span className="font-header text-2xl sm:text-3xl md:text-4xl text-secondary mb-1">
                                5+
                            </span>
                            <span className="text-xs md:text-sm text-foreground/60 font-mono">
                                Projects Delivered
                            </span>
                        </div>

                        {/* Client Satisfaction Rate */}
                        <div className="flex flex-col items-center">
                            <span className="font-header text-2xl sm:text-3xl md:text-4xl text-secondary mb-1">
                                100%
                            </span>
                            <span className="text-xs md:text-sm text-foreground/60 font-mono">
                                Client Satisfaction
                            </span>
                        </div>

                        {/* Average Rating - Visual star display */}
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

                {/* ============================================================ */}
                {/* TESTIMONIALS CAROUSEL - Auto-scrolling client reviews */}
                {/* SEO: Rich, authentic client feedback with attribution */}
                {/* ============================================================ */}
                
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