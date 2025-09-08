import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { corsOptions } from './config/cors.js'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware.js'
import { APIs_V1 } from './routes/index.js'
import { env } from './config/environment.js'


const app = express()
app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.json())
app.use('/api', APIs_V1)

app.use(errorHandlingMiddleware)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to my portfolio Backend API' })
})
const PORT = process.env.PORT || env.LOCAL_DEV_APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

