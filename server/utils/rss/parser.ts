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

function getEpisodeByAnitomy(title: string) {
  // todo: handle maybe undefined at the parser
  return anitomyParser(title)?.episode?.number ?? 0
}

export async function createRssJson(url: string) {
  const xmlResult = await (await fetch(url)).text()
  // nerver trust other fields in the `rss.channel`
  const jsonResultItems = new XMLParser().parse(xmlResult).rss.channel.item as Item[]

  const sortedItems = jsonResultItems.map((item) => {
    item.episode = getEpisodeByAnitomy(item.title)
    return item
  }).sort((a, b) => {
    // todo: priority
    return a.episode - b.episode
  })

  const parserResult = await useChatGPTParse(sortedItems[0].title) as Episode

  return {
    formatExample: parserResult,
    items: sortedItems.map(item => objectPick(item, ['link', 'episode', 'torrent'])),
  }
}
