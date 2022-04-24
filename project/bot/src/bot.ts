import 'dotenv/config'
import { Intents } from 'discord.js'
import fs from 'fs'
import path, { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { SuperUser } from './helpers/SuperUser'

const _dirname = __dirname

export { _dirname, join }

const client = new SuperUser({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES] })

// const functions = fs.readdirSync('./functions').filter(file => file.endsWith('ts'))
const eventFiles = fs.readdirSync(`${path.resolve(__dirname)}/events`)

const commandGuildFolders = fs.readdirSync(`${path.resolve(__dirname)}/commands/guild`)
const commandGlobalFolders = fs.readdirSync(`${path.resolve(__dirname)}/commands/global`)

console.log(commandGuildFolders)
;(async (): Promise<void> => {
  // for (const file of functions) {
  //   (await import(`./functions/${file}`)).default(client)
  // }
  client.on('message', (...args) => {
    console.log(args)
  })
  await client.handleEvents(eventFiles, './events')
  await client.handleGlobalCommands(commandGlobalFolders, './commands/global')
  await client.handleGuildCommands(commandGuildFolders, './commands/guild')

  await client.login(process.env.CLIENT_TOKEN)
})()
