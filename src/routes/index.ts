import express from 'express'
import { log } from './../library/logger'
import { prisma } from './../library/prisma'
export const routes = express.Router()

export const stats = async (req: any, res: any) => {
  try {
    const result = await prisma.global_stats.findMany({})
    return res.send(result)
  } catch (error) {
    log.error('@error', error)
    return res.sendStatus(404).end()
  }
}

routes.get('/', stats)
