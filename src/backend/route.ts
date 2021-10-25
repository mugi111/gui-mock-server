import chalk from "chalk";
import { ServerResponse } from "http";
import { Endpoint, METHOD_TYPE } from "../types";

export class Route {
  private endpoints: Endpoint[];

  constructor() {
    this.endpoints = new Array(0);
  }

  add = (endpoint: Endpoint): void => {
    // regexp
    this.endpoints.push(endpoint);
  }

  reset = (): void => {
    this.endpoints = new Array(0);
  }

  hasRoute = (path: string, method: METHOD_TYPE): boolean => {
    const endpoint = this.endpoints.find(x => x.path === path);
    if(endpoint === undefined) {
      return false;
    }
    return Object.keys(endpoint.methods).includes(method);
  }

  routing = (path: string, method: METHOD_TYPE, res: ServerResponse): void => {
    if(!this.hasRoute(path, method)) {
      console.log(chalk.red(""));
      return;
    }
    const _path = this.endpoints.find(x => x.path === path);
    if(!_path) {
      return;
    }
    let r = undefined;
    for (const v of Object.values(_path.methods)) {
      r = v.find(x => x.enable);
    }
    if(!r) {
      return;
    }
    res.statusCode = r.code || 500;
    res.end(r.body);
  }
}