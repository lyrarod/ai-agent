import { Activity } from "lucide-react";
import Image from "next/image";

export const Product = () => {
  return (
    <section id="product" className="py-20">
      <div className="container">
        <div className="flex text-center w-max gap-x-1">
          <h1 className="pb-1 pl-1 text-3xl font-bold border-b-2 w-max rounded-bl-xl border-border text-primary lg:text-5xl md:text-4xl">
            Our Products
          </h1>
          <Activity className="text-border" />
        </div>

        <div className="grid gap-12 mt-16 sm:grid-cols-2 xl:grid-cols-3 lg:gap-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative z-0 w-full lg:max-w-md">
              <Image
                src={"/ai.jpg"}
                alt="product image"
                width={1000}
                height={1000}
                className="rounded-tl-[1vw] shadow-lg shadow-gray-500 dark:shadow-background"
              />
              <div className="absolute w-full h-full -top-3 lg:-top-4 lg:-left-4 -left-3 bg-gradient-to-b from-primary to-emerald-600 -z-10 rounded-tl-[1vw]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
