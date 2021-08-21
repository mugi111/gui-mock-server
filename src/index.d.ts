interface ConfigJson {
  endpoints: Endpoint[];
} 

interface Endpoint {
  path: string;
  methods: Method[];
}

interface Method {
  type: METHOD_TYPE;
  param: string[];
  query: string[];
  body: Record<string, unknown>;
  responses: Response[];
}

interface Response {
  code: string;
  body: Record<string, unknown>;
}

const METHOD_TYPE = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
} as const;
type METHOD_TYPE = typeof METHOD_TYPE[keyof typeof METHOD_TYPE];