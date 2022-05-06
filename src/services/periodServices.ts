import { Period, NonSensitivePeriod, NewPeriod } from '../types'
import periodsData from '../data/periods.json'
import brokerStats from '../data/brokersStats.json'

const periods: Period[] = periodsData as Period[]

export const getPeriods = (): Period[] => periods

/** ONLY to test Pick<> and Omit<> */
export const getPeriodsWithoutStats = (): NonSensitivePeriod[] => {
  /// map is needed bc typescript statically validates
  return periods.map(({ brokerStats, ...rest }) => ({ ...rest }))
  /**
   * typescript controla el tipado estatico
   * la verificacion de la data client-side
   * queda por fuera // runtime
   */
}

export const getPeriodById = (id: number): Period | undefined => {
  const entry = periods.find((p) => p.id === id)
  return (entry != null) ? ({ ...entry, brokerStats: brokerStats }) : undefined
}

export const addPeriod = (newPeriod: NewPeriod): Period => ({
  ...newPeriod,
  id: periods.length,
  brokerStats: [],
  createdBy: 'Joe Doe',
  createdOn: new Date().toISOString()
})
