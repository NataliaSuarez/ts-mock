export interface ContributorBroker {
  key: string
  name: string
};

export interface Contributor {
  id: number
  fullName: string
  broker: ContributorBroker
  count: number
  qtrCount: number
  idioPlTotal: number
  idioPlAverage: number
  idioPlSem: number
  idioPlStockDays: number
  idioPlTStat: number
  hitRate: number
  slugging: number
  basePay: number
  bonusPay: number | null
  excludedInCalc?: boolean
};

export enum ReportType {
  IntraQuarter = 'Intra-Quarter',
  Quarterly = 'Quarterly',
}

export interface Broker {
  key: string
  name: string
  region: string
  emailDefaults: {
    to: string[]
    cc: string[]
    body: string
  }
};

export interface PeriodBrokerStats {
  name: string
  key: string
  totalAnalysts: number
  totalIdeas: number
  region: string
  lastSentBy?: string
  lastSentOn?: string
}

/**
 * INTERFACE: puede ser extendida
 * ex. interface PeriodPower extends Period
 * */
export interface Period {
  id: number
  name: string
  from: string
  to: string
  reportType: ReportType
  totalBrokers: number
  totalAnalysts: number
  totalIdeas: number
  totalRegions: number
  createdBy: string
  createdOn: string
  brokerStats: PeriodBrokerStats[]
  isLatest?: boolean
};

// PICK set of properties of interface
// export type NonSensitivePeriod = Pick<Period, 'id' | 'name' | 'from' | 'to' | 'reportType' | 'totalBrokers' | 'totalAnalysts' | 'totalIdeas' | 'totalRegions' | 'createdBy' | 'createdOn'>

// OMIT set of properties of interface
export type NonSensitivePeriod = Omit<Period, 'brokerStats'>

export type NewPeriod = Omit<Period, 'id' | 'createdBy' | 'createdOn' | 'brokerStats' | 'isLatest'>
