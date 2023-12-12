import { useState } from 'react'
import { useDebounce } from './useDebounce'

const useDebounceSearchCriteria = () => {
  const [searchCriteria, setSearchCriteria] = useState<string>('')
  const debounceSearchCriteria = useDebounce<string>(searchCriteria, 500)

  const handleSearch = (text: string) => {
    setSearchCriteria(text)
  }

  const getDebounceSearchCriteria = () => {
    return debounceSearchCriteria
  }

  const getSearchCriteria = () => {
    return searchCriteria
  }

  return { getDebounceSearchCriteria, getSearchCriteria, handleSearch }
}

export default useDebounceSearchCriteria
