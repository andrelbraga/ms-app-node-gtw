import { CustomerController } from '@/presentation/controllers'
import { makeCustomerIntegrationFactory } from '@/main/factories'
import env from '@/main/config/env'
import { CustomerControllerProtocol } from '@/presentation/protocols/controllers'

export const makeCustomerControllerFactory = (): CustomerControllerProtocol => {
  return new CustomerController(makeCustomerIntegrationFactory(env.customerApiIntegrationUrl))
}
