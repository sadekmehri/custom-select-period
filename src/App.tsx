import { useState, type FC } from 'react'
import type {
  DateRangePayloadFunction,
  DateSelection,
  DateUnitField,
  MainChoiceIndexes,
  PeriodSpecification,
  StringValuedKey,
} from './components/CustomSelect/types'
import DateUtils from './components/CustomSelect/utils/date'
import YearMonthSelector from './components/CustomSelect/YearMonthSelector'
import {
  MainChoicesToIndexesMap,
  mainSelectOptions,
  DEFAULT_MONTH,
  DEFAULT_YEAR,
  defaultDateValueExtractorsMap,
} from './components/CustomSelect/DateSelectionConstants'

import SelectComponent from './components/CustomSelect/Select'

function getDefaultCrtieriaValueFactory(choice: MainChoiceIndexes) {
  const currentYear = DateUtils.getCurrentYear()

  const defaultCrtieriaValues: Record<MainChoiceIndexes, DateRangePayloadFunction> = {
    '1': getDefaultCurrentYearPayload,
    '2': getDefaultPreviousYearPayload,
    '3': getDefaultCurrentYearPayload,
    '4': getDefaultCurrentYearPayload,
  }

  function getDefaultCurrentYearPayload() {
    return {
      from: {
        year: currentYear,
        month: 1,
      },
      to: {
        year: currentYear,
        month: 12,
      },
    }
  }

  function getDefaultPreviousYearPayload() {
    return {
      from: {
        year: currentYear - 1,
        month: 1,
      },
      to: {
        year: currentYear - 1,
        month: 12,
      },
    }
  }

  return defaultCrtieriaValues[choice]
}

const App: FC = () => {
  const [mainOption, setMainOption] = useState<MainChoiceIndexes>(
    MainChoicesToIndexesMap.CURRENT_YEAR,
  )
  const [currentCriteria, setCurrentCriteria] = useState<DateSelection>(
    getDefaultCrtieriaValueFactory(MainChoicesToIndexesMap.CURRENT_YEAR)(),
  )

  // Reset Current Criteria Based on Selected Main Option (Current Year, Previous Year, Select Year, Select Period)
  function resetCurrentCriteriaBasedOnSelectedMainOption(selectedOption: MainChoiceIndexes) {
    const generatePayload = getDefaultCrtieriaValueFactory(selectedOption)
    const payload = generatePayload()
    setCurrentCriteria(payload)
  }

  // Handle Main Option Change Event (Current Year, Previous Year, Select Year, Select Period)
  function handleChangeMainOption(selectedOption: StringValuedKey) {
    const currentOption = selectedOption.key as MainChoiceIndexes
    setMainOption(currentOption)
    resetCurrentCriteriaBasedOnSelectedMainOption(currentOption)
  }

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

  // Generate Last Ten Years Options for Select Year Option (Main Option)
  function generateLastTenYearsOptions() {
    const currentYear = DateUtils.getCurrentYear()
    const yearOptions = generateYearRangeOptions(currentYear, 10)
    yearOptions.unshift({ key: DEFAULT_YEAR, value: DEFAULT_YEAR })
    return yearOptions
  }

  function generateMonthOptions() {
    const monthOptions = DateUtils.generateMonths()
    monthOptions.unshift({ key: DEFAULT_MONTH, value: DEFAULT_MONTH })
    return monthOptions
  }

  // This function is responsible for handling the default values for the month and year if the user selects the default option
  function handleDefaultMonthYearSelection(selectedOption: StringValuedKey) {
    const key = selectedOption.key.toLocaleLowerCase()
    const extractDateUnitFieldFunction = defaultDateValueExtractorsMap[key as DateUnitField]
    return !extractDateUnitFieldFunction ? Number(key) : extractDateUnitFieldFunction()
  }

  // Handle Select Year Option (Main Option) Change Event (From and To)
  function handleChangeSelectYearOption(selectedOption: StringValuedKey) {
    const key = handleDefaultMonthYearSelection(selectedOption)

    const payload = {
      from: {
        month: 1,
        year: key,
      },
      to: {
        month: 12,
        year: key,
      },
    }

    setCurrentCriteria(payload)
  }

  // Handle Select Period Option (From and To)
  function handleChangePeriod(selectedOption: StringValuedKey, meta: PeriodSpecification) {
    const { field, label } = meta
    const key = handleDefaultMonthYearSelection(selectedOption)

    const generateDateSelectionUpdate = ({ from, to }: DateSelection) => {
      const updatedFrom = label === 'from' ? { ...from, [field]: key } : { ...from }
      const updatedTo = label === 'to' ? { ...to, [field]: key } : { ...to }
      const payload = { from: updatedFrom, to: updatedTo }

      return payload
    }

    setCurrentCriteria(generateDateSelectionUpdate)
  }

  // Render Component Based on Selected Main Option (Current Year, Previous Year, Select Year, Select Period)
  function renderComponentBasedOnSelectedMainOption() {
    if (mainOption === MainChoicesToIndexesMap.SELECT_YEAR) {
      return (
        <SelectComponent
          options={generateLastTenYearsOptions()}
          onChange={handleChangeSelectYearOption}
        />
      )
    }

    if (mainOption === MainChoicesToIndexesMap.SELECT_PERIOD) {
      return (
        <>
          <YearMonthSelector<DateUnitField>
            label='From'
            yearOptions={generateLastTenYearsOptions()}
            monthOptions={generateMonthOptions()}
            onChange={(e, field) => handleChangePeriod(e, { field, label: 'from' })}
            selectors={['year', 'month']}
          />
          <br />
          <YearMonthSelector<DateUnitField>
            label='To'
            yearOptions={generateLastTenYearsOptions()}
            monthOptions={generateMonthOptions()}
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
      <SelectComponent options={mainSelectOptions} onChange={handleChangeMainOption} />
      {renderComponentBasedOnSelectedMainOption()}
    </>
  )
}

export default App
