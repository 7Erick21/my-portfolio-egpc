import { CssVarsThemeOptions } from '@mui/material'

import { LightPalette } from '../palettes'
import { DarkPalette } from '../palettes/DarkPalette'
import { MainTypography } from '../typography'

export const ThemeMui: CssVarsThemeOptions = {
  colorSchemes:{
    dark:{ palette:DarkPalette, },
    light:{ palette: LightPalette }
  },
  typography:MainTypography
}

