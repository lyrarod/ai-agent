import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";
import Image from "next/image";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full py-20 overflow-hidden"
    >
      <div className="container">
        <div className="flex text-center w-max gap-x-1">
          <h1 className="pb-1 pl-1 text-3xl font-bold border-b-2 w-max rounded-bl-xl border-border text-primary lg:text-5xl md:text-4xl">
            Contact Us
          </h1>
          <Activity className="text-border" />
        </div>

        <div className="flex flex-col w-full mt-10 lg:flex-row lg:items-center">
          <div className="flex flex-col space-y-6 basis-1/2 lg:pr-4">
            <strong className="text-primary lg:text-lg">Get in Touch</strong>

            <div className="flex items-center gap-x-3">
              <i className="fa-solid fa-location-dot text-primary"></i>{" "}
              <span className="text-sm lg:text-base">
                Rio de Janeiro, Brazil
              </span>
            </div>

            <div className="flex items-center gap-x-3">
              <i className="fa-solid fa-envelope text-primary"></i>
              <span className="text-sm lg:text-base">info@email.com</span>
            </div>

            <div className="flex items-center gap-x-3">
              <i className="fa-solid fa-phone text-primary"></i>
              <span className="text-sm lg:text-base">+55 21 33333-3333</span>
            </div>

            <div className="h-[1px] w-full bg-border"></div>

            <strong className="text-primary lg:text-lg">Connect With Us</strong>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: "fa-brands fa-whatsapp", profile: "whatsapp" },
                { icon: "fa-brands fa-facebook-f", profile: "facebook" },
                { icon: "fa-brands fa-x-twitter", profile: "twitter" },
                { icon: "fa-brands fa-instagram", profile: "instagram" },
              ].map(({ icon, profile }, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-6 space-y-2 transition border rounded-md shadow-md hover:shadow-lg border-primary bg-card"
                  >
                    <span className="text-primary">
                      <i className={cn(icon, `lg:text-3xl text-2xl`)}></i>
                    </span>
                    <p className="text-sm capitalize lg:text-base">{profile}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end mt-12 basis-1/2 lg:mt-0">
            <div className="relative z-0 w-full h-full lg:max-w-lg">
              <Image
                src="/contact.jpeg"
                alt="Beautiful image"
                width={1000}
                height={1000}
                className="transition shadow-lg shadow-gray-400 dark:shadow-none"
              />
              <div className="absolute w-full h-full -right-4 -top-4 -z-10 bg-gradient-to-b from-primary to-emerald-500 lg:-right-6 lg:-top-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
