import type { ButtonProps } from '@mui/material/Button'
import Button from '@mui/material/Button'
import type { FC } from 'react'

type ButtonComponentProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  label: string
} & ButtonProps

const ButtonComponent: FC<ButtonComponentProps> = ({ onClick, label, ...rest }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(event)
  }

  return (
    <Button data-testid='custom-button-id' onClick={handleClick} {...rest}>
      {label}
    </Button>
  )
}

export default ButtonComponent
