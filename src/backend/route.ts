export class Route {
  private path: string[];

  constructor() {
    this.path = new Array(0);
  }

  add = (path: string): void => {
    // regexp
    this.path.push(path);
  }

  reset = (): void => {
    this.path = new Array(0);
  }

  judge = (path: string): boolean => {
    return this.path.includes(path);
  }
}