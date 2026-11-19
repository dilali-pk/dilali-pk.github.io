// Per page metadata helper. Author: Dilshad Ali.
import type { Metadata } from "next";

export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { url: path, title: title + " | Dilshad Ali", description, images: ["/og.png"] },
  };
}
