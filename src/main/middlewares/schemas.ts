import joi from 'joi'

export const authSchema = joi.object({
  headers: joi.object({
    authorization: joi.string().required(),
    'user-info': joi.string().required()
  })
})
