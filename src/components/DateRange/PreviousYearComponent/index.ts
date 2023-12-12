import { type FC, useEffect } from 'react'
import type { DateSelection, DateSelectionHandler } from 'src/types'
import DateUtils from 'src/utils/date'

type PreviousYearComponentProps = {} & DateSelectionHandler

const PreviousYearComponent: FC<PreviousYearComponentProps> = ({ onDateRangeChange }) => {
  const getDefaultDateRangeValue = () => {
    const currentYear = DateUtils.getCurrentYear()
    const lastYear = currentYear - 1

    const payload: DateSelection = {
      from: {
        year: lastYear,
        month: 1,
      },
      to: {
        year: lastYear,
        month: 12,
      },
    }

    onDateRangeChange(payload)
  }

  useEffect(() => {
    getDefaultDateRangeValue()
  }, [])

  return null
}

export default PreviousYearComponent
