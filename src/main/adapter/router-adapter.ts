import { HttpResponse } from '@/presentation/helper/http';
import { Request, Response } from 'express'

export type Controller<T = any> = (locals: any, request?: T) => Promise<HttpResponse>

export const adptRouter = (controller: Controller) => {
  return async (req: Request, res: Response): Promise<HttpResponse> => {
    const request = {
      ...req.params,
      ...req.body,
      ...req.query
    }
    const locals = {
      ...res.locals
    }
    try {
      const response = await controller(locals, request)
      return res.status(response.status).json(response)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
