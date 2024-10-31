"use client";
import React from "react";

import { Loader } from "lucide-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

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
    <>
      {mounted ? (
        <div className="flex">
          {darkMode ? (
            <SunIcon onClick={toggle} className="cursor-pointer size-5" />
          ) : (
            <MoonIcon onClick={toggle} className="cursor-pointer size-5" />
          )}
        </div>
      ) : (
        <Loader className="animate-spin size-5" />
      )}
    </>
  );
};
