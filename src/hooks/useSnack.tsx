import Snackbar from '@mui/material/Snackbar'
import { type ComponentProps, type FC, useState, type PropsWithChildren } from 'react'

type SnackbarProps = ComponentProps<typeof Snackbar> & PropsWithChildren

type UseSnackType = () => {
  SnackbarComponent: FC<SnackbarProps>
  onToggleSnackBar: () => void
  onDismissSnackBar: () => void
  onOpenSnackBar: () => void
}

const useSnack: UseSnackType = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const onToggleSnackBar = () => setIsVisible(!isVisible)
  const onOpenSnackBar = () => setIsVisible(true)
  const onDismissSnackBar = () => setIsVisible(false)

  const SnackbarComponent: FC<SnackbarProps> = (props: SnackbarProps): JSX.Element => {
    const { children, ...rest } = props
    return (
      <Snackbar open={isVisible} onClose={onDismissSnackBar} {...rest}>
        {children}
      </Snackbar>
    )
  }

  return {
    SnackbarComponent,
    onToggleSnackBar,
    onDismissSnackBar,
    onOpenSnackBar,
  }
}

export default useSnack
