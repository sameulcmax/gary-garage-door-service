import type { Metadata } from "next";
import { business, type PageMeta } from "@/data/site";

export function pageMetadata(path: string, meta: PageMeta): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      siteName: business.name,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
