import { HttpResponse } from '@/presentation/helper'
import { HttpClient } from '@/infra/http'
import { WalletIntegrationProtocol } from '@/presentation/protocols'
import { Wallet } from '@/domain/models'

export class WalletIntegration extends HttpClient implements WalletIntegrationProtocol {
  constructor ({ baseURL }: { baseURL: string }) {
    super({ baseURL: baseURL })
  }

  async getBalance (params: Wallet.Request, auth: Wallet.Auth): Promise<HttpResponse> {
    const { document } = params
    return await this.httpClient.request({
      url: '/balance',
      method: 'get',
      headers: {
        token: `Bearer ${auth.userToken}`,
        'user-identifier': `${document}`,
        authorization: `${auth.authToken}`
      }
    })
  }
}
