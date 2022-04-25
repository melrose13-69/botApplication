import { Client, Interaction, MessageActionRow, MessageButton } from 'discord.js'
import { SuperUser } from '../helpers/SuperUser'

export default {
  name: 'interactionCreate',
  async execute (interaction: Interaction, client: SuperUser): Promise<void> {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName)

      await command.execute(interaction, interaction.client)
    }

    if (interaction.isButton()) {
      if (interaction.customId === 'applyDeleteUsers') {
        await interaction.update({
          content: 'Inactive users have been successfully deleted',
          components: [],
          embeds: []
        })
      }

      if (interaction.customId === 'cancelDeleteUsers') {
        await interaction.update({
          content: 'Deletion of inactive users canceled successfully',
          components: [],
          embeds: []
        })
      }
    }
  }
}