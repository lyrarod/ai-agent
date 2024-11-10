import { Activity } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex py-12 mt-20 border-t bg-muted">
      <div className="container flex flex-col items-center justify-center gap-y-4">
        <div className="flex items-center gap-x-10">
          <span className="flex items-center gap-x-1 drop-shadow text-muted-foreground">
            <Activity className="md:size-8" />
            <strong className="text-xl italic font-extrabold tracking-wider md:text-2xl">
              AI Agent
            </strong>
          </span>
        </div>
        <p className="italic text-muted-foreground">
          &copy; {new Date().getFullYear()} AI Agent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
