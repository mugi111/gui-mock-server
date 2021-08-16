import http, {IncomingMessage, ServerResponse} from 'http'
import { Route } from './backend/route';

export const start = (port: number): void => {
  const route = initRoute();
  const s = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const path = new URL(req.url || '').pathname;
    console.log(path);
    route.judge(path);
  })

  s.listen(port ?? 8080);
}

export const initRoute = (): Route => {
  const route = new Route();
  return route;
}