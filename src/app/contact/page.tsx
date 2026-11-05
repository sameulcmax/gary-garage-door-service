import { pageMeta } from "@/data/site";
import ContactPage from "@/components/contact-page-components/ContactPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/contact", pageMeta["/contact"]);

export default function Page() {
  return <ContactPage />;
}
