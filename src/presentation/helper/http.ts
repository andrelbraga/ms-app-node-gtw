export interface HttpResponse {
  statusCode?: number
  status?: any
  body?: any
  message?: string
  stack?: any
  code?: any
  data?: any
}

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  FORBIDEEN = 403,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
}
