"use client";

import { Button } from "../button";
import { Input } from "../input";
import { Mail, Mails } from "lucide-react";

export const Newsletter = () => {
  return (
    <section id="newsletter" className="flex items-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center px-4 py-12 rounded-md shadow bg-gradient-to-r from-primary to-emerald-700 gap-x-4 gap-y-2 xl:flex-row">
          <Mails className="xl:size-12 size-8 text-background" />
          <h1 className="flex items-center text-xl font-semibold md:text-2xl lg:text-3xl w-max text-nowrap text-background gap-x-2">
            Subscribe to Newsletter
          </h1>
          <form
            className="relative flex w-full max-w-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              placeholder="Your E-mail"
              type="email"
              required
              className=""
            />
            <Button
              variant={"outline"}
              size={"default"}
              className="absolute right-0 rounded-l-none"
            >
              <Mail />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
