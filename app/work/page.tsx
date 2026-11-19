// Work page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("/work/", "Work", "Four NetSuite cases played out step by step: a commission engine, marketplace duplicates, AI receiving and 77 orders at midnight.");

export default function Page() {
  return <FlowPage html={pages.work()} />;
}
