import { useMemo, type FC, useState } from 'react'
import ButtonComponent from 'src/components/CustomButton'
import YearMonthSelector from 'src/components/YearMonthSelector'
import { defaultDateValueExtractorsMap } from 'src/constants/date-range'
import type {
  DateSelection,
  DateSelectionHandler,
  DateUnitField,
  PeriodSpecification,
  StringValuedKey,
} from 'src/types'
import DateRangeUtils from 'src/utils/date-range'

type YearMonthComponentProps = {} & DateSelectionHandler

const YearMonthComponent: FC<YearMonthComponentProps> = ({ onDateRangeChange }) => {
  const [dateRange, setDateRange] = useState<DateSelection>(
    DateRangeUtils.getDefaultDateRangeValue(),
  )

  const yearOptions = useMemo(() => {
    return DateRangeUtils.generateNbrYearsFromCurrentYearOptions(10)
  }, [])

  const monthOptions = useMemo(() => {
    return DateRangeUtils.getMonthOptions()
  }, [])

  const handleDefaultMonthYearSelection = (option: StringValuedKey) => {
    const { key } = option
    const extractDateUnitFieldFunction = defaultDateValueExtractorsMap[key as DateUnitField]
    return !extractDateUnitFieldFunction ? Number(key) : extractDateUnitFieldFunction()
  }

  const handleChangePeriod = (option: StringValuedKey, meta: PeriodSpecification) => {
    const { field, label } = meta
    const key = handleDefaultMonthYearSelection(option)
    const lowercasedField = field.toLocaleLowerCase()

    const generateDateSelectionUpdate = ({ from, to }: DateSelection) => {
      const updatedFrom = label === 'from' ? { ...from, [lowercasedField]: key } : { ...from }
      const updatedTo = label === 'to' ? { ...to, [lowercasedField]: key } : { ...to }
      const payload = { from: updatedFrom, to: updatedTo }

      return payload
    }

    setDateRange(generateDateSelectionUpdate)
  }

  function checkDateRangeValidity() {
    const { from, to } = dateRange
    if (from.year > to.year) return false
    if (from.year === to.year && from.month > to.month) return false
    return true
  }

  const handleValidateDateRange = () => {
    const isDateRangeValid = checkDateRangeValidity()
    if (!isDateRangeValid) {
      alert('Invalid date range')
      return
    }

    onDateRangeChange(dateRange)
  }

  return (
    <>
      <YearMonthSelector<DateUnitField>
        label='From'
        yearOptions={yearOptions}
        monthOptions={monthOptions}
        onChange={(e, field) => handleChangePeriod(e, { field, label: 'from' })}
        selectors={['Year', 'Month']}
      />
      <br />
      <YearMonthSelector<DateUnitField>
        label='To'
        yearOptions={yearOptions}
        monthOptions={monthOptions}
        onChange={(e, field) => handleChangePeriod(e, { field, label: 'to' })}
        selectors={['Year', 'Month']}
      />
      <ButtonComponent
        onClick={handleValidateDateRange}
        key={'validate-button'}
        label='Validate'
        sx={{
          backgroundColor: 'red',
          color: 'white',
        }}
      />
    </>
  )
}

export default YearMonthComponent
