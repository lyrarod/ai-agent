import { Activity, Atom, Bot, Database, HeartHandshake } from "lucide-react";

export const FeaturesBanner = () => {
  return (
    <section id="feature-banner" className="bg-muted">
      <div className="container flex flex-wrap items-center justify-center py-8 gap-x-14 gap-y-4 text-muted-foreground">
        <div className="flex items-center gap-x-2">
          <h1 className="flex items-center text-3xl font-bold md:text-4xl lg:text-5xl w-max gap-x-4">
            Best Features
          </h1>
        </div>
        <div className="flex lg:gap-x-14 gap-x-8">
          <Activity className="lg:size-16 size-8" />
          <Atom className="lg:size-16 size-8" />
          <Database className="lg:size-16 size-8" />
          <Bot className="lg:size-16 size-8" />
          <HeartHandshake className="lg:size-16 size-8" />
        </div>
      </div>
    </section>
  );
};
