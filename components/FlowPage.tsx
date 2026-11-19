"use client";
// Renders one page's static HTML and starts its animations once it is on screen.
// Author: Dilshad Ali.
import { useEffect, useRef } from "react";
import { boot } from "@/lib/flow";

export default function FlowPage({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const stop = boot();
    return () => {
      stop();
      // Fresh markup so a second start never binds handlers twice.
      el.innerHTML = html;
    };
  }, [html]);

  return <div ref={ref} className="pagefade" dangerouslySetInnerHTML={{ __html: html }} />;
}
