import request from 'supertest'
import app from '@/main/config/app'
describe('Address Integration', () => {
 
  test('[Route: GET/ /api/v1/customer/address] - should return 400 if without headers', async () => {
    const client = request.agent(app)
    const res = await client.get('/api/v1/customer/address')
    expect(res.status).toEqual(400)
  })

  test('[Route: GET/ /api/v1/customer/address] - should return 400, authorization and userInfo empty', async () => {
    const client = request.agent(app)
    const res = await client.get('/api/v1/customer/address')
    .set('authorization','')
    .set('user-info','')
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({"response": {"data": ["authorization - \"headers.authorization\" is not allowed to be empty", "user-info - \"headers.user-info\" is not allowed to be empty"], "status": 400}})
  })

  test('[Route: GET/ /api/v1/customer/address] - should return 400, userInfo empty', async () => {
    const client = request.agent(app)
    const res = await client.get('/api/v1/customer/address')
    .set('authorization','dasdadavvfsdfsdf')
    .set('user-info','')
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({"response": {"data": ["user-info - \"headers.user-info\" is not allowed to be empty"], "status": 400}})
  })

  test('[Route: GET/ /api/v1/customer/address] - should return 400, authorization empty', async () => {
    const client = request.agent(app)
    const res = await client.get('/api/v1/customer/address')
    .set('authorization','')
    .set('user-info','adasdaacacascsc')
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({"response": {"data": ["authorization - \"headers.authorization\" is not allowed to be empty"], "status": 400}})
  })
})
