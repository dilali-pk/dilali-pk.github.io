// Home page. Author: Dilshad Ali.
import FlowPage from "@/components/FlowPage";
import { pages } from "@/lib/flow";

export default function Home() {
  return <FlowPage html={pages.home()} />;
}
