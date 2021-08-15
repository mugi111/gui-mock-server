import http, {IncomingMessage, ServerResponse} from 'http'
import router from './backend/route';

export const start = (port: number): void =>{
const s = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const path = new URL(req.url||'').pathname;
  console.log(path);
})

s.listen(port??8080);
}