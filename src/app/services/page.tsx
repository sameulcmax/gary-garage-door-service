import { pageMeta } from "@/data/site";
import ServicesPage from "@/components/services-page-components/ServicesPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/services", pageMeta["/services"]);

export default function Page() {
  return <ServicesPage />;
}
