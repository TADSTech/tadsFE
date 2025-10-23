"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import MainPage from "./main/page";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);
  const loadingRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const sessionLoaded = sessionStorage.getItem("isLoaded");
    
    if (sessionLoaded === "true") {
      setIsLoaded(true);
      setShowMainPage(true);
      return;
    }

    // Simulate loading time
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      animateTransition();
    }, 3000);

    // Clear session storage after 1 hour
    const clearTimer = setTimeout(() => {
      sessionStorage.setItem("isLoaded", "false");
    }, 3600000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(clearTimer);
    };
  }, []);

  const animateTransition = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("isLoaded", "true");
        setShowMainPage(true);
      }
    });

    // Animate spinner out
    tl.to(spinnerRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    });

    // Animate logo scale up and fade
    tl.to(logoRef.current, {
      scale: 1.3,
      opacity: 0,
      duration: 0.5,
      ease: "back.in(1.7)"
    }, "-=0.2");

    // Animate text out
    tl.to(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    }, "-=0.4");

    // Animate entire loading screen out
    tl.to(loadingRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      ease: "power2.inOut"
    }, "-=0.1");
  };

  return (
    <div className="bg-background">
      {showMainPage ? (
        <MainPage />
      ) : (
        <div 
          ref={loadingRef}
          className="flex flex-col items-center justify-center min-h-screen bg-background"
        >
          <div className="relative flex items-center justify-center">
            <div 
              ref={spinnerRef}
              className="absolute"
            >
              <div className="w-64 h-64 border-4 border-secondary/20 rounded-full"></div>
              <div className="absolute top-0 left-0 w-64 h-64 border-4 border-transparent border-t-secondary rounded-full animate-spin"></div>
            </div>
            
            <div 
              ref={logoRef}
              className="relative w-48 h-48 rounded-full overflow-hidden"
            >
              <Image
                src="/logo/tadsfelogos-black.png"
                alt="Loading..."
                width={192}
                height={192}
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <h1 
            ref={textRef}
            className="text-2xl font-bold mt-12 text-foreground"
          >
            Loading, please wait...
          </h1>
        </div>
      )}
    </div>
  );
}
