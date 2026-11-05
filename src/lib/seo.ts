import { useEffect } from "react";
export function useFaqSchema(items: { q: string; a: string }[], id: string) {
  useEffect(() => {
    const scriptId = `faq-schema-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [items, id]);
}
