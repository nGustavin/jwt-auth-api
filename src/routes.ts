import {Router, Response, Request} from 'express'

export const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  res.json({message: "Success"})
})

