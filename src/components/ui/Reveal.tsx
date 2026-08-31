import type { ReactNode } from "react";
import { useInViewport } from "@/hooks/useInViewport";

interface RevealProps {
  children: ReactNode;
  /** Transition delay in milliseconds, staggers sibling reveals. */
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, isVisible } = useInViewport<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[780ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
