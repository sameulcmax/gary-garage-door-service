import { pageMeta } from "@/data/site";
import FAQPage from "@/components/faq-page-components/FAQPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/faq", pageMeta["/faq"]);

export default function Page() {
  return <FAQPage />;
}
