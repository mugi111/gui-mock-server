import http, {IncomingMessage, ServerResponse} from 'http'
import url from 'url';

export const start = (port: number): void =>{
const s = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const path = url.parse(req.url || '').pathname;
  console.log(path);
})

s.listen(port??8080);
}