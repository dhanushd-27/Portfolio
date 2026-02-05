"use client";

import { useTheme } from "next-themes";
import IconButton from "@/components/common/icon-button";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

export function ThemeHandler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const toggleTheme = () => {
    const isDark = theme === "dark";

    // Check if the browser supports the View Transition API
    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    // Smoothly transition between themes
    document.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });
  };

  return (
    <IconButton
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      Icon={theme === "dark" ? FiSun : FiMoon}
      className="rounded-full"
    />
  );
}
