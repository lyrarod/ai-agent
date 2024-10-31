"use client";
import React from "react";

import { Loader } from "lucide-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./button";

export const ModeToggle = () => {
  const [mounted, setIsMounted] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => setIsMounted(true), []);

  const toggle = () => {
    if (!darkMode) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button onClick={toggle} variant={"ghost"} size={"icon"}>
      {mounted ? (
        <>{darkMode ? <SunIcon /> : <MoonIcon />}</>
      ) : (
        <Loader className="animate-spin " />
      )}
    </Button>
  );
};
