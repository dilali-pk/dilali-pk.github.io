// Types for lib/flow.js. Author: Dilshad Ali.
import type { Case } from "../content/site";

type PageBuilder = () => string;

export declare const pages: {
  home: PageBuilder;
  services: PageBuilder;
  capabilities: PageBuilder;
  work: PageBuilder;
  case: (slug: string) => string;
  agencies: PageBuilder;
  insights: PageBuilder;
  about: PageBuilder;
  working: PageBuilder;
  skills: PageBuilder;
  contact: PageBuilder;
};

export declare function caseBySlug(slug: string): Case | undefined;

/** Starts every widget on the current page and returns a cleanup function. */
export declare function boot(): () => void;
