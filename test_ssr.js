import fs from 'fs';
import { compile } from 'svelte/compiler';

const code = fs.readFileSync('c:/Users/shiva/OneDrive/Desktop/portfolio-release/src/lib/components/TechConstellation.svelte', 'utf-8');

try {
  const result = compile(code, {
    generate: 'ssr',
    hydratable: true
  });
  console.log("Compile Success!");
  fs.writeFileSync('c:/Users/shiva/OneDrive/Desktop/portfolio-release/tmp_compiled.js', result.js.code);
  console.log("Wrote compiled output to tmp_compiled.js");
} catch (err) {
  console.error("Compile Error:", err);
}
