"use client";
import React from "react";

import { Activity, Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const links = [
  { target: "#", label: "home" },
  { target: "#about", label: "about us" },
  { target: "#services", label: "services" },
  { target: "#pricing", label: "pricing" },
  { target: "#contact", label: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((state) => !state);

  return (
    <header className="fixed top-0 z-50 w-full shadow dark:border-b bg-background/70 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-x-10">
          <a href="#" className="flex items-center gap-x-1 drop-shadow">
            <Activity className="md:size-8 text-primary" />
            <strong className="text-xl italic font-extrabold tracking-wider md:text-2xl">
              AI Agent
            </strong>
          </a>
        </div>

        <ul className="hidden md:flex gap-x-6">
          {links.map(({ target, label }, i) => {
            return (
              <li key={i} className="">
                {label !== "contact" && label !== "home" ? (
                  <a
                    href={target}
                    className="flex text-sm font-medium tracking-widest capitalize hover:text-primary"
                  >
                    {label}
                  </a>
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <Button className="hidden md:flex" asChild>
            <a href="#contact">Contact</a>
          </Button>

          <div className="relative flex md:hidden">
            <Button onClick={toggle} variant={"outline"} size={"icon"}>
              {!isOpen ? <Menu /> : <X />}
            </Button>

            <ul
              className={cn(
                `absolute right-1/2 flex flex-col items-center p-12 z-50 bg-card md:hidden gap-x-6 border duration-300 shadow rounded-full rounded-tr-none top-10 origin-top-right space-y-2 w-max`,
                isOpen
                  ? `visible scale-100 opacity-100`
                  : `invisible scale-0 opacity-0`
              )}
            >
              {links.map(({ target, label }, i) => {
                return (
                  <li onClick={toggle} key={i} className="flex items-center ">
                    <a
                      href={target}
                      className="text-sm font-medium tracking-wider capitalize hover:text-primary"
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
