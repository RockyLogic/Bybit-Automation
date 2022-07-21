import { readFileSync } from "fs";

export const getConfig = () => {
  const config = JSON.parse(
    readFileSync(`${process.cwd()}\\..\\config.json`).toString()
  );
  return config;
};
