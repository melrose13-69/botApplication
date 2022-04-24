import fs from 'fs'
import { _dirname, join } from '../bot'

export const defaultColor = '#000000'

export const fileAppend = async (slashTitle: string, ...args: string[]): Promise<void> => {
  await fs.appendFileSync(`${_dirname}/logs.txt`, `\n ${slashTitle} \n ${args.join('\n')}\n -----------------------------------------------------------------\n`)
}
