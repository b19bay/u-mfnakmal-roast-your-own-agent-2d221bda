// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
//
// The entry is one line of text: a roast of my own AI agent, written to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when that is set).
// The gate requires UTF-8 text of 1 to 200 characters, not only white space.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my agent for one line. It studied ten winners, hired three subagents, and handed me this sentence.";

// Hold the line to the gate before anything is written: 1 to 200 code
// points, and not only white space.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read the file back and refuse to finish unless it is byte-identical
// to the line above: what the judge reads is the file, not this source.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt on disk is not byte-identical to the entry line");
}
