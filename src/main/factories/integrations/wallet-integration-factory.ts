import { WalletIntegration } from '@/integration'

export const makeWalletIntegrationFactory = (baseURL: string): any => {
  return new WalletIntegration({ baseURL })
}
