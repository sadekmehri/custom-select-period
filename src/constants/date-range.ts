import { DateUnitField, MainChoices, StringValuedKey } from 'src/types'
import DateUtils from 'src/utils/date'

export const DEFAULT_YEAR: DateUnitField = 'Year'
export const DEFAULT_MONTH: DateUnitField = 'Month'

export const mainOptions: Array<StringValuedKey> = [
  { key: '0', value: 'Current Year' },
  { key: '1', value: 'Last Year' },
  { key: '2', value: 'Select Year' },
  { key: '3', value: 'Select Period' },
]

export const MainChoicesToIndexesMap: Record<MainChoices, string> = {
  CURRENT_YEAR: '0',
  PREVIOUS_YEAR: '1',
  SELECT_YEAR: '2',
  SELECT_PERIOD: '3',
}

export const defaultDateValueExtractorsMap: Record<DateUnitField, () => number> = {
  Month: DateUtils.getCurrentMonth,
  Year: DateUtils.getCurrentYear,
}
