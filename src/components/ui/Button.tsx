"use client";

import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center
    font-[family-name:var(--font-cormorant)] text-base md:text-lg
    tracking-[0.12em] uppercase
    px-8 py-4 md:px-10 md:py-5
    transition-all duration-500 ease-out
    cursor-pointer
    group
  `;

  const variants = {
    primary: `
      bg-[#1A1A1A] text-[#FAF7F2]
      hover:bg-[#2A2A2A]
      before:absolute before:inset-0
      before:bg-[#C4A35A] before:opacity-0
      before:blur-2xl before:-z-10
      before:transition-opacity before:duration-500
      hover:before:opacity-40
      after:absolute after:inset-0
      after:border after:border-[#1A1A1A]
      after:transition-all after:duration-500
      hover:after:inset-[-4px]
      hover:after:border-[#C4A35A]
    `,
    secondary: `
      bg-transparent text-[#1A1A1A]
      border border-[#1A1A1A]
      hover:bg-[#1A1A1A] hover:text-[#FAF7F2]
    `,
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        <span className="relative z-10 flex items-center gap-3">
          {children}
          <svg
            className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <svg
          className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    </button>
  );
}
