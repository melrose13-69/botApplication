import { Interaction } from 'discord.js'

export default {
  name: 'ready',
  once: true,
  async execute (interaction: Interaction): Promise<void> {
    console.log(`Logged in as ${interaction.user.tag}`)
  }
}