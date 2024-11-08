import { Activity, Atom, Bot, Database, HeartHandshake } from "lucide-react";

export const PlansBanner = () => {
  return (
    <section id="feature-banner" className="flex items-center bg-muted h-28">
      <div className="container flex flex-wrap justify-center lg:gap-x-14 gap-x-4 text-muted-foreground gap-y-1">
        <h1 className="flex items-center text-2xl font-semibold md:text-4xl lg:text-5xl">
          Our Plans
        </h1>
        <div className="flex items-center lg:gap-x-14 gap-x-6">
          <Activity className="lg:size-12 size-7" />
          <Atom className="lg:size-12 size-7" />
          <Database className="lg:size-12 size-7" />
          <Bot className="lg:size-12 size-7" />
          <HeartHandshake className="lg:size-12 size-7" />
        </div>
      </div>
    </section>
  );
};
