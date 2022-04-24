import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction, MessageEmbed } from 'discord.js'
import { defaultColor, fileAppend } from '../../../helpers/defaults'

export default {
  data: new SlashCommandBuilder()
    .setName('biba')
    .setDescription('You can find out who you are'),
  async execute (interaction: CommandInteraction): Promise<void> {
    const description = Math.floor((Math.random() * (30 - 12) + 12)).toString()

    await fileAppend('-----Biba-----', `Name: ${interaction.user.username}`, `random: ${description}`)

    const embed = new MessageEmbed()
      .setTitle('O_O')
      .setDescription(description)
      .setColor(defaultColor)

    await interaction.reply({
      embeds: [embed],
      ephemeral: false
    }).catch(console.error)
  }
}