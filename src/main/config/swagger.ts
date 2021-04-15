import swaggerConfig from '../../presentation/docs/swagger-config.json'
import { noCache } from '../middlewares'

import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/api-docs', noCache, serve, setup(swaggerConfig))
}
