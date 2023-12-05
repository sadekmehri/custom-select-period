import { useState, type FC, ChangeEvent } from 'react'
import {
  CustomizedDateValue,
  DateSelection,
  DateUnitField,
  DateUnitFunction,
  MainChoiceIndexes,
  MainChoicesToIndexesMap,
  PeriodSpecification,
  mainSelectOptions,
  monthOptions,
} from './types'
import { getMonth, getYear } from 'date-fns'
import DateUtils from './utils/date'
import Select from './components/Select'
import YearMonthSelector from './components/YearMonthSelector'

function defaultCrtieriaValuesFactory(choice: MainChoiceIndexes) {
  const defaultCrtieriaValues = {
    '1': getDefaultCurrentYearPayload,
    '2': getDefaultPreviousYearPayload,
    '3': getDefaultSelectYearPayload,
    '4': getDefaultSelectPeriodPayload,
  }

  function getDefaultCurrentYearPayload() {
    const currentDate = new Date()
    const currentYear = getYear(currentDate)

    return {
      id: '1',
      value: currentYear,
    }
  }

  function getDefaultPreviousYearPayload() {
    const currentDate = new Date()
    const previousYear = getYear(currentDate) - 1

    return {
      id: '2',
      value: previousYear,
    }
  }

  function getDefaultSelectYearPayload() {
    const currentDate = new Date()
    const currentYear = getYear(currentDate)

    return {
      id: '3',
      value: currentYear,
    }
  }

  function getDefaultSelectPeriodPayload() {
    const currentDate = new Date()
    const currentYear = getYear(currentDate)
    const currentMonth = getMonth(currentDate) + 1

    return {
      id: '4',
      value: {
        from: {
          year: currentYear,
          month: 1,
        },
        to: {
          year: currentYear,
          month: currentMonth,
        },
      },
    }
  }

  return defaultCrtieriaValues[choice]
}

const dateValueExtractorsMap: Record<DateUnitField, DateUnitFunction> = {
  month: DateUtils.getSelectedMonthOrDefault,
  year: DateUtils.getSelectedYearOrDefault,
}

const App: FC = () => {
  const [mainOption, setMainOption] = useState<MainChoiceIndexes>('1')
  const [currentCriteria, setCurrentCriteria] = useState<CustomizedDateValue>({
    id: '1',
    value: getYear(new Date()),
  })

  function resetCurrentCriteriaBasedOnSelectedMainOption(selectedOption: MainChoiceIndexes) {
    const generatePayload = defaultCrtieriaValuesFactory(selectedOption)
    const payload = generatePayload()
    setCurrentCriteria(payload as CustomizedDateValue)
  }

  function handleChangeMainOption(event: ChangeEvent<HTMLSelectElement>) {
    const selectedOption = event.target.value as MainChoiceIndexes
    setMainOption(selectedOption)
    resetCurrentCriteriaBasedOnSelectedMainOption(selectedOption)
  }

  function generateLastTenYearsOptions() {
    const currentYear = getYear(new Date())
    const yearOptions = DateUtils.generateYearRangeOptions(currentYear, 10)
    yearOptions.unshift({ key: '', value: 'Year' })
    return yearOptions
  }

  // Handle Select Year Option
  function handleChangeSelectYearOption(event: ChangeEvent<HTMLSelectElement>) {
    const selectedOption = event.target.value
    setCurrentCriteria({
      id: '3',
      value: DateUtils.getSelectedYearOrDefault(selectedOption),
    })
  }

  // Handle Select Period Option (From and To)
  function handleChangePeriod(event: ChangeEvent<HTMLSelectElement>, meta: PeriodSpecification) {
    const { field, label } = meta
    const value = dateValueExtractorsMap[field](event.target.value)

    if (label === 'from') {
      setCurrentCriteria((prevCriteria) => ({
        id: '4',
        value: {
          from: {
            ...(prevCriteria.value as DateSelection).from,
            [field]: value,
          },
          to: {
            ...(prevCriteria.value as DateSelection).to,
          },
        },
      }))
    }

    if (label === 'to') {
      setCurrentCriteria((prevCriteria) => ({
        id: '4',
        value: {
          from: {
            ...(prevCriteria.value as DateSelection).from,
          },
          to: {
            ...(prevCriteria.value as DateSelection).to,
            [field]: value,
          },
        },
      }))
    }
  }

  function renderComponentBasedOnSelectedMainOption() {
    if (mainOption === MainChoicesToIndexesMap.SELECT_YEAR) {
      return (
        <Select options={generateLastTenYearsOptions()} onChange={handleChangeSelectYearOption} />
      )
    }

    if (mainOption === MainChoicesToIndexesMap.SELECT_PERIOD) {
      return (
        <>
          <YearMonthSelector<DateUnitField>
            label='From'
            yearOptions={generateLastTenYearsOptions()}
            monthOptions={monthOptions}
            onChange={(e, field) => handleChangePeriod(e, { field, label: 'from' })}
            selectors={['year', 'month']}
          />
          <br />
          <YearMonthSelector<DateUnitField>
            label='To'
            yearOptions={generateLastTenYearsOptions()}
            monthOptions={monthOptions}
            onChange={(e, field) => handleChangePeriod(e, { field, label: 'to' })}
            selectors={['year', 'month']}
          />
        </>
      )
    }

    return null
  }

  return (
    <>
      <h1>React Typescript</h1>
      {JSON.stringify(mainOption)}
      <br />
      {JSON.stringify(currentCriteria)}
      <br />
      {/* Main Option */}
      <Select options={mainSelectOptions} onChange={handleChangeMainOption} />
      {renderComponentBasedOnSelectedMainOption()}
    </>
  )
}

export default App
