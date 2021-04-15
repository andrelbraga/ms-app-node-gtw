import { HttpResponse } from '@/presentation/helper'
import { CustomerIntegrationProtocol, CustomerControllerProtocol } from '@/presentation/protocols'
import { Auth, Customer } from '@/domain/models'

export class CustomerController implements CustomerControllerProtocol {
  constructor (
    private readonly customerIntegration: CustomerIntegrationProtocol
  ) {}

  getQuery = async (auth: Auth.Request, customer: Customer.Query): Promise<HttpResponse> => {
    return await this.customerIntegration.getQueryInt(auth, customer)
  }

  getAddress = async (auth: Auth.Request): Promise<HttpResponse> => {
    return await this.customerIntegration.getAddressInt(auth)
  }
}
