import { Express } from 'express'
import { adptRouter } from '@/main/adapter'
import { validatorSchema } from '@/main/validators'
import { makeCustomerControllerFactory } from '@/main/factories'
import { authSchema , getCredentials } from '@/main/middlewares'

export default (route: Express): void => {
  const customerController = makeCustomerControllerFactory()
  route.use(validatorSchema(authSchema))
  route.use(getCredentials())
  route.get('/customer/address', adptRouter(customerController.getAddress))
  route.get('/customer/query', adptRouter(customerController.getQuery))
}
