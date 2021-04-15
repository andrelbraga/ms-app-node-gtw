import { AxiosError, AxiosResponse } from 'axios'
export const forbideen = (error: AxiosError<AxiosResponse>): any => ({
  status: error.response.status,
  message: error.message,
  strack: error.stack
})

export const badRequest = (error: TypeError): any => ({
  status: 500,
  message: error.message,
  strack: error.stack
})
