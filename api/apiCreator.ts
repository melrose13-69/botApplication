export const fetchApi = async (method: string, path: string, bodyRequest?: BodyInit, headersRequest?: HeadersInit): Promise<object> => {
  const body: BodyInit | undefined = bodyRequest ? JSON.stringify(bodyRequest) : undefined
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...headersRequest
  }

  const payload: RequestInit = { headers, method }

  if (body) {
    payload.body = body
  }

  const response = await fetch(path, payload)

  return response.json()
}