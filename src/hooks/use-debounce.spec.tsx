import { act, renderHook } from '@testing-library/react-hooks'
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('Should return the given value', () => {
    // Arrange
    const givenValue = 'value'
    // Act
    const { result } = renderHook(() => useDebounce(givenValue, 0))
    // Assert
    expect(result.current).toEqual(givenValue)
  })

  it('Should debounce value changes', () => {
    // Arrange
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 100 },
    })

    // Act
    rerender({ value: 'updated', delay: 100 })
    act(() => {
      jest.advanceTimersByTime(100)
    })

    // Assert
    expect(result.current).toBe('updated')
  })
})
