import * as dotenv from 'dotenv'
import { describe, expect, it } from 'vitest'
import { createRssJson } from '../server/utils/rss/parser'

dotenv.config()

describe('rss-parser', async () => {
  it('should parse', async () => {
    const res = await createRssJson('https://mikan.ellye.org/RSS/Bangumi?bangumiId=2968&subgroupid=203')
    expect(res).toMatchInlineSnapshot(`
      {
        "formatExample": {
          "episode": 5,
          "format": "",
          "group": "桜都字幕组",
          "resolution": "1080p",
          "season": 1,
          "subtitles": "简体内嵌",
          "title_cn": [
            "为美好的世界献上爆焰！",
          ],
          "title_en": [
            "Kono Subarashii Sekai ni Bakuen wo!",
          ],
          "title_jp": [],
        },
        "items": [
          {
            "episode": 5,
            "link": "https://mikan.ellye.org/Home/Episode/ce90662b913cb5cf5aca4bdbdab808af55b2f822",
            "title": "[桜都字幕组] 为美好的世界献上爆焰！ / Kono Subarashii Sekai ni Bakuen wo!  [05][1080p][简体内嵌]",
            "torrent": {
              "contentLength": 607754624,
              "link": "https://mikan.ellye.org/Home/Episode/ce90662b913cb5cf5aca4bdbdab808af55b2f822",
              "pubDate": "2023-05-09T20:54:51.575",
            },
          },
          {
            "episode": 4,
            "link": "https://mikan.ellye.org/Home/Episode/210e9809d487824be72815aa23265b67507dd2e2",
            "title": "[桜都字幕组] 为美好的世界献上爆焰！ / Kono Subarashii Sekai ni Bakuen wo!  [04][1080p][简体内嵌]",
            "torrent": {
              "contentLength": 491006208,
              "link": "https://mikan.ellye.org/Home/Episode/210e9809d487824be72815aa23265b67507dd2e2",
              "pubDate": "2023-05-02T01:19:02.293",
            },
          },
          {
            "episode": 3,
            "link": "https://mikan.ellye.org/Home/Episode/f0746cb36507847b37f8638f186c28ee789ee53f",
            "title": "[桜都字幕组] 为美好的世界献上爆焰！ / Kono Subarashii Sekai ni Bakuen wo!  [03][1080p][简体内嵌]",
            "torrent": {
              "contentLength": 507678560,
              "link": "https://mikan.ellye.org/Home/Episode/f0746cb36507847b37f8638f186c28ee789ee53f",
              "pubDate": "2023-04-24T02:35:14.342",
            },
          },
          {
            "episode": 2,
            "link": "https://mikan.ellye.org/Home/Episode/223d6d956c18f425a6430b704a60b7b0dc050ae7",
            "title": "[桜都字幕组] 为美好的世界献上爆焰！ / Kono Subarashii Sekai ni Bakuen wo!  [02][1080p][简体内嵌]",
            "torrent": {
              "contentLength": 533693728,
              "link": "https://mikan.ellye.org/Home/Episode/223d6d956c18f425a6430b704a60b7b0dc050ae7",
              "pubDate": "2023-04-18T22:24:10.997",
            },
          },
          {
            "episode": 1,
            "link": "https://mikan.ellye.org/Home/Episode/7508593813ba403ea68a264a77b24b282f989fff",
            "title": "[桜都字幕组] 为美好的世界献上爆焰！ / Kono Subarashii Sekai ni Bakuen wo!  [01][1080p][简体内嵌]",
            "torrent": {
              "contentLength": 479146816,
              "link": "https://mikan.ellye.org/Home/Episode/7508593813ba403ea68a264a77b24b282f989fff",
              "pubDate": "2023-04-09T16:06:32.031",
            },
          },
        ],
      }
    `)
  })
}, { timeout: 10000 })
