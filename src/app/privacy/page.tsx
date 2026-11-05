import { pageMeta } from "@/data/site";
import PrivacyPage from "@/components/privacy-page-components/PrivacyPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/privacy", pageMeta["/privacy"]);

export default function Page() {
  return <PrivacyPage />;
}
