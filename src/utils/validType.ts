import { ReportType } from '../types'

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

export const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

export const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

export const isReportType = (reportTypeString: any): boolean => {
  return Object.values(ReportType).includes(reportTypeString)
}
