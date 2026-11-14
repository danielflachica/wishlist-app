import type { Mode } from "./Mode";

export interface ListContext {
  slug: string;
  me: string | null;
  mode: Mode;
}
