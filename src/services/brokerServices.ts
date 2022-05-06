import { Broker } from '../types'
import brokersData from '../data/brokers.json'
import brokerMock from '../data/broker.json'

const brokers: Broker[] = brokersData as Broker[]

export const getBrokers = (): Broker[] => brokers

export const getBrokerByKey = (key: string): Broker | undefined => {
  const broker = brokers.find((b) => b.key === key)
  return (broker != null) ? broker : ({ ...brokerMock, key })
}
