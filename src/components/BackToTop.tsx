import { useEffect, useState } from "react";
import { ArrowUp } from "@/components/Icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-36 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-red text-white shadow-lg transition-colors hover:bg-red-dark focus-visible:outline-offset-4 lg:bottom-20 lg:right-6"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={19} />
    </button>
  );
}
