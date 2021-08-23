import http, {IncomingMessage, ServerResponse} from 'http';
import { initRoute } from './backend/init-route';
import { METHOD_TYPE } from './types';

export const start = (port: number): void => {
  const route = initRoute();
  const s = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const path = new URL(req.url || '').pathname;
    console.log(path);
    route?.hasRoute(path, req.method as METHOD_TYPE);
    route?.routing(path, req.method as METHOD_TYPE, res);
  })

  s.listen(port ?? 8080);
}
