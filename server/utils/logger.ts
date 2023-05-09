import type { Logger } from 'winston'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

let _logger: Logger | null = null

export function useLogger(): Logger {
  function cretaeLoggerInner() {
    const _format = format.printf((info) => {
      return `${info.timestamp} [KAgami] ${info.level}: ${info.message}`
    })

    const dailyRotateFileTransport = new DailyRotateFile({
      filename: 'logs/%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '10m',
      maxFiles: '14d',
    })

    return createLogger({
      format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), _format),
      transports: [
        new transports.Console(),
        dailyRotateFileTransport,
      ],
    })
  }

  if (!_logger)
    _logger = cretaeLoggerInner()

  return _logger
}
