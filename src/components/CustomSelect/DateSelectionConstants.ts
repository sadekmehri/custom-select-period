import {
  MainChoiceIndexes,
  StringValuedKey,
  DateUnitField,
  DateUnitFunction,
  Choices,
} from './types'
import DateUtils from './utils/date'

export const MainChoicesToIndexesMap: Record<Choices, MainChoiceIndexes> = {
  CURRENT_YEAR: '1',
  PREVIOUS_YEAR: '2',
  SELECT_YEAR: '3',
  SELECT_PERIOD: '4',
}

export const mainSelectOptions: Array<StringValuedKey> = [
  {
    key: '1',
    value: 'Current Year',
  },
  {
    key: '2',
    value: 'Previous Year',
  },
  {
    key: '3',
    value: 'Select Year',
  },
  {
    key: '4',
    value: 'Select Period',
  },
]

export const defaultDateValueExtractorsMap: Record<DateUnitField, DateUnitFunction> = {
  month: DateUtils.getCurrentMonth,
  year: DateUtils.getCurrentYear,
}

export const DEFAULT_YEAR: DateUnitField = 'year'
export const DEFAULT_MONTH: DateUnitField = 'month'
