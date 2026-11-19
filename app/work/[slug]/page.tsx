// Case study pages, one per case in content/site.ts. Author: Dilshad Ali.
import { notFound } from "next/navigation";
import FlowPage from "@/components/FlowPage";
import { site } from "@/content/site";
import { caseBySlug, pages } from "@/lib/flow";
import { pageMeta } from "@/lib/meta";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return site.cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = caseBySlug(slug);
  return c ? pageMeta("/work/" + c.slug + "/", c.title, c.hook) : {};
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  if (!caseBySlug(slug)) notFound();
  return <FlowPage html={pages.case(slug)} />;
}
