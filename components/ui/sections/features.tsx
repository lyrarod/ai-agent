import { cn } from "@/lib/utils";
import { Activity, Check } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="flex flex-col min-h-screen py-20">
      <div className="container text-wrap">
        <div className="flex text-center w-max gap-x-1">
          <h1 className="pb-1 pl-1 text-3xl font-bold border-b-2 w-max rounded-bl-xl border-border text-primary lg:text-5xl md:text-4xl">
            Key Features
          </h1>
          <Activity className="text-border" />
        </div>

        <div className="grid grid-cols-1 gap-12 mt-16 lg:grid-cols-3 md:grid-cols-2">
          {features.map((feature, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center px-4 py-8 space-y-6 text-sm text-center border rounded-md shadow-md bg-card xl:text-base border-t-primary border-l-primary border-r-teal-500 border-b-teal-500"
              >
                <i
                  className={cn(
                    feature.icon,
                    `text-3xl xl:text-4xl text-primary`
                  )}
                ></i>
                <p className="text-muted-foreground">{feature.description}</p>

                <ul>
                  {feature.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-x-1">
                      <Check className="size-4 xl:size-6 text-emerald-600" />
                      <li key={i}>{item}</li>
                    </div>
                  ))}
                </ul>
                <p className="">{feature.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
    items: [
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
    ],
  },
  {
    icon: "fa-solid fa-gear",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
    items: [
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
    ],
  },
  {
    icon: "fa-solid fa-code",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
    items: [
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
    ],
  },
  {
    icon: "fa-solid fa-sliders",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
    items: [
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
    ],
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
    items: [
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
    ],
  },
  {
    icon: "fa-solid fa-robot",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur.",
    items: [
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
      "Lorem ipsum dolor.",
    ],
  },
];
