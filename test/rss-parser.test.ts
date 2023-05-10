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
          "episode": 1,
          "format": "",
          "group": "桜都字幕组",
          "resolution": "1080P@60FPS",
          "season": 1,
          "subtitles": "简繁内封",
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
            "episode": 1,
            "link": "https://mikan.ellye.org/Home/Episode/437e4cead539ccdb2e702d75725c72c4df74214c",
            "torrent": {
              "contentLength": 346491456,
              "link": "https://mikan.ellye.org/Home/Episode/437e4cead539ccdb2e702d75725c72c4df74214c",
              "pubDate": "2023-04-09T16:11:52.052",
            },
          },
          {
            "episode": 1,
            "link": "https://mikan.ellye.org/Home/Episode/b56481145bd0b29b3a929979bf2fa33c165e4888",
            "torrent": {
              "contentLength": 273206464,
              "link": "https://mikan.ellye.org/Home/Episode/b56481145bd0b29b3a929979bf2fa33c165e4888",
              "pubDate": "2023-04-09T16:10:16.801",
            },
          },
          {
            "episode": 1,
            "link": "https://mikan.ellye.org/Home/Episode/7c61d367d27b5012e21aa12605d268c0953ae6d9",
            "torrent": {
              "contentLength": 479125824,
              "link": "https://mikan.ellye.org/Home/Episode/7c61d367d27b5012e21aa12605d268c0953ae6d9",
              "pubDate": "2023-04-09T16:08:43.225",
            },
          },
          {
            "episode": 1,
            "link": "https://mikan.ellye.org/Home/Episode/7508593813ba403ea68a264a77b24b282f989fff",
            "torrent": {
              "contentLength": 479146816,
              "link": "https://mikan.ellye.org/Home/Episode/7508593813ba403ea68a264a77b24b282f989fff",
              "pubDate": "2023-04-09T16:06:32.031",
            },
          },
          {
            "episode": 2,
            "link": "https://mikan.ellye.org/Home/Episode/e13162f92d5cfd3809738f19cb64a585c819e4da",
            "torrent": {
              "contentLength": 445298784,
              "link": "https://mikan.ellye.org/Home/Episode/e13162f92d5cfd3809738f19cb64a585c819e4da",
              "pubDate": "2023-04-18T22:24:43.271",
            },
          },
          {
            "episode": 2,
            "link": "https://mikan.ellye.org/Home/Episode/a74e19842fad17307a1b9192cc48b28ea1130b64",
            "torrent": {
              "contentLength": 340587968,
              "link": "https://mikan.ellye.org/Home/Episode/a74e19842fad17307a1b9192cc48b28ea1130b64",
              "pubDate": "2023-04-18T22:24:32.849",
            },
          },
          {
            "episode": 2,
            "link": "https://mikan.ellye.org/Home/Episode/f69eb4959babf0556053a3f4836f5330611e689c",
            "torrent": {
              "contentLength": 533714688,
              "link": "https://mikan.ellye.org/Home/Episode/f69eb4959babf0556053a3f4836f5330611e689c",
              "pubDate": "2023-04-18T22:24:21.979",
            },
          },
          {
            "episode": 2,
            "link": "https://mikan.ellye.org/Home/Episode/223d6d956c18f425a6430b704a60b7b0dc050ae7",
            "torrent": {
              "contentLength": 533693728,
              "link": "https://mikan.ellye.org/Home/Episode/223d6d956c18f425a6430b704a60b7b0dc050ae7",
              "pubDate": "2023-04-18T22:24:10.997",
            },
          },
          {
            "episode": 3,
            "link": "https://mikan.ellye.org/Home/Episode/a34d9b84184614901297d98b47fa2b831b9e6200",
            "torrent": {
              "contentLength": 416934784,
              "link": "https://mikan.ellye.org/Home/Episode/a34d9b84184614901297d98b47fa2b831b9e6200",
              "pubDate": "2023-04-24T02:35:36.79",
            },
          },
          {
            "episode": 3,
            "link": "https://mikan.ellye.org/Home/Episode/900a498081b3074aae5fcb083a7e4fb84ae214bf",
            "torrent": {
              "contentLength": 320423840,
              "link": "https://mikan.ellye.org/Home/Episode/900a498081b3074aae5fcb083a7e4fb84ae214bf",
              "pubDate": "2023-04-24T02:35:30.537",
            },
          },
          {
            "episode": 3,
            "link": "https://mikan.ellye.org/Home/Episode/4924626821acb05f417d224e27d3eeac8768d7f6",
            "torrent": {
              "contentLength": 507720512,
              "link": "https://mikan.ellye.org/Home/Episode/4924626821acb05f417d224e27d3eeac8768d7f6",
              "pubDate": "2023-04-24T02:35:21.458",
            },
          },
          {
            "episode": 3,
            "link": "https://mikan.ellye.org/Home/Episode/f0746cb36507847b37f8638f186c28ee789ee53f",
            "torrent": {
              "contentLength": 507678560,
              "link": "https://mikan.ellye.org/Home/Episode/f0746cb36507847b37f8638f186c28ee789ee53f",
              "pubDate": "2023-04-24T02:35:14.342",
            },
          },
          {
            "episode": 4,
            "link": "https://mikan.ellye.org/Home/Episode/7fe06a9caa374f43ef3afcd6d71ef90949e848ea",
            "torrent": {
              "contentLength": 400514080,
              "link": "https://mikan.ellye.org/Home/Episode/7fe06a9caa374f43ef3afcd6d71ef90949e848ea",
              "pubDate": "2023-05-02T01:19:32.768",
            },
          },
          {
            "episode": 4,
            "link": "https://mikan.ellye.org/Home/Episode/52ba84acb772ccfe1269856d6b6a5a5bbec31da5",
            "torrent": {
              "contentLength": 306289056,
              "link": "https://mikan.ellye.org/Home/Episode/52ba84acb772ccfe1269856d6b6a5a5bbec31da5",
              "pubDate": "2023-05-02T01:19:25.199",
            },
          },
          {
            "episode": 4,
            "link": "https://mikan.ellye.org/Home/Episode/e6a666c36000370535ca3943a236ce20017e5f3a",
            "torrent": {
              "contentLength": 490995712,
              "link": "https://mikan.ellye.org/Home/Episode/e6a666c36000370535ca3943a236ce20017e5f3a",
              "pubDate": "2023-05-02T01:19:14.436",
            },
          },
          {
            "episode": 4,
            "link": "https://mikan.ellye.org/Home/Episode/210e9809d487824be72815aa23265b67507dd2e2",
            "torrent": {
              "contentLength": 491006208,
              "link": "https://mikan.ellye.org/Home/Episode/210e9809d487824be72815aa23265b67507dd2e2",
              "pubDate": "2023-05-02T01:19:02.293",
            },
          },
          {
            "episode": 5,
            "link": "https://mikan.ellye.org/Home/Episode/13a0b0f12e5058c25a3139ad24f6e54494ab6a2d",
            "torrent": {
              "contentLength": 502540544,
              "link": "https://mikan.ellye.org/Home/Episode/13a0b0f12e5058c25a3139ad24f6e54494ab6a2d",
              "pubDate": "2023-05-09T20:55:41.568",
            },
          },
          {
            "episode": 5,
            "link": "https://mikan.ellye.org/Home/Episode/c86f891dc16c132f07137683545ae59ccd37c785",
            "torrent": {
              "contentLength": 385991296,
              "link": "https://mikan.ellye.org/Home/Episode/c86f891dc16c132f07137683545ae59ccd37c785",
              "pubDate": "2023-05-09T20:55:32.815",
            },
          },
          {
            "episode": 5,
            "link": "https://mikan.ellye.org/Home/Episode/d63dacc0c6434ec6609797be82427e7b55956274",
            "torrent": {
              "contentLength": 607356160,
              "link": "https://mikan.ellye.org/Home/Episode/d63dacc0c6434ec6609797be82427e7b55956274",
              "pubDate": "2023-05-09T20:55:22.792",
            },
          },
          {
            "episode": 5,
            "link": "https://mikan.ellye.org/Home/Episode/ce90662b913cb5cf5aca4bdbdab808af55b2f822",
            "torrent": {
              "contentLength": 607754624,
              "link": "https://mikan.ellye.org/Home/Episode/ce90662b913cb5cf5aca4bdbdab808af55b2f822",
              "pubDate": "2023-05-09T20:54:51.575",
            },
          },
        ],
      }
    `)
  })
})
