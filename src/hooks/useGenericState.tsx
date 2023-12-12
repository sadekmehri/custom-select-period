import { useState } from 'react'

const useGenericState = <T,>(initialValue: T) => {
  const [genericValue, setGenericValue] = useState<T>(initialValue)

  const handleValueChange = (value: T) => {
    setGenericValue(value)
  }

  const getGenericValue = () => {
    return genericValue
  }

  return { getGenericValue, handleValueChange }
}

export default useGenericState
