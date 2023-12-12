import { FormControl, InputLabel, MenuItem, Box } from '@mui/material'
import type { FC } from 'react'
import { StyledStringSelect } from './CustomSelectionOption.style'

const CustomSelectOption: FC = () => {
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <StyledStringSelect
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={'20'}
          label='Age'
          onChange={() => {}}
        >
          <MenuItem value={'10'}>Ten</MenuItem>
          <MenuItem value={'20'}>Twenty</MenuItem>
          <MenuItem value={'30'}>Thirty</MenuItem>
        </StyledStringSelect>
      </FormControl>
    </Box>
  )
}

export default CustomSelectOption
