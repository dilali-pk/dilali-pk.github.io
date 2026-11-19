// Capabilities page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("/capabilities/", "Capabilities", "Architecture, NetSuite areas, finance modules and the systems I connect to NetSuite, from storefronts to Microsoft 365.");

export default function Page() {
  return <FlowPage html={pages.capabilities()} />;
}
