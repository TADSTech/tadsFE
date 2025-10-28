"use client";
import React, { useState, Suspense, useEffect } from "react";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Twitter,
    Clock,
    MessageSquare,
    User,
    Sparkles,
} from "lucide-react";

function AnimatedSphere() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} scale={2.5}>
                <MeshDistortMaterial
                    color="#134a87"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

function Particles({ count = 100 }: { count?: number }) {
    const particlePositions = Array.from({ length: count });
    return (
        <>
            {particlePositions.map((_, i) => {
                const x = (Math.random() - 0.5) * 10;
                const y = (Math.random() - 0.5) * 10;
                const z = (Math.random() - 0.5) * 10;
                return (
                    <mesh key={i} position={[x, y, z]}>
                        <sphereGeometry args={[0.02, 8, 8]} />
                        <meshStandardMaterial
                            color="#134a87"
                            emissive="#134a87"
                            emissiveIntensity={0.5}
                        />
                    </mesh>
                );
            })}
        </>
    );
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const recipient = "motrenewed@gmail.com";
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        
        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "motrenewed@gmail.com",
            link: "mailto:motrenewed@gmail.com",
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+234-7041029093",
            link: "tel:+2347041029093",
        },
        {
            icon: MapPin,
            title: "Location",
            value: "LA, NG",
            link: "#",
        },
        {
            icon: Clock,
            title: "Hours",
            value: "Mon-Sat: 9AM-9PM",
            link: "#",
        },
    ];

    const socialLinks = [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
    ];

    const floatingParticleCount = isMobile ? 5 : 20;

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section 
                className="relative h-[70vh] sm:h-screen max-h-[900px] min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-linear-to-b from-background via-secondary/5 to-background"
            >
                {!isMobile && (
                    <div className="absolute inset-0 z-0">
                        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                            <Suspense fallback={null}>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[10, 10, 5]} intensity={1} />
                                <pointLight position={[-10, -10, -5]} color="#134a87" intensity={0.5} />
                                <AnimatedSphere />
                                <Particles count={50} />
                                <Environment preset="night" />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    autoRotate
                                    autoRotateSpeed={0.5}
                                />
                            </Suspense>
                        </Canvas>
                    </div>
                )}

                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background z-1" />

                <div className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-20 max-w-4xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <h1 
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 text-foreground/70 font-poppins max-w-2xl mx-auto typewriter-cursor typewriter-animation"
                        >
                            Get In Touch
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 font-mono max-w-2xl mx-auto px-4">
                            Have a project in mind? Let's discuss how I can help.
                        </p>
                    </motion.div>

                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(floatingParticleCount)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-secondary/40 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, Math.random() * -100 - 50],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 5,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-12 sm:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm">
                                    <MessageSquare className="w-4 h-4 text-secondary" />
                                    <span className="text-xs sm:text-sm font-mono text-secondary">
                                        Let's talk
                                    </span>
                                </div>
                                <h2 className="font-header text-3xl sm:text-4xl md:text-5xl text-foreground">
                                    Tell me about your{" "}
                                    <span className="text-secondary">project</span>
                                </h2>
                                                                    <p className="text-sm sm:text-base text-foreground/70 font-mono">
                                        Fill out the form below and I'll respond within 24 hours.
                                    </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <label
                                        htmlFor="name"
                                        className="block text-xs sm:text-sm font-mono text-foreground/70 mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <div className="relative group">
                                        <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-secondary/50 group-focus-within:text-secondary transition-colors" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-card/30 border border-foreground/10 rounded-xl text-sm sm:text-base text-foreground font-mono focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all backdrop-blur-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <label
                                        htmlFor="email"
                                        className="block text-xs sm:text-sm font-mono text-foreground/70 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <div className="relative group">
                                        <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-secondary/50 group-focus-within:text-secondary transition-colors" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-card/30 border border-foreground/10 rounded-xl text-sm sm:text-base text-foreground font-mono focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all backdrop-blur-sm"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <label
                                        htmlFor="subject"
                                        className="block text-xs sm:text-sm font-mono text-foreground/70 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <div className="relative group">
                                        <Sparkles className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-secondary/50 group-focus-within:text-secondary transition-colors" />
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-card/30 border border-foreground/10 rounded-xl text-sm sm:text-base text-foreground font-mono focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all backdrop-blur-sm"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <label
                                        htmlFor="message"
                                        className="block text-xs sm:text-sm font-mono text-foreground/70 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-card/30 border border-foreground/10 rounded-xl text-sm sm:text-base text-foreground font-mono focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none backdrop-blur-sm"
                                        placeholder="Describe your project requirements..."
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
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
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-secondary text-white font-mono font-bold text-base sm:text-lg rounded-xl hover:bg-secondary/90 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                            aria-label="Submit contact form"
                                        >
                                            <span className="relative z-10">
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                            </span>
                                            <Send className="w-4 sm:w-5 h-4 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                            <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/80 to-secondary group-hover:scale-110 transition-transform duration-500" />
                                        </button>
                                    </div>
                                </motion.div>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <div className="space-y-6">
                                <h3 className="font-header text-2xl sm:text-3xl text-foreground mb-6">
                                    Contact <span className="text-secondary">Info</span>
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={info.title}
                                            href={info.link}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="group relative p-4 sm:p-6 rounded-xl border border-foreground/10 bg-card/30 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 cursor-pointer"
                                            aria-label={`${info.title}: ${info.value}`}
                                        >
                                            <div className="flex flex-col items-start gap-2 sm:gap-3">
                                                <div className="p-2 sm:p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                                                    <info.icon className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xs sm:text-sm font-mono text-foreground/50 mb-1">
                                                        {info.title}
                                                    </h4>
                                                    <p className="text-sm sm:text-base text-foreground font-mono font-medium group-hover:text-secondary transition-colors">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="space-y-4"
                            >
                                <h3 className="font-header text-xl sm:text-2xl text-foreground">
                                    Follow <span className="text-secondary">Us</span>
                                </h3>
                                <div className="flex gap-3 sm:gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                            className="group p-3 sm:p-4 rounded-xl border border-foreground/10 bg-card/30 backdrop-blur-sm hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 sm:w-6 h-5 sm:h-6 text-foreground/70 group-hover:text-secondary transition-colors" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* 3D Decoration - Hidden on mobile */}
                            {!isMobile && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="relative h-64 rounded-xl overflow-hidden border border-foreground/10 bg-card/30 backdrop-blur-sm"
                                    aria-hidden="true"
                                >
                                    <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
                                        <Suspense fallback={null}>
                                            <ambientLight intensity={0.5} />
                                            <directionalLight position={[5, 5, 5]} intensity={1} />
                                            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                                                <mesh>
                                                    <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />
                                                    <meshStandardMaterial
                                                        color="#134a87"
                                                        metalness={0.8}
                                                        roughness={0.2}
                                                    />
                                                </mesh>
                                            </Float>
                                            <Environment preset="sunset" />
                                            <OrbitControls
                                                enableZoom={false}
                                                enablePan={false}
                                                autoRotate
                                                autoRotateSpeed={2}
                                            />
                                        </Suspense>
                                    </Canvas>
                                </motion.div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="p-4 sm:p-6 rounded-xl border border-secondary/30 bg-secondary/5 backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 rounded-lg bg-secondary/20">
                                        <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-header text-lg sm:text-xl text-foreground mb-2">
                                            Response Time
                                        </h4>
                                        <p className="text-xs sm:text-sm text-foreground/70 font-mono">
                                            I typically respond within 24 hours. For urgent inquiries, feel free to call directly.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative py-12 sm:py-20 px-4 sm:px-6 bg-linear-to-b from-background to-secondary/5">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h2 className="font-header text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                            Frequently Asked <span className="text-secondary">Questions</span>
                        </h2>
                        <p className="text-sm sm:text-base text-foreground/70 font-mono">
                            Answers to common questions about working together
                        </p>
                    </motion.div>

                    <div className="space-y-3 sm:space-y-4">
                        {[
                            {
                                q: "How long does a project typically take?",
                                a: "Most projects take 4-12 weeks depending on scope and complexity. I'll provide a detailed timeline estimate after our initial discussion.",
                            },
                            {
                                q: "Do you work with startups?",
                                a: "Yes. I offer flexible pricing options tailored to different budgets and project stages.",
                            },
                            {
                                q: "What technologies do you work with?",
                                a: "Primarily Next.js, React, TypeScript, and modern web development tools. I choose technologies based on project requirements.",
                            },
                            {
                                q: "Can you help with existing projects?",
                                a: "Absolutely. I can assist with code reviews, performance optimization, bug fixes, or adding new features to existing applications.",
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-4 sm:p-6 rounded-xl border border-foreground/10 bg-card/30 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300"
                            >
                                <h3 className="font-header text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                                    {faq.q}
                                </h3>
                                <p className="text-sm sm:text-base text-foreground/70 font-mono leading-relaxed">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
