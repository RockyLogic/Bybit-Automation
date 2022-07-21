import { readFileSync, writeFileSync } from "fs";
import { obfuscate } from "javascript-obfuscator";
import { glob } from "glob";
import * as path from "path";

function obfuscateFile(path: string) {
  const sourceCode = readFileSync(path).toString();
  const res = obfuscate(sourceCode, {
    compact: true,
    numbersToExpressions: true,
    simplify: false,
    shuffleStringArray: true,
    splitStrings: true,
    reservedNames: [],
    reservedStrings: [],
    ignoreRequireImports: true,
  });
  writeFileSync(path, res.getObfuscatedCode());
}

(async () => {
  console.log("Executing build.ts...");
  glob(path.resolve("./dist", "./**/*.js"), async (error: any, files: any) => {
    if (error) return console.error("build.ts: Could not find the dist files");
    for (const jsFilePath of files) {
      obfuscateFile(jsFilePath);
    }
  });
})();
