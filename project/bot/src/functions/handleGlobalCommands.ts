// import { REST } from '@discordjs/rest'
// import { Routes } from 'discord-api-types/v8'
// import fs from 'fs'
// import { _dirname, join } from '../bot'
// import { Client } from 'discord.js'
// import { pushCommandsInCommandArray } from '../helpers/defaults'
//
// export default function (client: Client): void {
//   client.handleGlobalCommands = async (commandFolders: string[], path: string) : Promise<void> => {
//
//     await pushCommandsInCommandArray(commandFolders, path, client)
//
//     const rest = new REST({ version: '9' }).setToken(process.env.CLIENT_TOKEN)
//
//     await (async (): Promise<void> => {
//       try {
//         console.log('Command (global) started')
//
//         await rest.put(
//           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//           // @ts-ignore
//           Routes.applicationCommands(process.env.CLIENT_ID),
//           { body: client.commandArray }
//         )
//
//         console.log('Command (global) end')
//       } catch (e) {
//         console.error('ERROR', e)
//       }
//     })()
//   }
// }