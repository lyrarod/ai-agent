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
          {products.map((product, i) => (
            <div key={i} className="relative z-0 w-full lg:max-w-md">
              <Image
                src={product.image}
                alt="product image"
                width={1000}
                height={1000}
                className="rounded-tl-[1vw] shadow-md shadow-gray-500 dark:shadow-background h-full max-h-80 object-cover"
              />
              <div className="absolute w-full h-full -top-3 lg:-top-4 lg:-left-4 -left-3 bg-gradient-to-b from-primary to-emerald-600 -z-10 rounded-tl-[1vw]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const products = [
  {
    image: "/ai.jpg",
  },
  {
    image: "/ai5.png",
  },
  {
    image: "/ai1.avif",
  },
  {
    image: "/ai2.avif",
  },
  {
    image: "/ai4.avif",
  },
  {
    image: "/ai3.avif",
  },
];
