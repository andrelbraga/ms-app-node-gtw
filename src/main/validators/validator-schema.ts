import { Request, Response, NextFunction } from 'express'
import { AnySchema } from 'joi'
export const validatorSchema = (schema: AnySchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req, {
      abortEarly: false,
      stripUnknown: true,
      allowUnknown: true
    })
    if (validation.error) {
      return res.status(400).json({
        response: {
          status: 400,
          data: validation.error.details.map((item) => `${item.context.key} - ${item.message}`)
        }
      })
    }
    Object.assign(req, validation.value)
    next()
  }
}
