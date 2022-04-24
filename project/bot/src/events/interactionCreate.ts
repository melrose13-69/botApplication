import { Client, Interaction } from 'discord.js'
import { SuperUser } from '../helpers/SuperUser'

export default {
  name: 'interactionCreate',
  async execute (interaction: Interaction, client: SuperUser): Promise<void> {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName)

      await command.execute(interaction, interaction.client)
    }
  }
}