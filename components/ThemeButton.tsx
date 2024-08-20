"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa6";
import { GrStatusPlaceholder } from "react-icons/gr";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button disabled>
        <GrStatusPlaceholder size="1.5rem" />
      </button>
    );
  }

  return (
    <button onClick={changeTheme}>
      {theme === "light" ? (
        <FaMoon size={"1.5rem"} />
      ) : (
        <FaSun size={"1.5rem"} />
      )}
    </button>
  );
}
