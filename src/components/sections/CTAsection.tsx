"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GlowingEffect } from "../ui/glowing-effect";
import { AuroraBackground } from "../ui/aurora-background";
import { ArrowRight, Sparkles, Zap, Globe as GlobeIcon, Code2, Download } from "lucide-react";
import Link from "next/link";

export const CTASection: React.FC = () => {
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            setDimensions({ width, height });
            setIsMobile(width < 768);
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const features = [
        {
            icon: Zap,
            text: "Fast delivery",
        },
        {
            icon: Code2,
            text: "Clean code",
        },
        {
            icon: GlobeIcon,
            text: "Built to scale",
        },
        {
            icon: Sparkles,
            text: "Modern tech",
        },
    ];

    return (
        <AuroraBackground
            className="relative min-h-screen h-auto overflow-hidden p-0!"
            showRadialGradient={false}
            style={{
                "--aurora": "repeating-linear-gradient(100deg,#134a87_10%,#1a5d9e_15%,#134a87_20%,#0d3461_25%,#134a87_30%)",
                "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            } as React.CSSProperties}
        >
            <section className="relative min-h-screen bg-background/80 backdrop-blur-sm overflow-hidden py-12 sm:py-20 px-4 sm:px-6 w-full">
                <div className="absolute inset-0 bg-linear-to-b from-background/50 via-secondary/5 to-background/50 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent pointer-events-none" />

                {!isMobile && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-secondary/30 rounded-full"
                                initial={{
                                    x: Math.random() * dimensions.width,
                                    y: Math.random() * dimensions.height,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: [null, Math.random() * dimensions.height],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                }}
                            />
                        ))}
                    </div>
                )}

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: isMobile ? 0.5 : 0.8 }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: isMobile ? 1 : 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: isMobile ? 0 : 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm"
                            >
                                <Sparkles className="w-4 h-4 text-secondary" />
                                <span className="text-sm font-mono text-secondary">
                                    Got an idea?
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: isMobile ? 0.1 : 0.3 }}
                            >
                                <h2 className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 sm:mb-6 leading-tight">
                                    Let's Build
                                    <br />
                                    <span className="text-secondary">Something</span>
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed font-mono max-w-xl">
                                    Turn your idea into a working product. Fast, clean, and at an affordable price.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: isMobile ? 0.2 : 0.4 }}
                                className="grid grid-cols-2 gap-3 sm:gap-4"
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.text}
                                        initial={{ opacity: 0, scale: isMobile ? 1 : 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: isMobile ? 0.1 * index : 0.5 + index * 0.1 }}
                                        className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border border-foreground/10 bg-card/30 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 group"
                                    >
                                        <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-xs sm:text-sm font-mono text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                                            {feature.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: isMobile ? 0.3 : 0.6 }}
                                className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4"
                            >
                                <Link href="/contact/" aria-label="Get started">
                                    <div className="relative group cursor-pointer">
                                        {!isMobile && (
                                            <GlowingEffect
                                                blur={25}
                                                spread={100}
                                                proximity={120}
                                                borderWidth={2}
                                                disabled={false}
                                            />
                                        )}
                                        <button className="relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-secondary text-white font-mono font-bold text-base sm:text-lg rounded-xl hover:bg-secondary/90 transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden">
                                            <span className="relative z-10">Get Started</span>
                                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                            
                                            <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/80 to-secondary group-hover:scale-110 transition-transform duration-500" />
                                        </button>
                                    </div>
                                </Link>

                                <a 
                                    href="/TADSFE-CV-FULL.pdf" 
                                    download
                                    aria-label="Download Resume"
                                >
                                    <button className="relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-transparent text-foreground border-2 border-white/80 font-mono font-bold text-base sm:text-lg rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3 group">
                                        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                        <span>Download CV</span>
                                    </button>
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: isMobile ? 0.4 : 0.7 }}
                                className="flex items-center gap-4 sm:gap-8 pt-2 sm:pt-4"
                            >
                                <div className="text-center">
                                    <div className="font-header text-2xl sm:text-3xl text-secondary">2+</div>
                                    <div className="text-xs text-foreground/50 font-mono">Years</div>
                                </div>
                                <div className="w-px h-10 sm:h-12 bg-foreground/10" />
                                <div className="text-center">
                                    <div className="font-header text-2xl sm:text-3xl text-secondary">12+</div>
                                    <div className="text-xs text-foreground/50 font-mono">Clients</div>
                                </div>
                                <div className="w-px h-10 sm:h-12 bg-foreground/10" />
                                <div className="text-center">
                                    <div className="font-header text-2xl sm:text-3xl text-secondary">96%</div>
                                    <div className="text-xs text-foreground/50 font-mono">Happy</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: isMobile ? 0.5 : 0.8 }}
                            className="relative h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={isMobile ? {} : {
                                            scale: [1, 1.1, 1],
                                            opacity: [0.3, 0.5, 0.3],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-secondary/20 rounded-full blur-3xl"
                                    />
                                </div>

                                <motion.div
                                    animate={isMobile ? {} : {
                                        y: [0, -20, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute top-10 right-5 sm:right-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 text-xs font-mono text-secondary"
                                >
                                    Next.js
                                </motion.div>

                                <motion.div
                                    animate={isMobile ? {} : {
                                        y: [0, 20, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                    className="absolute bottom-16 sm:bottom-20 left-5 sm:left-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 text-xs font-mono text-secondary"
                                >
                                    React
                                </motion.div>

                                <motion.div
                                    animate={isMobile ? {} : {
                                        y: [0, -15, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2,
                                    }}
                                    className="absolute top-1/3 left-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 text-xs font-mono text-secondary"
                                >
                                    TypeScript
                                </motion.div>

                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: isMobile ? 30 : 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="relative w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 flex items-center justify-center"
                                >
                                    <div className="absolute inset-0 border-2 border-secondary/30 rounded-full" />
                                    <div className="absolute inset-4 border border-secondary/20 rounded-full" />
                                    <div className="absolute inset-8 border border-secondary/10 rounded-full" />
                                    <Sparkles className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 text-secondary" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 pointer-events-none">
                    <svg
                        className="absolute bottom-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            fill="rgba(19, 74, 135, 0.05)"
                            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        />
                    </svg>
                </div>
            </section>
        </AuroraBackground>
    );
};
