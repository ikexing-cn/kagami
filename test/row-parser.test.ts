import * as dotenv from 'dotenv'
import { describe, expect, it } from 'vitest'
import { useChatGPTParse } from '../server/utils/parser/openai'
import { useLogger } from '../server/utils/logger'
import { parseFileName } from '../server/utils/parser/local'
import type { Episode } from '~/types/parser'

dotenv.config()
const logger = useLogger()

describe.skip('chatgpt-row-parser', async () => {
  it('gpt parser', async () => {
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

describe('local parser', async () => {
  it('local parser', () => {
    const text = '[爱恋字幕社][熊熊勇闯异世界 Punch!][Kuma Kuma Kuma Bear Punch!][05][1080P][MP4][GB][简中] [292.23 MB]'
    const value = parseFileName(text)
    for (const v in value)
      logger.info(`${v}: ${value[v]}`)
  })
})
