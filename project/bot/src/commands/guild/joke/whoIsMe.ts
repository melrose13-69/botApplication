import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction, MessageEmbed } from 'discord.js'
import { defaultColor, fileAppend } from '../../../helpers/defaults'

export default {
  data: new SlashCommandBuilder()
    .setName('whoisme')
    .setDescription('You can find out who you are'),
  async execute (interaction: CommandInteraction): Promise<void> {
    const description = `Name: ${interaction.user.username} \n ID: ${interaction.user.id}`

    await fileAppend('-----WhoIsMe-----', `Name: ${interaction.user.username}`, `ID: ${interaction.user.id}`)

    const embed = new MessageEmbed()
      .setTitle('Information')
      .setDescription(description)
      .setColor(defaultColor)

    await interaction.reply({
      embeds: [embed],
      ephemeral: false
    }).catch(console.error)
  }
}