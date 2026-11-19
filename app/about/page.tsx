// About page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("/about/", "About", "Dilshad Ali, NetSuite solution architect and technical consultant for multi-subsidiary businesses.");

export default function Page() {
  return <FlowPage html={pages.about()} />;
}
