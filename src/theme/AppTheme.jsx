import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./purpleTheme"
import { ThemeProvider } from "@emotion/react"


// eslint-disable-next-line react/prop-types
export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
    <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
