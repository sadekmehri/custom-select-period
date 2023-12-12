import { type FC, useEffect } from 'react'
import type { DateSelection, DateSelectionHandler } from 'src/types'
import DateRangeUtils from 'src/utils/date-range'

type CurrentYearComponentProps = {} & DateSelectionHandler

const CurrentYearComponent: FC<CurrentYearComponentProps> = ({ onDateRangeChange }) => {
  const getDefaultDateRangeValue = () => {
    const payload: DateSelection = DateRangeUtils.getDefaultDateRangeValue()
    onDateRangeChange(payload)
  }

  useEffect(() => {
    getDefaultDateRangeValue()
  }, [])

  return null
}

export default CurrentYearComponent
