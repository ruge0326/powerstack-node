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

const port = Number(config.port || 3000)

app.listen(port, '0.0.0.0', () => log.info(`Server running at http://0.0.0.0:${port}`))
