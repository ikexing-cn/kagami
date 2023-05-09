import * as dotenv from 'dotenv'
import { describe, expect, it } from 'vitest'
import { useChatGPTParse } from '../server/utils/parser/openai'
import type { Episode } from '~/types/parser'

describe('chatgpt-row-parser', async () => {
  dotenv.config()

  it('should parse', async () => {
    const { text } = await useChatGPTParse('[Lilith-Raws] 和山田谈场 Lv999 的恋爱 / Yamada-kun to Lv999 no Koi wo Suru - 03 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]')
    const res = JSON.parse(text) as Episode
    expect(res).toMatchObject({
      group: 'Lilith-Raws',
      title_cn: ['和山田谈场 Lv999 的恋爱'],
      title_en: ['Yamada-kun to Lv999 no Koi wo Suru'],
      title_jp: [],
      season: 1,
      episode: 3,
      subtitles: 'CHT',
      resolution: '1080p',
      // skip format because gpt may will output `AVC AAC MP4` or `AVC AAC`
    })
  })
})
