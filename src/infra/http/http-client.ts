import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'

import { AxiosLogger } from '@/infra/logger'

export abstract class HttpClient {
  protected httpClient: AxiosInstance

  constructor (options: AxiosRequestConfig) {
    this.httpClient = axios.create(options);
    AxiosLogger.attachInterceptor.bind(AxiosLogger)(this.httpClient)
  }
}
