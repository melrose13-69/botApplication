import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: { type: String, required: true },
  discordId: { type: String, required: true },
  time: { type: Number, required: true },
  message: { type: String, required: true }
})

export default model('UserMessages', schema)
