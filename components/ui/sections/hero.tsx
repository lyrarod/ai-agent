import { Activity, ArrowRight } from "lucide-react";
import { Button } from "../button";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col pt-24 pb-20 md:pt-32">
      <div className="container">
        <div className="relative flex flex-col items-center py-10 space-y-6 md:py-20">
          <Activity className="absolute top-0 md:size-full size-80 -z-10 dark:text-muted/50 text-muted/80" />
          <h1 className="text-6xl font-extrabold text-center md:text-8xl text-primary drop-shadow-md">
            AI Agent
          </h1>
          <h2 className="px-4 text-3xl font-bold text-center md:text-5xl drop-shadow-md">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="px-4 text-sm text-center text-muted-foreground md:text-base drop-shadow gap-x-2">
            <span className="text-xl">🤖</span>
            {` "Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quas, modi."`}
          </p>
          <Button className="w-max" variant={"default"} size={"lg"}>
            <ArrowRight />
            Get Started
          </Button>
        </div>

        <div className="flex items-center justify-center mt-4 overflow-hidden md:mt-10">
          <iframe
            className="md:w-[80%] w-full aspect-video border-2 border-primary rounded-md shadow"
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
