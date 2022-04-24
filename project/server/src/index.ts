import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import userRouter from './routes/user.routes'

const PORT = process.env.PORT || '3000'
const MONGO_URL = process.env.MONGO_DB_URI || ''

const app = express()

app.use(cors())
app.use('/api/user', userRouter)
;(async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URL)

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`)
    })
  } catch (e) {
    // console.log('ServerError', e)
    process.exit()
  }
})()
