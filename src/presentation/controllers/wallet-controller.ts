import { WalletIntegrationProtocol , WalletControllerProtocol } from '@/presentation/protocols'

import { Wallet } from '@/domain/models'
import { HttpResponse } from '../helper'

export class WalletController implements WalletControllerProtocol {
  constructor (
    private readonly walletIntegrationProtocol: WalletIntegrationProtocol
  ) {}

  getBalance = async (locals: Wallet.Auth, request: Wallet.Request): Promise<HttpResponse> => {
    return await this.walletIntegrationProtocol.getBalance(request, locals)
  }
}
