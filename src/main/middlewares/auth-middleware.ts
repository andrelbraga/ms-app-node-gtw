import { Request, Response, NextFunction } from 'express';

export const getCredentials = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { 'user-info': userInfo, authorization } = req.headers;

      const authToken = authorization?.toString();
      const userToken = userInfo?.toString();

      Object.defineProperty(res.locals, 'authorization', {
        value: authToken,
        enumerable: true
      })

      Object.defineProperty(res.locals, 'userInfo', {
        value: userToken,
        enumerable: true
      })

      return next()
    } catch (err) {
      next(err)
    }
  }
}
