import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceBySlug, servicePageMeta, services, servicePath } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import ServiceDetailPage from "@/components/services-page-components/ServiceDetailPage";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  return pageMetadata(servicePath(slug), servicePageMeta(service));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!serviceBySlug(slug)) notFound();

  return <ServiceDetailPage slug={slug} />;
}
