import { StringValuedKey } from 'src/types'
import DateRangeUtils from './date-range'
import DateUtils from './date'

describe('date-range utils', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('Should generate year range options', () => {
    // Arrange
    const startingYear: string = '2023'
    const numberOfYears: number = 10
    const option: StringValuedKey = { key: startingYear, value: startingYear }
    // Act
    const options: Array<StringValuedKey> = DateRangeUtils.generateYearRangeOptions(
      Number(startingYear),
      numberOfYears,
    )
    // Assert
    expect(options).toHaveLength(numberOfYears)
    expect(options).toContainEqual(option)
  })

  it('Should generate month range options', () => {
    // Arrange
    const numberOfYears: number = 10
    const option: StringValuedKey = { key: '2022', value: '2022' }

    jest.mock('./date-range', () => ({
      generateYearRangeOptions: jest.fn(() => [option]),
    }))

    // Act
    const options = DateRangeUtils.generateNbrYearsFromCurrentYearOptions(numberOfYears)
    // Assert
    expect(options).toContainEqual(option)
  })

  it('Should generate default month range options', () => {
    // Arrange
    const currentYear = 2021
    DateUtils.getCurrentYear = jest.fn(() => currentYear)
    // Act
    const defaultOption = DateRangeUtils.getDefaultDateRangeValue()
    // Assert
    expect(defaultOption.from.year).toEqual(currentYear)
    expect(defaultOption.to.year).toEqual(currentYear)
  })

  it('Should return month options', () => {
    // Arrange
    const months: Array<StringValuedKey> = [{ key: '1', value: 'January' }]
    DateUtils.generateMonths = jest.fn(() => months)
    // Act
    const monthOptions = DateRangeUtils.getMonthOptions()
    // Assert
    expect(monthOptions).toContainEqual(months[0])
  })
})
