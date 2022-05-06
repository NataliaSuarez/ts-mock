import { ReportType } from '../types'
import { isString, isNumber, isDate, isReportType } from './validType'

export const parseName = (namePeriodReq: any): string => {
  if (!isString(namePeriodReq)) {
    throw new Error('Incorrect or missing name')
  }
  return namePeriodReq
}

export const parseNumber = (numberReq: any): number => {
  if (!isNumber(numberReq)) {
    throw new Error('Incorrect or missing total')
  }
  return numberReq
}

export const parseDate = (dateReq: any): string => {
  if (!isString(dateReq) || !isDate(dateReq)) {
    throw new Error('Incorrect or missing date')
  }
  return dateReq
}

export const parseReportType = (reportTypeReq: any): ReportType => {
  if (!isString(reportTypeReq) || !isReportType(reportTypeReq)) {
    throw new Error('Incorrect or missing report type')
  }
  return reportTypeReq
}
