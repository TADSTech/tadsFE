"use client";
import React, { JSX, useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/dist/client/link";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ============================================================
  // SMOOTH SCROLL HANDLER
  // UX: Smooth navigation for better user experience
  // ============================================================
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          hideTimeoutRef.current = setTimeout(() => {
            setVisible(false);
          }, 1000);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:max-w-3xl lg:max-w-4xl fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/20 rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-5000 pr-4 md:pr-6 pl-4 md:pl-10 py-3 md:py-4 items-center justify-center space-x-4 md:space-x-8",
          className
        )}
      >
        <a 
          href="#" 
          onClick={(e) => handleSmoothScroll(e, '#hero')}
          className="flex items-center space-x-2 mr-8 md:mr-50 pr-10 md:pr-16 border-r border-neutral-200 dark:border-white/20"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
            <Image
              src="/logo/tadsfelogos-black.png"
              alt="TADS-FE Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <span className="hidden sm:block font-header text-sm md:text-base font-bold ">TADS-FE</span>
        </a>
        
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleSmoothScroll(e, navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors regular-hover"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm md:text-base">{navItem.name}</span>
          </a>
        ))}
        <Link href="/contact" className="ml-auto">
              <button className="border text-sm md:text-base font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-colors glow-on-hover">
                <span>Contact</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-linear-to-r from-transparent via-blue-500 to-transparent  h-px" />
              </button>
        </Link>
        
      </motion.div>
    </AnimatePresence>
  );
};
