import { Activity, ArrowRight, Check, PlayCircle } from "lucide-react";
import { Button } from "../button";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col py-20">
      <div className="container">
        <div className="relative flex flex-col items-center py-10 space-y-8 md:py-20">
          <Activity className="absolute top-0 md:size-full size-80 -z-10 dark:text-muted/50 text-muted/80" />
          <h1 className="text-6xl font-bold text-center md:text-8xl text-primary drop-shadow-md">
            AI Agent
          </h1>
          <h2 className="px-4 text-3xl font-semibold text-center md:text-5xl drop-shadow-md">
            Lorem ipsum dolor sit amet consectetur.
          </h2>

          <div className="flex flex-col px-0 space-y-2 text-sm lg:text-base max-[359px]:text-xs">
            <p className="flex gap-x-1">
              <Check className="text-emerald-500 max-[359px]:size-4" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p className="flex gap-x-1">
              <Check className="text-emerald-500 max-[359px]:size-4" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
            <p className="flex gap-x-1">
              <Check className="text-emerald-500 max-[359px]:size-4" /> Lorem
              ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row lg:gap-8">
            <Button className="w-full" variant={"default"} size={"lg"}>
              <ArrowRight />
              Get started
            </Button>
            <Button asChild className="w-full" variant={"outline"} size={"lg"}>
              <a href="#demo">
                <PlayCircle />
                Watch demo
              </a>
            </Button>
          </div>
        </div>

        <div
          id="demo"
          className="flex items-center justify-center pt-20 overflow-hidden"
        >
          <iframe
            className="md:w-[80%] w-full aspect-video border rounded-md shadow"
            src="https://www.youtube.com/embed/9HaU8NjH7bI?si=QRtefrU-VG6_Abpy&amp;controls=0"
            title="AI Agent video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
