'use client'

import {
  Button, Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme, useColorScheme,
} from '@mui/material'
import {
  FC, useEffect, useState
} from 'react'

import { IContextProviders } from '@/toolbox/interface/Context'
import { THEMES } from '@/toolbox/themes/Themes'


type IThemeMuiProviderProps = IContextProviders

const ModeSwitcher = () => {
  const {
    mode, setMode
  } = useColorScheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null
  }

  return (
    <Button
      variant='outlined'
      onClick={() => {
        if (mode === 'light') {
          setMode('dark')
        } else {
          setMode('light')
        }
      }}
    >
      {mode === 'light' ? 'Light' : 'Dark'}
    </Button>
  )
}

export const ThemeMuiContextProvider: FC<IThemeMuiProviderProps> = ({ children }) => {
  
  const themeMui = extendTheme(THEMES)


  return (
    <CssVarsProvider theme={themeMui}>
      {/* <CssBaseline/> */}
      {/* <StyledEngineProvider injectFirst> */}
      <ModeSwitcher />
      {children}
      {/* </StyledEngineProvider> */}
    </CssVarsProvider>
  )
}
