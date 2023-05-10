const forwardToken = '[转]'
const onlyNumber = /\[[0-9]+\]/
const fileSize = /\[[0-9.MBmbIi]+\]/
const videoResolution = /\[[0-9]{2,5}(p|P)([A-Za-z0-9]+)?\]/
const fileExtension = ['mp4', 'avi', 'flv', 'mov', 'ts', 'mpg', 'mpeg', 'm2ts', 'rmvb', 'wmv', 'webm', 'rm', 'mkv']
const languageToken = ['jis', 'big5', 'gb', 'cht', 'chs', '简繁', '简日', '简', '繁', '内封', '内嵌', '双语']
const origin = ['web', 'webdl', 'web-dl', 'dl', 'baha', 'bilibili', 'bdrip', 'bd-rip', 'rip']

function parseFileName(name: string, rule?: {}): Record<string, string> {
  name = name.replaceAll('【', '[').replaceAll('】', ']')
  const strs: Array<string> = []
  let pos1 = -1
  let pos2 = -1
  let second = false
  let pair = false

  for (let i = 0; i < name.length; ++i) {
    const c = name[i]
    if (c === '[' || c === ']') {
      if (!second) {
        second = true
        pos1 = i
      } else {
        second = false
        pos2 = i
        pair = true
      }

      if (pair) {
        pair = false
        strs.push(name.substring(pos1, pos2 + 1))
      }
    }
  }

  strs.forEach((v) => {
    name = name.replace(v, '')
  })

  strs.push(name.trim())

  return guessType(strs)
}

function guessType(arr: Array<string>): Record<string, string> {
  const result = {} as Record<string, string>
  const processed = [] as Array<number>
  let pl = 0
  let pr = arr.length - 2
  // skip or read forward token
  if (arr[pl] === forwardToken) {
    result['meta/forward'] = 'true'
    pl++
  }
  // the first bracket is publisher name
  result['meta/publisher-name'] = arr[pl].trim().replace('[', '').replace(']', '')
  // the last bracket usually is file size
  if (fileSize.test(arr[pr])) {
    result['file/size'] = arr[pr]
    processed.push(pr)
    pr--
  }
  const cpr = pr
  for (pr; pr >= pl; --pr) {
    for (const ext of fileExtension) {
      if (arr[pr].toLowerCase() === `[${ext}]`) {
        result['file/type'] = arr[pr].substring(1, arr[pr].length - 1)
        processed.push(pr)
        break
      }
    }
  }
  pr = cpr
  for (pr; pr >= pl; --pr) {
    if (videoResolution.test(arr[pr])) {
      result['meta/video-resolution'] = arr[pr].substring(1, arr[pr].length - 1)
      processed.push(pr)
      break
    }
  }
  pr = cpr
  for (pr; pr >= pl; --pr) {
    // usually is episode
    if (onlyNumber.test(arr[pr])) {
      result['info/episode'] = arr[pr].substring(1, arr[pr].length - 1)
      processed.push(pr)
      break
    }
  }
  pr = cpr
  for (pr; pr >= pl; --pr) {
    for (const ext of languageToken) {
      if (arr[pr].toLowerCase().includes(ext)) {
        result['file/language-propmt'] = arr[pr].substring(1, arr[pr].length - 1)
        processed.push(pr)
        break
      }
    }
  }
  pr = cpr
  for (pr; pr >= pl; --pr) {
    for (const ext of origin) {
      if (arr[pr].toLowerCase().includes(ext)) {
        result['meta/origin'] = arr[pr].substring(1, arr[pr].length - 1)
        processed.push(pr)
        break
      }
    }
  }
  pr = cpr

  return result
}

export { parseFileName }
