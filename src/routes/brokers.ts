import express from 'express'
import * as brokerServices from '../services/brokerServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(brokerServices.getBrokers())
})

router.get('/:key', (req, res) => {
  const broker = brokerServices.getBrokerByKey(req.params.key)
  return (broker != null) ? res.send(broker) : res.sendStatus(404)
})

export default router
