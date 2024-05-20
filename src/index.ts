import express, { Application, NextFunction, Request, Response } from 'express'
import 'dotenv/config'

const app: Application = express()
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
