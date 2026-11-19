// Skills page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("/skills/", "Skills", "The full NetSuite toolkit: platform, SuiteScript, SuiteQL, SuiteCommerce, front end, back end, DevOps and business processes.");

export default function Page() {
  return <FlowPage html={pages.skills()} />;
}
