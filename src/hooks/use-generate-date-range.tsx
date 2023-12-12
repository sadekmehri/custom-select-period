import { useState, useCallback, FunctionComponent } from 'react'

/**
 *
 * @param initialValue  The initial value of the period range
 * @param componentsMap  The map of components to be rendered based on the option selected in the main select component
 */
type useGenerateDateRangeParams<T> = {
  initialValue: T
  componentsMap: Record<
    string,
    FunctionComponent<{
      onDateRangeChange: (periodRange: T) => void
    }>
  >
}

const useGenerateDateRange = <T extends Record<string, unknown>>({
  componentsMap,
  initialValue,
}: useGenerateDateRangeParams<T>) => {
  const [periodRange, setPeriodRange] = useState<T>(initialValue)

  /**
   * This function will handle the change of the period range
   * @param periodRange  The period range to be set
   */
  const handlePeriodRangeChange = useCallback((periodRange: T) => {
    setPeriodRange(periodRange)
  }, [])

  /**
   * This function will render the component based on the option selected in the main select component
   * @param option  The option selected in the main select component
   * @returns The component to be rendered
   */
  const renderDateRangeComponent = (option: keyof typeof componentsMap) => {
    const Component = componentsMap[option]
    if (!Component) return null
    return <Component onDateRangeChange={handlePeriodRangeChange} />
  }

  /**
   * This function will return the current period range
   * @returns The current period range based on rendred component and its state
   */
  const getPeriodRange = () => {
    return periodRange
  }

  return {
    getPeriodRange,
    renderDateRangeComponent,
  }
}

export default useGenerateDateRange
