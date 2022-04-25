import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction, MessageActionRow, MessageEmbed } from 'discord.js'
import { createMessageButtons } from '../../../helpers/defaults'

export default {
  data: new SlashCommandBuilder()
    .setName('deleteinactiveusers')
    .setDescription('Delete inactive members'),
  async execute (interaction: CommandInteraction): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // interaction.member?.guild.members.fetch().then(() => interaction.member?.guild.members.kick('461980934527254539'))

    const members = await interaction.member?.guild.members.fetch().then(e => e)
    const inactiveUsers = '5'

    const row = new MessageActionRow()
      .addComponents(
        createMessageButtons('applyDeleteUsers', 'Yes', 'SUCCESS'),
        createMessageButtons('cancelDeleteUsers', 'No', 'DANGER')
      )

    const usersInfo = new MessageEmbed()
      .setDescription(`Total users: ${members.size}\n Inactive users: ${inactiveUsers}`)

    const title = new MessageEmbed()
      .setTitle('Do you really want to delete inactive users?')

    await interaction.reply({
      components: [row],
      embeds: [usersInfo, title]
    })
  }
}