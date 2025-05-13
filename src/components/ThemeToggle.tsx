
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Save theme to local storage
    localStorage.setItem("theme", newTheme);
    
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      variant="ghost"
      className="relative z-20 w-10 h-10 p-0 rounded-full"
    >
      <div className="rounded-full bg-accent dark:bg-accent p-2 flex items-center justify-center">
        {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </div>
    </Button>
  );
};

export default ThemeToggle;
