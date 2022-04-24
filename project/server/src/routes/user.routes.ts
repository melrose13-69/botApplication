import bodyParser from 'body-parser'
import { Request, Response, Router } from 'express'

import User from '../models/User'

const router = Router()

const jsonParser = bodyParser.json()

router.post('/add', jsonParser, async (req: Request, res: Response ) => {
  try {
    const { name, discordId, time, message } = req.body

    const user = await User.findOne({ discordId })

    if (user) {
      res.status(200).json({ message: 'user edited' })

      user.time = new Date()
      return res.status(201).json({ message: 'user added' })
    }

    const newUser = new User({ name, discordId, time, message })

    await newUser.save()

    return res.status(201).json({ message: 'user added' })

  } catch (e) {
    res.status(500).json({ message: `error add${  e}` })
  }
})
//
// router.post('/delete', async (req, res) => {
//
// })

export default router