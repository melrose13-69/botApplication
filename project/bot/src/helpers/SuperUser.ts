import { Client, ClientOptions, Collection, CommandInteractionOption } from 'discord.js'
import { _dirname, join } from '../bot'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v8'
import fs from 'fs'
import { CLIENT_ID, CLIENT_TOKEN, GUILD_ID } from './globals'

export class SuperUser extends Client {

  public commands: Collection<any, any>
  public commandArray: object[]

  constructor (options: ClientOptions) {
    super(options)
    this.commands = new Collection()
    this.commandArray = []
  }

  async pushCommandsInCommandArray (commandFolders: string[], path: string): Promise<void>  {
    this.commandArray = []

    for (const folder of commandFolders) {

      const commandFiles = fs.readdirSync(join(_dirname, `${path}/${folder}/`)).filter(file => file.endsWith('ts'))

      for (const file of commandFiles) {
        const command = (await import(join(_dirname, `${path}/${folder}/${file}`))).default

        await this.commands.set(command.data.name, await command)
        this.commandArray.push(command.data.toJSON())
      }
    }
  }

  async handleEvents (eventsFiles: string[], path: string): Promise<void> {
    for (const file of eventsFiles) {
      const event = (await import(join(_dirname, `${path}/${file}`))).default

      if (event.once) {
        this.once(event.name, (...args) => event.execute(...args, this))
      } else {
        this.on(event.name, (...args) => event.execute(...args, this))
      }
    }
  }

  async handleGlobalCommands (commandFolders: string[], path: string): Promise<void> {

    await this.pushCommandsInCommandArray(commandFolders, path)

    const rest = new REST({ version: '9' }).setToken(CLIENT_TOKEN)

    await (async (): Promise<void> => {
      try {
        console.log('Command (global) started')

        await rest.put(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Routes.applicationCommands(CLIENT_ID),
          { body: this.commandArray }
        )

        console.log('Command (global) end')
      } catch (e) {
        console.error('ERROR', e)
      }
    })()
  }

  async handleGuildCommands (commandFolders: string[], path: string): Promise<void> {

    await this.pushCommandsInCommandArray(commandFolders, path)

    const rest = new REST({ version: '9' }).setToken(CLIENT_TOKEN)

    await (async (): Promise<void> => {
      try {
        console.log('Command (guild) started')

        await rest.put(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
          { body: this.commandArray }
        )

        console.log('Command (guild) end')
      } catch (e) {
        console.error('ERROR', e)
      }
    })()
  }
}
