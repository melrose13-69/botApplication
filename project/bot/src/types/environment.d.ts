export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_TOKEN: string
      CLIENT_ID: string
    }
  }
}
