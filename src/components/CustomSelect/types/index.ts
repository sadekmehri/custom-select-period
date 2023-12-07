export type Choices = 'CURRENT_YEAR' | 'PREVIOUS_YEAR' | 'SELECT_YEAR' | 'SELECT_PERIOD'
export type MainChoiceIndexes = '1' | '2' | '3' | '4'

export type StringValuedKey = {
  key: string
  value: string
}

export type YearMonth = {
  year: number
  month: number
}

export type DateSelection = {
  from: YearMonth
  to: YearMonth
}

export type DateRangePayload = {
  from: {
    year: number
    month: number
  }
  to: {
    year: number
    month: number
  }
}

export type DateRangePayloadFunction = () => DateRangePayload
export type DateUnitField = 'month' | 'year'
export type DateLabel = 'from' | 'to'
export type DateUnitFunction = () => number

export type PeriodSpecification = {
  field: DateUnitField
  label: DateLabel
}
