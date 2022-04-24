import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: { type: String, required: true },
  discordId: { type: String, required: true },
  time: { type: Date, required: true },
  message: { type: String, required: true }
})

export default model('User', schema)
