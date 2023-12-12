import { DEFAULT_YEAR, DEFAULT_MONTH } from 'src/constants/date-range'
import DateUtils from './date'
import type { DateSelection } from 'src/types'

function generateYearRangeOptions(startingYear: number, numberOfYears: number) {
  return Array.from({ length: numberOfYears }, (_, index) => {
    const currentYear = startingYear - index
    const yearLabel = currentYear.toString()

    return {
      key: yearLabel,
      value: yearLabel,
    }
  })
}

function generateNbrYearsFromCurrentYearOptions(nbrYear: number) {
  const currentYear = DateUtils.getCurrentYear()
  const yearOptions = generateYearRangeOptions(currentYear, nbrYear)
  yearOptions.unshift({ key: DEFAULT_YEAR, value: DEFAULT_YEAR })
  return yearOptions
}

function getDefaultDateRangeValue(): DateSelection {
  const year = DateUtils.getCurrentYear()
  return {
    from: {
      year,
      month: 1,
    },
    to: {
      year,
      month: 12,
    },
  }
}

function getMonthOptions() {
  const months = DateUtils.generateMonths()
  months.unshift({ key: DEFAULT_MONTH, value: DEFAULT_MONTH })
  return months
}

const DateRangeUtils = {
  generateYearRangeOptions,
  generateNbrYearsFromCurrentYearOptions,
  getDefaultDateRangeValue,
  getMonthOptions,
}

export default DateRangeUtils
