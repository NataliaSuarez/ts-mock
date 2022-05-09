import { Contributor } from '../types'
import contributorsData from '../data/contributors.json'

const contributors: Contributor[] = contributorsData as Contributor[]

export const getContributors = (): Contributor[] => contributors
