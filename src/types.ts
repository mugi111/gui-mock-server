export interface ConfigJson {
  endpoints: Endpoint[];
} 

export interface Endpoint {
  path: string;
  methods: Method;
}

type Method = {
  [x in METHOD_TYPE]: Response[];
};

interface Response {
  code: number;
  body: Record<string, unknown>;
  enable: boolean;
}

const METHOD_TYPE = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
} as const;
export type METHOD_TYPE = typeof METHOD_TYPE[keyof typeof METHOD_TYPE];