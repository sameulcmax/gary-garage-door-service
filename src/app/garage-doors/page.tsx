import { pageMeta } from "@/data/site";
import GarageDoorsPage from "@/components/garage-doors-page-components/GarageDoorsPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/garage-doors", pageMeta["/garage-doors"]);

export default function Page() {
  return <GarageDoorsPage />;
}
