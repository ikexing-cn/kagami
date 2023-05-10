import { PrismaClient } from '@prisma/client'

let _prisma: PrismaClient | null = null
export function usePrisma() {
  if (!_prisma)
    _prisma = new PrismaClient()

  return _prisma
}
