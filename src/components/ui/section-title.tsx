"use client";
import React, { useState, useEffect } from "react";
import { TextHoverEffect } from "./text-hover-effect";

interface SectionTitleProps {
    text: string;
    duration?: number;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text, duration = 2 }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        // Reset error state when text changes
        setHasError(false);
    }, [text]);

    // Error boundary fallback
    if (hasError) {
        return (
            <div className="h-32 sm:h-40 md:h-48 flex items-center justify-center mb-8 sm:mb-12">
                <h2 className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight">
                    {text}
                </h2>
            </div>
        );
    }

    return (
        <div className="h-32 sm:h-40 md:h-48 flex items-center justify-center mb-8 sm:mb-12">
            <ErrorBoundary fallback={
                <h2 className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight">
                    {text}
                </h2>
            }>
                <TextHoverEffect text={text} duration={duration} />
            </ErrorBoundary>
        </div>
    );
};

// Simple error boundary for the TextHoverEffect
class ErrorBoundary extends React.Component<
    { children: React.ReactNode; fallback: React.ReactNode },
    { hasError: boolean }
> {
    constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('TextHoverEffect failed to render:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}
