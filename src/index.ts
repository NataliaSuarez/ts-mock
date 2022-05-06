import express from 'express'
import periodRouter from './routes/periods'
import brokerRouter from './routes/brokers'
import cors from 'cors'

const app = express()
app.use(express.json()) // middleware req.body => json
app.use(cors())

const PORT = 3001

app.get('/ping', (_req, res) => {
  console.log('Ping here!')
  res.send(`pong ${new Date().toLocaleDateString()}`)
})

app.use('/api/periods', periodRouter)
app.use('/api/brokers', brokerRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
