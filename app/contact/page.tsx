// Contact page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("/contact/", "Contact", "Tell me what you need in NetSuite. From a one-line fix to a full implementation.");

export default function Page() {
  return <FlowPage html={pages.contact()} />;
}
