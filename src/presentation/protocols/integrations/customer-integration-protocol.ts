import { HttpResponse } from '@/presentation/helper';
import { Auth, Customer } from '@/domain/models'

export interface CustomerIntegrationProtocol {
  getAddressInt: (auth: Auth.Request) => Promise<HttpResponse>
  getQueryInt: (auth: Auth.Request, customer: Customer.Query) => Promise<HttpResponse>
}
