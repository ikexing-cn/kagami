import { ChatGPTAPI } from 'chatgpt'
import { useConfig } from '../config'
import { parserPromp } from './promp'

let _chatGPT: InstanceType<typeof ChatGPTAPI> | null = null

export async function useChatGPT() {
  if (!_chatGPT) {
    const { getItem } = useConfig()

    _chatGPT = new ChatGPTAPI({
      apiKey: await getItem('OPENAI_API_KEY'),
      apiBaseUrl: await getItem('OPENAI_API_BASE_URL'),
      systemMessage: parserPromp,
    })
  }

  return _chatGPT
}

export async function useChatGPTParse(msg: string) {
  const chatgpt = await useChatGPT()
  return JSON.parse((await chatgpt.sendMessage(msg)).text)
}
