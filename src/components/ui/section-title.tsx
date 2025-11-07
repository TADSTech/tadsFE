"use client";
import React from "react";
import { motion } from "motion/react";

interface SectionTitleProps {
    text: string;
    duration?: number;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text, duration = 2 }) => {
    const letters = text.split("");

    return (
        <div className="mb-12 sm:mb-16">
            <motion.div
                className="flex flex-wrap items-center justify-center gap-1 sm:gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={`${letter}-${index}`}
                        className="font-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground tracking-tight leading-none"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 40,
                                    duration: 0.4,
                                },
                            },
                        }}
                    >
                        {letter === " " ? <span>&nbsp;</span> : letter}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};
