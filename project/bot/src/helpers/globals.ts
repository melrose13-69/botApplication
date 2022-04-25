import { Intents } from 'discord.js'

export const CLIENT_TOKEN = process.env.CLIENT_TOKEN || ''
export const GUILD_ID = process.env.GUILD_ID || ''
export const CLIENT_ID = process.env.CLIENT_ID || ''

export const clientOptions = {
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES
  ]
}