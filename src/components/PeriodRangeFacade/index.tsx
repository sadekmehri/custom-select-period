import { useEffect, useLayoutEffect, useState } from 'react'
import useGenerateDateRange from 'src/hooks/useGenerateDateRange'
import { DateRangeComponentMap, GenericObject, StringValuedKey } from 'src/types'
import SelectComponent from '../CustomSelect'

//mainOptions: Array<ComponentProps<typeof SelectComponent>['options']>,

type PeriodRangeFacadeProps<T> = {
  initialValue: T
  onPeriodChange: (datePeriod: T) => void
  mainOptions: Array<StringValuedKey>
  componentsMap: DateRangeComponentMap<T>
}

function PeriodRangeFacade<T extends GenericObject>(props: PeriodRangeFacadeProps<T>) {
  const { initialValue, componentsMap, mainOptions, onPeriodChange } = props
  const { getPeriodRange, renderDateRangeComponent, onSetPeriodChange } = useGenerateDateRange<T>({
    initialValue,
    componentsMap,
    callback: onPeriodChange,
  })

  const [activeOption, setActiveOption] = useState<string>('0')

  const handleChangeMainOption = (selectedOption: StringValuedKey) => {
    onSetPeriodChange(initialValue)
    setActiveOption(selectedOption.key)
  }

  useEffect(() => {
    onPeriodChange(initialValue)
  }, [activeOption])

  return (
    <>
      <h1>PeriodRangeFacade</h1>
      <p>Main Option: {JSON.stringify(activeOption, null, 2)}</p>
      <p>Date Range: {JSON.stringify(getPeriodRange(), null, 2)}</p>
      <SelectComponent
        key={'select-main-option'}
        onChange={handleChangeMainOption}
        options={mainOptions}
      />
      {renderDateRangeComponent(activeOption)}
    </>
  )
}

export default PeriodRangeFacade
