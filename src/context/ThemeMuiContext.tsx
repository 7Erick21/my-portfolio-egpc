'use client'

import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  StyledEngineProvider,
} from '@mui/material'
import { FC } from 'react'

import { ETheme } from '@/toolbox/enums/Theme'
import { IContextProviders } from '@/toolbox/interface/Context'
import { THEMES } from '@/toolbox/themes/Themes'


type IThemeMuiProviderProps = IContextProviders

export const ThemeMuiContextProvider: FC<IThemeMuiProviderProps> = ({ children }) => {
  const themeMui = extendTheme(THEMES)

  return (
    <CssVarsProvider theme={themeMui} defaultMode={ETheme.SYSTEM}>
      <CssBaseline/>
      <StyledEngineProvider injectFirst>
        {children}
      </StyledEngineProvider>
    </CssVarsProvider>
  )
}
