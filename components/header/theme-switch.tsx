import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded"
      suppressHydrationWarning
    >
      {currentTheme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
