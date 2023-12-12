import { fireEvent, render } from '@testing-library/react'
import SelectYearComponent from '.'
import type { DateSelection, StringValuedKey } from 'src/types'
import DateUtils from 'src/utils/date'
import { DEFAULT_YEAR } from 'src/constants/date-range'

jest.mock('../../CustomSelect', () => {
  const { selectMock } = jest.requireActual('./../../../../__mocks__/selectMock')

  return {
    __esModule: true,
    default: selectMock,
  }
})

describe('select-year-component', () => {
  let mockOnDateRangeChange: jest.Mock<void>
  const currentYear = DateUtils.getCurrentYear()
  const payload: DateSelection = {
    from: { year: currentYear, month: 1 },
    to: { year: currentYear, month: 12 },
  }

  beforeEach(() => {
    mockOnDateRangeChange = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should return the default range value', () => {
    // Arrange
    // Act
    // Assert
    const { getAllByRole } = render(
      <SelectYearComponent onDateRangeChange={mockOnDateRangeChange} />,
    )

    // Act
    const elements = getAllByRole('select-id')
    fireEvent.change(elements[0], { target: { value: currentYear } })

    // Assert
    expect(mockOnDateRangeChange).toHaveBeenCalledTimes(1)
    expect(mockOnDateRangeChange).toHaveBeenCalledWith(payload)
  })

  it('Should fire the onClick event', () => {
    // Arrange
    const { getAllByRole } = render(
      <SelectYearComponent onDateRangeChange={mockOnDateRangeChange} />,
    )

    // Act
    const elements = getAllByRole('select-id')
    fireEvent.change(elements[0], { target: { value: DEFAULT_YEAR } })

    // Assert
    expect(mockOnDateRangeChange).toHaveBeenCalledTimes(1)
    expect(mockOnDateRangeChange).toHaveBeenCalledWith(payload)
  })
})
