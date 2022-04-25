import fs from 'fs'
import { _dirname } from '../bot'
import { MessageButton, MessageButtonStyleResolvable } from 'discord.js'

export const defaultColor = '#000000'

export const fileAppend = async (slashTitle: string, ...args: string[]): Promise<void> => {
  await fs.appendFileSync(`${_dirname}/logs.txt`, `\n ${slashTitle} \n ${args.join('\n')}\n -----------------------------------------------------------------\n`)
}

export const createMessageButtons = (id: string, label: string, style: MessageButtonStyleResolvable): MessageButton => {
  return new MessageButton()
    .setCustomId(id)
    .setLabel(label)
    .setStyle(style)
}