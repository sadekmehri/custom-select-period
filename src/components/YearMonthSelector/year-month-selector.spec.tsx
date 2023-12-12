import { render, fireEvent } from '@testing-library/react'
import YearMonthSelector from '.'
import type { StringValuedKey } from 'src/types'

const options: Array<StringValuedKey> = [{ key: '2021', value: '2021' }]

jest.mock('../CustomSelect', () => {
  const { selectMock } = jest.requireActual('./../../../__mocks__/selectMock')

  return {
    __esModule: true,
    default: selectMock,
  }
})

describe('Year-Month-Selector', () => {
  const onChangeMock = jest.fn()
  const label: string = 'Test Label'

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should fire the onClick event', () => {
    // Arrange
    const { getAllByRole } = render(
      <YearMonthSelector<'from' | 'to'>
        label={label}
        selectors={['from', 'to']}
        monthOptions={options}
        yearOptions={options}
        onChange={onChangeMock}
      />,
    )

    // Act
    const elements = getAllByRole('select-id')
    fireEvent.change(elements[0], { target: { value: options[0].value } })
    fireEvent.change(elements[1], { target: { value: options[0].value } })

    // Assert
    expect(elements[0]).toBeInTheDocument()
    expect(onChangeMock).toHaveBeenCalled()
    expect(onChangeMock).toHaveBeenCalledWith(options[0], 'from')

    expect(elements[1]).toBeInTheDocument()
    expect(onChangeMock).toHaveBeenCalledWith(options[0], 'to')
  })
})
