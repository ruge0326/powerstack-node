import { URL } from 'url'
import { log } from './../library/logger'
import { prisma } from './../library/prisma'
import { config } from './../config'

export const auth = async (req: any, res: any) => {
  try {
    const result = await prisma.global_stats.findMany({})
    return res.send(result)
  } catch (error) {
    log.error('@error', error)
    return res.sendStatus(404).end()
  }
}
