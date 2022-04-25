import { Message } from 'discord.js'
import addUserMessage from '../api/addUserMessage'

export default {
  name: 'messageCreate',
  once: true,
  async execute ({ author, content, createdTimestamp  }: Message): Promise<void> {
    if (author.bot) return
    console.log(11)
    await addUserMessage(author.id, content, author.username, createdTimestamp)
    console.log(22)
  }
}