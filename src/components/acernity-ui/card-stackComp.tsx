"use client";
import { CardStack } from "../acernity-ui/card-stack";
import { cn } from "../../utils/cn";
export function CardStackDemo() {
  return (
    <div className="h-[20rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "John D.",
    designation: "Rating: ★★★★★",
    content: (
      <p>
        "Pulse Gadgets has been my go-to for all things tech.
        The quality of their products is top-notch, and the customer service is unparalleled.<Highlight>I recently bought a new laptop, and the team helped me choose the perfect one for my needs. </Highlight> 
         Highly recommend!🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Sarah M.",
    designation: "Rating: ★★★★★",
    content: (
      <p>
        "I love shopping at Pulse Gadgets! They always have the latest gadgets at great prices. The delivery is fast, and the packaging is secure. I recently purchased a
        <Highlight>smartwatch and a pair of wireless earbuds,</Highlight>  and both are fantastic.<Highlight> I'll definitely be back for more!"</Highlight> 
      </p>
    ),
  },
  {
    id: 2,
    name: "Alex P.",
    designation: "Rating: ★★★★★",
    content: (
      <p>
        The best place to find cutting-edge technology! Pulse Gadgets has a fantastic selection and their staff are extremely knowledgeable. They answered all my questions and helped me pick out the perfect drone for my outdoor adventures.
        <Highlight>Five stars all the way!</Highlight>
      </p>
    ),
  },
];
