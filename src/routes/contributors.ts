import express from 'express'
import * as contributorServices from '../services/contributorServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(contributorServices.getContributors())
})

export default router
