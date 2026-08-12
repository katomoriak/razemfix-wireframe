"use client";

import React, { useRef } from "react";

interface HexBgWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function HexBgWrapper({ children, className = "" }: HexBgWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const resetMousePosition = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty("--mouse-x", `50%`);
    containerRef.current.style.setProperty("--mouse-y", `50%`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={updateMousePosition}
      onMouseLeave={resetMousePosition}
      className={`relative hex-bg bg-white ${className}`}
    >
      {children}
    </div>
  );
}
