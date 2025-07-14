import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<"light" | "dark" | "system">("system");

    React.useEffect(() => {
        // Get theme from localStorage or default to system
        const savedTheme = localStorage.getItem("theme") || "system";
        setThemeState(savedTheme as "light" | "dark" | "system");
    }, []);

    React.useEffect(() => {
        const applyTheme = (currentTheme: string) => {
            const isDark = currentTheme === "dark" || (currentTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
            document.documentElement.classList[isDark ? "add" : "remove"]("dark");
        };

        // Apply theme immediately
        applyTheme(theme);

        // Save to localStorage
        localStorage.setItem("theme", theme);

        // Listen for system theme changes when system is selected
        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = () => applyTheme(theme);

            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [theme]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setThemeState("light")} className={theme === "light" ? "bg-accent" : ""}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeState("dark")} className={theme === "dark" ? "bg-accent" : ""}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeState("system")} className={theme === "system" ? "bg-accent" : ""}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
