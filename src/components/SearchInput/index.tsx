import { Input, InputProps } from '@mui/material'
import type { ChangeEvent, FC } from 'react'

interface SearchInputProps extends InputProps {
  onSearch: (text: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ onSearch, ...other }) => {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const text = event.target.value
    onSearch(text)
  }

  return (
    <Input
      inputProps={{ 'data-testid': 'search-input-id' }}
      {...other}
      onChange={handleInputChange}
    />
  )
}

export default SearchInput
