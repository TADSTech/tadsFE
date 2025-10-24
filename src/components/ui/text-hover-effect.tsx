"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // Generate unique IDs for this component instance
  const uniqueId = useMemo(() => Math.random().toString(36).substr(2, 9), []);
  const gradientId = `textGradient-${uniqueId}`;
  const maskGradientId = `revealMask-${uniqueId}`;
  const maskId = `textMask-${uniqueId}`;

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#1a6bb8" />
              <stop offset="25%" stopColor="#134a87" />
              <stop offset="50%" stopColor="#2d7ec4" />
              <stop offset="75%" stopColor="#134a87" />
              <stop offset="100%" stopColor="#1a6bb8" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id={maskGradientId}
          gradientUnits="userSpaceOnUse"
          r="25%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40,
            duration: duration ?? 0,
            ease: "easeOut",
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={maskId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${maskGradientId})`}
          />
        </mask>
      </defs>

      {/* Background text layer - visible on hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="fill-transparent stroke-foreground/40 font-[helvetica] font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}
        fontSize="40"
        textLength="280"
        lengthAdjust="spacingAndGlyphs"
      >
        {text}
      </text>

      {/* Animated stroke drawing text */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="fill-transparent stroke-foreground/50 font-[helvetica] font-bold"
        fontSize="40"
        textLength="280"
        lengthAdjust="spacingAndGlyphs"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Main gradient text with mask */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.5"
        mask={`url(#${maskId})`}
        className="fill-transparent font-[helvetica] font-bold"
        fontSize="40"
        textLength="280"
        lengthAdjust="spacingAndGlyphs"
      >
        {text}
      </text>
    </svg>
  );
};