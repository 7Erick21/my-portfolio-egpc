'use client'

import {
  Typography, useColorScheme, useTheme
} from '@mui/material'
import {
  useEffect, useState
} from 'react'

import { ETheme } from '@/toolbox/enums/Theme'

export default function Home () {
  const theme = useTheme()
  const { setMode } = useColorScheme()


  const handleDark = () => {
    setMode(ETheme.DARK)
  }

  const handleLight = () => {
    setMode(ETheme.LIGHT)
  }


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
    <div>
      <div onClick={handleDark} >
        <Typography color={theme.palette.primary.main}>dark</Typography>
      </div>
      <div onClick={handleLight} >
        <Typography color={theme.palette.primary.main}>light</Typography>
      </div>
    </div>
  )
}

