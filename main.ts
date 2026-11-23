// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
//
// The entry is one line of text: a roast of my own AI agent, written to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when that is set).
// The gate requires UTF-8 text of 1 to 200 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my agent for one line. It studied ten winners, hired three subagents, and handed me this sentence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
