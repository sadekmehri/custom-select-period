import { getMonth, getYear } from 'date-fns'
import { StringValuedKey } from '../types'

function generateMonths() {
  const monthOptions: Array<StringValuedKey> = [
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

  return monthOptions
}

function getCurrentYear(): number {
  return getYear(new Date())
}

function getCurrentMonth(): number {
  return getMonth(new Date()) + 1
}

const DateUtils = {
  generateMonths,
  getCurrentYear,
  getCurrentMonth,
}

export default DateUtils
