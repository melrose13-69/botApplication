import 'dotenv/config'
import fs from 'fs'
import path, { join } from 'path'
import { SuperUser } from './helpers/SuperUser'
import { clientOptions } from './helpers/globals'

const _dirname = __dirname

const client = new SuperUser(clientOptions)

const eventFiles = fs.readdirSync(`${path.resolve(__dirname)}/events`)
const commandGuildFolders = fs.readdirSync(`${path.resolve(__dirname)}/commands/guild`)
const commandGlobalFolders = fs.readdirSync(`${path.resolve(__dirname)}/commands/global`)

;(async (): Promise<void> => {
  await client.handleEvents(eventFiles, './events')
  await client.handleGlobalCommands(commandGlobalFolders, './commands/global')
  await client.handleGuildCommands(commandGuildFolders, './commands/guild')

  await client.login(process.env.CLIENT_TOKEN)
})()

export { _dirname, join }