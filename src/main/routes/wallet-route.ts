import { makeWalletControllerFactory } from '@/main/factories'
import { Express } from 'express'

import { adptRouter } from '@/main/adapter'
import { authSchema, getCredentials } from '@/main/middlewares'
import { validatorSchema } from '@/main/validators'

export default (route: Express): void => {
  const walletController = makeWalletControllerFactory()
  route.use(validatorSchema(authSchema))
  route.use(getCredentials())
  route.get('/merchant/:document/balance', adptRouter(walletController.getBalance))
}
