import { AxiosError } from 'axios'
import { Auth, Customer } from '@/domain/models'
import { HttpClient } from '@/infra/http/http-client'
import { CustomerIntegrationProtocol } from '@/presentation/protocols/integrations'
import { HttpResponse, badRequest, forbideen } from '@/presentation/helper'

export class CustomerIntegration extends HttpClient implements CustomerIntegrationProtocol {
  constructor ({ baseURL }: { baseURL: string }) {
    super({ baseURL: baseURL })
  }

  getQueryInt = async ({ authorization }: Auth.Request, customer: Customer.Query): Promise<HttpResponse> => {
    try {
      return await this.httpClient.request({
        url: '/query',
        method: 'get',
        headers: {
          Authorization: authorization
        },
        params: {
          ...customer
        }
      })
        .then(res => res)
        .catch((error: AxiosError) => {
          return forbideen(error)
        })
    } catch (error) {
      if (error instanceof TypeError) {
        return badRequest(error)
      }
      return error
    }
  }

  async getAddressInt (auth: Auth.Request): Promise<HttpResponse> {
    try {
      return await this.httpClient.request({
        url: '/address',
        method: 'get',
        headers: {
          authorization: `${auth.authorization}`,
          'user-info': `${auth.userInfo}`
        }
      })
        .then(res => res)
        .catch((error: AxiosError) => {
          return forbideen(error)
        })
    } catch (error) {
      if (error instanceof TypeError) {
        return badRequest(error)
      }
    }
  }
}
