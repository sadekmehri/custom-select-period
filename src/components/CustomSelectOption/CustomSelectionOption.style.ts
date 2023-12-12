import styled from 'styled-components'
import Select, { SelectProps } from '@mui/material/Select'
import { FunctionComponent } from 'react'

const createStyledSelect = <T extends number | string>() => {
  return styled(Select as FunctionComponent<SelectProps<T>>)(({ theme }) => ({
    width: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    outline: 'none',
    marginBottom: 20,
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
    '&:focus': {
      borderColor: '#555',
    },
  }))
}

export const StyledStringSelect = createStyledSelect<string>()
