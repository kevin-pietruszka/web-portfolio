import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const [isMounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };
  const isDarkMode = () => {
    return theme === "dark";
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return isMounted ? (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDarkMode()}
        onChange={toggleTheme}
      />
      <div className="w-14 h-8 rounded-full bg-gray-400 relative transition-all duration-700">
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-600 transition-all duration-700 ${
            isDarkMode() ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {isDarkMode() ? (
            <span className="flex items-center justify-center h-full">🌑</span>
          ) : (
            <span className="flex items-center justify-center h-full">☀️</span>
          )}
        </div>
      </div>
    </label>
  ) : (
    <div className="w-14 h-8 rounded-full bg-gray-400 relative transition-all duration-700"></div>
  );
}
