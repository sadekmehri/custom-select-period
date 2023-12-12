import { getMonth, getYear } from 'date-fns'
import type { StringValuedKey } from 'src/types'

function getCurrentYear(): number {
  return getYear(new Date())
}

function getCurrentMonth(): number {
  return getMonth(new Date()) + 1
}

function generateMonths() {
  const monthOptions: Array<StringValuedKey> = [
    {
      key: '0',
      value: 'January',
    },
    {
      key: '1',
      value: 'February',
    },
    {
      key: '2',
      value: 'March',
    },
    {
      key: '3',
      value: 'April',
    },
    {
      key: '4',
      value: 'May',
    },
    {
      key: '5',
      value: 'June',
    },
    {
      key: '6',
      value: 'July',
    },
    {
      key: '7',
      value: 'August',
    },
    {
      key: '8',
      value: 'September',
    },
    {
      key: '9',
      value: 'October',
    },
    {
      key: '10',
      value: 'November',
    },
    {
      key: '11',
      value: 'December',
    },
  ]

  return monthOptions
}

const DateUtils = {
  getCurrentYear,
  getCurrentMonth,
  generateMonths,
}

export default DateUtils
