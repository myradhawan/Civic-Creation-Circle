import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "md" | "lg";
  showArrow?: boolean;
  external?: boolean;
};

const variants = {
  primary:
    "bg-royal-500 text-white hover:bg-royal-600 shadow-[0_8px_30px_-8px_rgba(52,87,245,0.65)]",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800",
  ghost:
    "bg-transparent text-navy-900 border border-navy-900/15 hover:border-navy-900/40 hover:bg-navy-900/[0.03]",
  light:
    "bg-white text-navy-900 hover:bg-lavender-100",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  showArrow = false,
  external = false,
}: ButtonBaseProps & { href: string }) {
  const classes = cn(
    "group inline-flex items-center gap-1.5 rounded-full font-medium tracking-tight transition-all duration-300 ease-out",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.25}
        />
      )}
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
