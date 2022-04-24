// import { REST } from '@discordjs/rest'
// import { Routes } from 'discord-api-types/v8'
// import { Client } from 'discord.js'
// import { pushCommandsInCommandArray } from '../helpers/defaults'
//
// export default function (client: Client): void {
//   client.handleGuildCommands = async (commandFolders, path): Promise<void> => {
//
//     await pushCommandsInCommandArray(commandFolders, path, client)
//
//     const rest = new REST({ version: '9' }).setToken(process.env.CLIENT_TOKEN)
//
//     await (async (): Promise<void> => {
//       try {
//         console.log('Command (guild) started')
//
//         await rest.put(
//           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//           // @ts-ignore
//           Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
//           { body: client.commandArray }
//         )
//
//         console.log('Command (guild) end')
//       } catch (e) {
//         console.error('ERROR', e)
//       }
//     })()
//   }
// }