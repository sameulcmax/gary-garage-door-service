import { useEffect, useState, type ReactNode, type MouseEvent } from "react";

function normalize(raw: string): string {
  const withoutHash = raw.replace(/^#/, "").split("?")[0];
  if (!withoutHash) return "/";
  const path = withoutHash.startsWith("/") ? withoutHash : `/${withoutHash}`;
  const trimmed = path.replace(/\/+$/, "");
  return trimmed || "/";
}

export function readPath(): string {
  const raw = window.location.hash;
  // In-page anchors (e.g. #main) are not routes.
  if (raw && !raw.startsWith("#/")) return "/";
  return normalize(raw);
}

export function useRoute(): string {
  const [path, setPath] = useState<string>(() => readPath());

  useEffect(() => {
    const onChange = () => setPath(readPath());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return path;
}

export function navigate(to: string) {
  const target = to.startsWith("/") ? to : `/${to}`;
  if (readPath() === normalize(target)) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = target;
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
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(to);
    onNavigate?.();
  };

  return (
    <a href={`#${to}`} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
}

export function useScrollReset(path: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [path]);
}
