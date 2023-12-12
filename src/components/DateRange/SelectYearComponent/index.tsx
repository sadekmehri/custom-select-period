import { useMemo, type FC } from 'react'
import type { DateSelection, DateSelectionHandler, StringValuedKey } from 'src/types'
import DateUtils from 'src/utils/date'
import DateRangeUtils from 'src/utils/date-range'
import SelectComponent from '../../CustomSelect'
import { DEFAULT_YEAR } from 'src/constants/date-range'

type SelectYearComponentProps = {} & DateSelectionHandler

const SelectYearComponent: FC<SelectYearComponentProps> = ({ onDateRangeChange }) => {
  const handleChnageSelectYearOption = ({ key }: StringValuedKey) => {
    const year = key === DEFAULT_YEAR ? DateUtils.getCurrentYear() : Number(key)
    const payload: DateSelection = {
      from: {
        year: year,
        month: 1,
      },
      to: {
        year: year,
        month: 12,
      },
    }
    onDateRangeChange(payload)
  }

  const yearOptions = useMemo(() => {
    return DateRangeUtils.generateNbrYearsFromCurrentYearOptions(10)
  }, [])

  return <SelectComponent options={yearOptions} onChange={handleChnageSelectYearOption} />
}

export default SelectYearComponent
