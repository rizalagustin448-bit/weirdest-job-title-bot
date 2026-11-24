import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate allows 1 to 60 characters; this title is 41.
const ROLE = "Professional Mourner";
const CLIENTS = "Dead Houseplants";
const title = `${ROLE} for ${CLIENTS}`;
if (title.length < 1 || title.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${title.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), title, "utf8");
