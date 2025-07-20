"use client";

import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️'; // Sun emoji for light mode
      case 'dark':
        return '🌙'; // Moon emoji for dark mode
      case 'system':
        return '🔄'; // Refresh emoji for system mode
      default:
        return '🌟'; // Star emoji as fallback
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
      default:
        return 'Theme';
    }
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center space-x-2 px-3 py-2 rounded-full">
        <span className="text-lg">🌟</span>
        <span className="hidden sm:inline">Theme</span>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-200 cursor-pointer hover:cursor-pointer"
        title={`Current theme: ${getThemeLabel()}. Click to cycle through themes.`}
      >
        <span className="text-lg">{getThemeIcon()}</span>
        <span className="hidden sm:inline">{getThemeLabel()}</span>
      </Button>
    </motion.div>
  );
}
