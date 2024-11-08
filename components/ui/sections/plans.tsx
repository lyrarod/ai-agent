import { Activity, Check } from "lucide-react";
import { Button } from "../button";

export const Plans = () => {
  return (
    <section id="plans" className="flex py-20">
      <div className="container">
        <div className="flex text-center w-max gap-x-1">
          <h1 className="pb-1 pl-1 text-3xl font-bold border-b-2 w-max rounded-bl-xl border-border text-primary lg:text-5xl md:text-4xl">
            Our Plans
          </h1>
          <Activity className="text-border" />
        </div>

        <div className="grid gap-12 mt-16 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, i) => {
            return (
              <div
                key={i}
                className="flex flex-col px-8 py-12 space-y-8 border rounded-md shadow-md"
              >
                <p className="px-4 py-1 font-medium rounded-md shadow xl:text-xl bg-muted w-max">
                  {plan.title}
                </p>
                <strong className="text-4xl xl:text-5xl">{`$${plan.price}`}</strong>

                <ul className="flex flex-col gap-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-x-1">
                      <Check className="text-emerald-500" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={"default"} size={"lg"}>
                  Get started
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const plans = [
  {
    title: "Basic",
    price: 9,
    features: [
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
    ],
  },
  {
    title: "PRO",
    price: 25,
    features: [
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
    ],
  },
  {
    title: "Enterprise",
    price: 99,
    features: [
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
    ],
  },
];
