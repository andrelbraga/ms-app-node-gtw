import { HttpResponse } from '@/presentation/helper'
import { makeAddressControllerFactory } from "@/main/factories"

describe('Address Controller', () => {

  test('[Method: getAddress] - should return 500, authorization and userInfo null', async () => {
    const controller = makeAddressControllerFactory()
    const response = await controller.getAddress(null)
    const expected: HttpResponse = {
      status: 500,
      message: `Cannot read property 'authorization' of null`
    }
    expect(response.status).toEqual(expected.status)
    expect(response.message).toEqual(expected.message)
    
  })

  test('[Method: getAddress] - should return 403, authorization and userInfo empty', async () => {
    const controller = makeAddressControllerFactory()
    const response = await controller.getAddress({ authorization: '', userInfo: '' })
     expect(response.status).toEqual(403)
  })

  test('[Method: getAddress] - should return 403, authorization empty', async () => {
    const controller = makeAddressControllerFactory()
    const response = await controller.getAddress({ authorization: '', userInfo: 'asdasdasdaahdasdhasd' })
    expect(response.status).toEqual(403)
  })

  test('[Method: getAddress] - should return 403, userInfo empty', async () => {
    const controller = makeAddressControllerFactory()
    const response = await controller.getAddress({ authorization: 'adadadasdasd', userInfo: '' })
    expect(response.status).toEqual(403)
  })
})
