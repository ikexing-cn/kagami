import { ChatGPTAPI } from 'chatgpt'
import { parserPromp } from './promp'

let _chatGPT: InstanceType<typeof ChatGPTAPI> | null = null

export function useChatGPT() {
  if (!_chatGPT) {
    _chatGPT = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY!,
      apiBaseUrl: process.env.OPENAI_API_BASE_URL ?? 'https://api.openai.com/v1',
      systemMessage: parserPromp,
    })
  }

  return _chatGPT
}

export async function useChatGPTParse(msg: string) {
  const chatgpt = useChatGPT()
  return JSON.parse((await chatgpt.sendMessage(msg)).text)
}
