import express from 'express'
import * as periodServices from '../services/periodServices'
import { toNewPeriod } from '../utils/validation'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(periodServices.getPeriods())
})

router.get('/:id', (req, res) => {
  const period = periodServices.getPeriodById(+req.params.id)
  return (period != null) ? res.send(period) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newPeriod = toNewPeriod(req.body)
    const addedPeriod = periodServices.addPeriod(newPeriod)
    res.json(addedPeriod)
  } catch (e: unknown) {
    res.status(400)
    if (e instanceof Error) res.send(e.message)
    res.send()
  }
})

export default router
