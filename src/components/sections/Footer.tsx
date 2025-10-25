"use client";
import React from "react";
import { Github, Linkedin, Mail, X } from "lucide-react";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { 
            name: "GitHub", 
            icon: Github, 
            href: "https://github.com/tadstech"
        },
        { 
            name: "LinkedIn", 
            icon: Linkedin, 
            href: "https://linkedin.com/in/tadstech"
        },
        { 
            name: "Email", 
            icon: Mail, 
            href: "mailto:motrenewed@gmail.com"
        },
        { 
            name: "X", 
            icon: X, 
            href: "https://x.com/tads_tech"
        }
    ];

    return (
        <footer className="border-t border-foreground/10 py-8 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/40 hover:text-foreground transition-colors duration-300"
                            aria-label={social.name}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                <p className="text-xs text-foreground/40 font-mono">
                    © {currentYear} TADS-FE
                </p>
            </div>
        </footer>
    );
};
