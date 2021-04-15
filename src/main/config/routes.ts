import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'
import env from './env'

export default (app: Express): void => {
  const router = Router()
  app.use(`/api${env.apiVersion}`, router)
  readdirSync(path.join(__dirname, '..', 'routes')).map(async (file) => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
