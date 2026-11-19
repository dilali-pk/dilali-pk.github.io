// Services page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("/services/", "Services", "Fourteen NetSuite services: administration, SuiteScript, custom apps, integrations, SuiteCommerce, data migration, reporting and troubleshooting.");

export default function Page() {
  return <FlowPage html={pages.services()} />;
}
