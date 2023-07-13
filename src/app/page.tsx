'use client'

import { useColorScheme } from '@mui/material'

import { ETheme } from '@/toolbox/enums/Theme'





export default function Home () {
  const {
    mode, setMode
  } = useColorScheme()

  console.log(mode)

  return (
    <div>
      <div onClick={()=>{setMode(ETheme.DARK)}} >
      dark
      </div>
      <div onClick={()=>{setMode(ETheme.LIGHT)}} >
      light
      </div>
    </div>
  )
}

