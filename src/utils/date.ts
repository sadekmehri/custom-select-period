import { getYear } from 'date-fns'
import StringUtil from './string'

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

function getSelectedYearOrDefault(selectedOption: string): number {
  const currentYear = getYear(new Date())
  return StringUtil.isEmptyString(selectedOption) ? currentYear : Number(selectedOption)
}

function getSelectedMonthOrDefault(selectedOption: string): number {
  const currentMonth = new Date().getMonth() + 1
  return StringUtil.isEmptyString(selectedOption) ? currentMonth : Number(selectedOption)
}

const DateUtils = {
  generateYearRangeOptions,
  getSelectedYearOrDefault,
  getSelectedMonthOrDefault,
}

export default DateUtils
