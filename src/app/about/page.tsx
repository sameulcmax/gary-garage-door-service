import { pageMeta } from "@/data/site";
import AboutPage from "@/components/about-page-components/AboutPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/about", pageMeta["/about"]);

export default function Page() {
  return <AboutPage />;
}
