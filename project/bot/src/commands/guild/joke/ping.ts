import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction, MessageEmbed } from 'discord.js'
import { defaultColor, fileAppend } from '../../../helpers/defaults'

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Chech your ping'),
  async execute (interaction: CommandInteraction): Promise<void> {
    const { ping } = interaction.client.ws
    const title = `Hello ${interaction.user.username.split(' ')[0]}`
    const description = `Your ping ${ping}ms \n ${ping > 220 ? 'LOOOSER :(' : 'OOOOH, NICE !'}`

    await fileAppend('-----Ping-----', `Name: ${interaction.user.username}`, `ID: ${interaction.user.id}`, `Ping: ${ping}`)

    const embed = new MessageEmbed()
      .setTitle(title)
      .setDescription(description)
      .setColor(defaultColor)

    await interaction.reply({
      embeds: [embed],
      ephemeral: false
    }).catch(console.error)
  }
}