import { HttpResponse } from '@/presentation/helper';
import { Auth, Customer } from '@/domain/models'

export interface CustomerControllerProtocol {
  getAddress: (auth: Auth.Request) => Promise<HttpResponse>
  getQuery: (auth: Auth.Request, customer: Customer.Query) => Promise<HttpResponse>
}
