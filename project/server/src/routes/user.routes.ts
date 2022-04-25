import bodyParser from 'body-parser'
import { Request, Response, Router } from 'express'

import UserMessages from '../models/UserMessages'

const router = Router()

const jsonParser = bodyParser.json()

router.post('/add', jsonParser, async (req: Request, res: Response ) => {
  try {
    const { name, discordId, time, message } = req.body

    console.log(1)
    const user = await UserMessages.findOne({ discordId })

    console.log(2)
    if (user) {
      console.log(3)
      user.time = 1
      return res.status(201).json({ message: 'user added', status: 201 })
    }
    console.log(4)
    const newUser = new UserMessages({ name, discordId, time, message })

    console.log(5)
    await newUser.save()
    console.log(6)
    console.log('user added')
    return res.status(201).json({ message: 'user added' })

  } catch (e) {
    console.log('ERROR:/add', e)
    return res.status(500).json({ message: `error add${  e}` })
  }
})
//
// router.post('/delete', async (req, res) => {
//
// })

export default router