import { WalletController } from '@/presentation/controllers'
import { makeWalletIntegrationFactory } from '@/main/factories'
import env from '@/main/config/env'

export const makeWalletControllerFactory = (): any => {
  return new WalletController(makeWalletIntegrationFactory(env.walletApiIntegrationUrl))
}
