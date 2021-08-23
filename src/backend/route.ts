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
    return !!endpoint.methods.find(x => x.type === method);
  }

  routing = (path: string, method: METHOD_TYPE, res: ServerResponse): void => {
    if(!this.hasRoute(path, method)) {
      console.log(chalk.red(""));
      return;
    }
    const endpoint = this.endpoints.find(x => x.path === path);
    const _method = endpoint?.methods.find(x => x.type === method);
    res.end();
  }
}