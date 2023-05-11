import { parse as anitomyParser } from 'anitomy'
import { XMLParser } from 'fast-xml-parser'
import { objectPick } from '@vueuse/core'
import { useChatGPTParse } from '../parser/openai'
import type { Episode } from '~/types/parser'

interface Item {
  guid: string
  link: string
  title: string
  description: string
  torrent: Torrent
  enclosure: string

  episode: number
}

interface Torrent {
  link: string
  contentLength: number
  pubDate: Date
}

const simolifedChinese = ['GB', 'CHS', 'SC', '简体']
const traditionalChinese = ['BIG5', 'CHT', 'TC', '繁体', '简繁']

function getEpisodeByAnitomy(title: string) {
  // todo: handle maybe undefined at the parser
  return anitomyParser(title)?.episode?.number ?? 0
}

function calculatePriority(title: string, episode: number, _options?: {
  useSimolifedChinese?: boolean
  useEmbeddedSubtitles?: boolean
}) {
  function reverse(str: string) {
    return str.split('').reverse().join('')
  }

  const titleReversal = reverse(title)
  const options = {
    useSimolifedChinese: true,
    useEmbeddedSubtitles: false,
    ..._options,
  }

  let isSimolifed = false
  for (const item of simolifedChinese) {
    if (titleReversal.includes(reverse(item))) {
      isSimolifed = true
      break
    }
  }

  let isTraditional = false
  if (!isSimolifed) {
    for (const item of traditionalChinese) {
      if (titleReversal.includes(reverse(item))) {
        isTraditional = true
        break
      }
    }
  }

  let result = episode
  if (options.useSimolifedChinese) {
    if (isSimolifed)
      result += 200
  } else if (isTraditional) {
    result += 200
  }

  if (options.useEmbeddedSubtitles) {
    if (title.includes('内嵌'))
      result += 100
  } else if (title.includes('内封')) {
    result += 100
  }

  return result
}

export async function createRssJson(url: string) {
  const xmlResult = await (await fetch(url)).text()
  // nerver trust other fields in the `rss.channel`
  const jsonResultItems = new XMLParser().parse(xmlResult).rss.channel.item as Item[]

  const sortedItems = jsonResultItems.map((item) => {
    item.episode = getEpisodeByAnitomy(item.title)
    return item
  }).sort((a, b) => a.episode - b.episode)
    .map(item => objectPick(item, ['title', 'link', 'episode', 'torrent']))
    // todo: priority options
    .sort((a, b) => calculatePriority(b.title, b.episode) - calculatePriority(a.title, a.episode))

  const parserResult = await useChatGPTParse(sortedItems[0].title) as Episode

  return {
    formatExample: parserResult,
    items: sortedItems.splice(0, sortedItems[0].episode),
  }
}
