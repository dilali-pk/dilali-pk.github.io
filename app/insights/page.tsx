// Insights page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("/insights/", "Insights", "Short, practical notes from real NetSuite accounts on the things that quietly break.");

export default function Page() {
  return <FlowPage html={pages.insights()} />;
}
