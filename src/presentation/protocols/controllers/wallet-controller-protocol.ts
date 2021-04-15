import { HttpResponse } from '@/presentation/helper';
import { Wallet } from '@/domain/models'

export interface WalletControllerProtocol {
  getBalance: (auth: Wallet.Auth, params: Wallet.Request) => Promise<HttpResponse>
}
