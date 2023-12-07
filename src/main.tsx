import React, { FC } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useThemeContext } from './theme/ThemeContextProvider.tsx'
import { CustomTheme } from './theme/types/index.ts'
import { ThemeProvider } from '@mui/material'

const Main: FC = () => {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider<CustomTheme> theme={theme}>
      <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
