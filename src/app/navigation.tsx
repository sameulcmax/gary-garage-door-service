"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

export function useRoute(): string {
  return usePathname() ?? "/";
}

export function Link({
  to,
  children,
  className,
  ariaLabel,
  onNavigate,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onNavigate?: () => void;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    onNavigate?.();
  };

  return (
    <NextLink href={to} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </NextLink>
  );
}
