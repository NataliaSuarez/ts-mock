import { NewPeriod } from '../types'
import { parseName, parseDate, parseReportType, parseNumber } from './parse'

export const toNewPeriod = (object: any): NewPeriod => ({
  name: parseName(object.name),
  from: parseDate(object.from),
  to: parseDate(object.to),
  reportType: parseReportType(object.reportType),
  totalBrokers: parseNumber(object.totalBrokers),
  totalAnalysts: parseNumber(object.totalAnalysts),
  totalIdeas: parseNumber(object.totalIdeas),
  totalRegions: parseNumber(object.totalRegions)
})
