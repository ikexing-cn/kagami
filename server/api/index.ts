import { useChatGPTParser } from '../utils/parser/openai'

export default defineEventHandler(async () => {
  const res = await useChatGPTParser()
  return res
})
