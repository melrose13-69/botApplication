import fetch from 'node-fetch'

export default async (discordId: string, message: string, name: string, time: number): Promise<unknown> => {
  const body = JSON.stringify({ discordId, message, name, time })

  const response = await fetch('http://localhost:3000/api/user/add', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body
  })

  return response
}