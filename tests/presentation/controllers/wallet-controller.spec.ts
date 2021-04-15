import express from 'express'
import request from 'supertest'
import walletRoutes from '@/main/routes/wallet-route'

describe('Wallet Controller', () => {
  test('should return 404', async () => {
    const app = express()
    const response = await request(walletRoutes)
    .get('/merchant/00831658002/balance')
    .set('Authorization', 'Bearer 4f5s64f5s6f4')
    .set('User-info', 'f5sd4f56sd4f56')
    .expect(404)

    console.log(response.error)
  })
})
