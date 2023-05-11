import type { Storage } from 'unstorage'
import { createStorage } from 'unstorage'
import fsDriver from 'unstorage/drivers/fs'

let _config: Storage | null = null

const configured = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
  OPENAI_API_BASE_URL: process.env.OPENAI_API_BASE_URL || '',
}

export function useConfig() {
  function initialConfig() {
    if (!_config) _config = createStorage({ driver: fsDriver({ base: './config' }) })
  }
  initialConfig()

  const config = _config!

  async function getItem(key: keyof typeof configured) {
    return await config.getItem(key) as string || configured[key]
  }

  function setItem(key: keyof typeof configured, value: string) {
    config.setItem(key, value)
  }

  function getKeys() {
    return Object.keys(configured)
  }

  return {
    getItem,
    setItem,
    getKeys,
  }
}
