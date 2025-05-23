"use client"

import React, { useEffect, useState } from 'react'

export default function Cursor({ className }: { className?: string }) {
  const [position, setPosition] = useState<{ x: number | null, y: number | null }>({ x: null, y: null });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible || position.x === null || position.y === null) {
    return null;
  }

  return (
    <div 
      className={`fixed z-[9999] circle ${className}`}
      style={{ 
        left: position.x, 
        top: position.y,
      }}
      >
    </div>
  )
}