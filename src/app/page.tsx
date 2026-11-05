import { pageMeta } from "@/data/site";
import HomePage from "@/components/home-page-components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/", pageMeta["/"]);

export default function Page() {
  return <HomePage />;
}
