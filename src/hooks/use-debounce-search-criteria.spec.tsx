import { renderHook } from '@testing-library/react-hooks'
import { useDebounce } from './useDebounce' // assuming the path is correct
import useDebounceSearchCriteria from './useDebouncedSearchCriteria'
import { act } from 'react-dom/test-utils'

jest.mock('./useDebounce', () => ({
  useDebounce: jest.fn((value) => value),
}))

describe('useDebounceSearchCriteria', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('Should handle search criteria and debounce it', () => {
    // Arrange
    const { result } = renderHook(() => useDebounceSearchCriteria())

    // Assert
    expect(useDebounce).toHaveBeenCalledTimes(1)

    // Act
    act(() => {
      result.current.handleSearch('test')
    })

    // Assert
    expect(result.current.getSearchCriteria()).toEqual('test')

    // Act
    act(() => {
      jest.advanceTimersByTime(1)
    })

    // Assert
    expect(result.current.getDebounceSearchCriteria()).toEqual('test')
  })
})
