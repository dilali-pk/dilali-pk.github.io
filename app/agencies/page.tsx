// Agencies and NetSuite partners page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("/agencies/", "Agencies and NetSuite partners", "White label NetSuite delivery for agencies and partners. NDA first, your tools, your name on the work, and the client stays yours.");

export default function Page() {
  return <FlowPage html={pages.agencies()} />;
}
