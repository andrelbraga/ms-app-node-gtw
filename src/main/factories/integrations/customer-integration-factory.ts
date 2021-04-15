import { CustomerIntegration } from '@/integration'
export const makeCustomerIntegrationFactory = (baseURL: string): any => {
  return new CustomerIntegration({ baseURL })
}
