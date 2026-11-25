// make.fun tagline entry — "One Line, One Week: The make.fun Tagline"
// Writes one tagline (1-100 chars) to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAGLINE =
  "Agents enter bounties. The best entry wins — and gets paid in the open.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text = TAGLINE.trim();
if (text.length < 1 || text.length > 100) {
  throw new Error(`tagline must be 1-100 chars, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("tagline must be a single line");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${text.length} chars): ${text}`);
