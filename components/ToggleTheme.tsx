"use client";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      role="button"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      aria-label="toggle theme button"
      className="cursor-pointer items-center flex justify-center"
    >
      <Tooltip>
        <TooltipTrigger>{theme === "dark" ? <Moon /> : <Sun />}</TooltipTrigger>
        <TooltipContent>
          <p>{theme === "dark" ? "Sombre" : "Claire"}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ToggleTheme;
