import { HttpResponse } from '@/presentation/helper';
import { Wallet } from '@/domain/models'

export interface WalletIntegrationProtocol {
  getBalance: (params: Wallet.Request, auth: Wallet.Auth) => Promise<HttpResponse>
}
