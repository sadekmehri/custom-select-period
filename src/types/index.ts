type Choices = 'CURRENT_YEAR' | 'PREVIOUS_YEAR' | 'SELECT_YEAR' | 'SELECT_PERIOD'

export type MainChoiceIndexes = '1' | '2' | '3' | '4'

export type StringValuedKey = {
  key: string
  value: string
}

export const MainOptionsMap: Record<MainChoiceIndexes, Choices> = {
  '1': 'CURRENT_YEAR',
  '2': 'PREVIOUS_YEAR',
  '3': 'SELECT_YEAR',
  '4': 'SELECT_PERIOD',
}

export type MainOptions = {
  [key in MainChoiceIndexes]: Choices
}

export type YearMonth = {
  year: number
  month: number
}

export type DateSelection = {
  from: YearMonth
  to: YearMonth
}

export type CustomizedDateValue =
  | { id: '1'; value: number }
  | { id: '2'; value: number }
  | { id: '3'; value: number }
  | { id: '4'; value: DateSelection }

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

export const monthOptions: Array<StringValuedKey> = [
  {
    key: '',
    value: 'Month',
  },
  {
    key: '1',
    value: 'January',
  },
  {
    key: '2',
    value: 'February',
  },
  {
    key: '3',
    value: 'March',
  },
  {
    key: '4',
    value: 'April',
  },
  {
    key: '5',
    value: 'May',
  },
  {
    key: '6',
    value: 'June',
  },
  {
    key: '7',
    value: 'July',
  },
  {
    key: '8',
    value: 'August',
  },
  {
    key: '9',
    value: 'September',
  },
  {
    key: '10',
    value: 'October',
  },
  {
    key: '11',
    value: 'November',
  },
  {
    key: '12',
    value: 'December',
  },
]

export type DateUnitField = 'month' | 'year'
export type DateLabel = 'from' | 'to'
export type DateUnitFunction = (value: string) => number

export type PeriodSpecification = {
  field: DateUnitField
  label: DateLabel
}
