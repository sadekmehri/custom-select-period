import { fireEvent, render } from '@testing-library/react'
import SelectComponent from '.'
import type { StringValuedKey } from 'src/types'
import { SelectChangeEvent } from '@mui/material/Select'

describe('custom-select-component', () => {
  let onChangeMock: jest.Mock<SelectChangeEvent<string>>

  const options: Array<StringValuedKey> = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
  ]

  beforeEach(() => {
    onChangeMock = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the options passed as props', () => {
    // Arrange
    // Act
    const { getByTestId } = render(<SelectComponent options={options} onChange={onChangeMock} />)
    const select = getByTestId('custom-select-id')
    // Assert
    expect(select).toBeInTheDocument()
  })

  it('calls onChange callback with selected option', () => {
    const { getByTestId } = render(<SelectComponent options={options} onChange={onChangeMock} />)

    const selectElement = getByTestId('custom-select-id')
    fireEvent.change(selectElement, { target: { value: '2' } })

    // Ensure onChange is called with the correct option
    expect(onChangeMock).toHaveBeenCalledWith({ key: '2', value: '2' })

    // Optionally, you can check if the selected option is displayed in the component
    expect((selectElement as HTMLSelectElement).value).toBe('2')
  })
})
