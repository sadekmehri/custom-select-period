import { type FC, useEffect } from 'react'
import type { DateSelection } from 'src/types'
import DateRangeUtils from 'src/utils/date-range'

type CurrentYearComponentProps = {
  onDateRangeChange: (payload: DateSelection) => void
}

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
