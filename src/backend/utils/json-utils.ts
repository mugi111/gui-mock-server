import * as fs from "fs";
import * as path from "path";
import { ConfigJson, Endpoint } from "../../types";

const CONFIG_PATH = path.resolve(__dirname, ".mock", "mockconfig.json");

export const isConfigExist = (): boolean => {
  return fs.existsSync(CONFIG_PATH);
}

export const validation = (): boolean => {
  const buffer = fs.readFileSync(CONFIG_PATH, "utf8");
  const obj: ConfigJson = JSON.parse(buffer);
  if(!obj.endpoints) {
    return false;
  }
  return true;
}

export const readConfig = (): ConfigJson => {
  const buffer = fs.readFileSync(CONFIG_PATH, "utf8");
  const obj: ConfigJson = JSON.parse(buffer);
  return obj;
}

export const readEndpoints = (): Endpoint[] => {
  const obj: ConfigJson = readConfig();
  return obj["endpoints"];
}

export const readPath = (): string[] => {
  const obj: ConfigJson = readConfig();
  const path = obj["endpoints"].map(x => x["path"]);
  return path;
}
