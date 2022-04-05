import express from 'express'
import { config } from './config'
import { routes } from './routes'
import { log } from './library/logger'

const app = express()
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use('/', routes)

const port = Number(config.port)
const hostname = config.hostname

app.listen(port, hostname, () => log.info(`Server running at http://${hostname}:${port}`))
