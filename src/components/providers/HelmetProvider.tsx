"use client";
import React from "react";
import { HelmetProvider as ReactHelmetProvider } from "react-helmet-async";

export function HelmetProvider({ children }: { children: React.ReactNode }) {
    return <ReactHelmetProvider>{children}</ReactHelmetProvider>;
}
