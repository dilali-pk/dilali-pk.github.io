// Working with me page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("/working-with-me/", "Working with me", "A clear path from the first call to a working solution: discovery, proposal, build in sandbox, testing, go-live and support.");

export default function Page() {
  return <FlowPage html={pages.working()} />;
}
