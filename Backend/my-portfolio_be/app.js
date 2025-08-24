import express from 'express'
import cors from 'cors'
import { corsOptions } from './config/cors.js'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware.js'
import { APIs_V1 } from './routes/index.js'
import { env } from './config/environment.js'

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', APIs_V1)

app.use(errorHandlingMiddleware)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to my portfolio Backend API' })
})
app.listen(env.LOCAL_DEV_APP_PORT, env.LOCAL_DEV_APP_HOST, () => {
  console.log(`Server is running on http://${env.LOCAL_DEV_APP_HOST}:${env.LOCAL_DEV_APP_PORT}`)
})
