'use client'

import {
  Box, useColorScheme
} from '@mui/material'
import React, {
  FC, useCallback, useEffect
} from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type {
  Container, Engine
} from 'tsparticles-engine'

import { handleThemeParticles } from '@/toolbox/constants/Particles'
import { ELocalStorage } from '@/toolbox/enums/LocalStorage'
import { ETheme } from '@/toolbox/enums/Theme'
import { useLocalStorage } from '@/toolbox/hooks/LocalStorage'
import { IContextProviders } from '@/toolbox/interface/Context'

import { Nav } from '../components/Nav'
import styles from './Layout.module.sass'

type ILayoutProps = IContextProviders

export const Layout:FC<ILayoutProps> = ({ children }) => {
  const {
    mode, setMode
  } = useColorScheme()

  const {
    valueLocalStorage, setValueLocalStorage
  } = useLocalStorage<ETheme>({
    key: ELocalStorage.ETheme,
    initalValue: ETheme.SYSTEM
  })

  const backgroundParticles = mode === ETheme.DARK ? '#282C34' : '#AFAFAF'
  const linesParticles = mode === ETheme.DARK ? '#36A2EB' : '#C19A6B'
  const colorParticles = mode === ETheme.DARK ? '#61C0BF' : '#A65343'

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])
  
  const particlesLoaded = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    async (container: Container | undefined) => { },
    []
  )

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if(valueLocalStorage === ETheme.SYSTEM) {
      if(mediaQuery.matches) {setMode(ETheme.DARK)}
      else {setMode(ETheme.LIGHT)}
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{setValueLocalStorage(mode as ETheme)}, [mode])

  return (
    <Box className={styles.Content}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={handleThemeParticles({
          background:backgroundParticles,
          particles:colorParticles,
          lines:linesParticles
        })}
      />
      <Box component='main' className={styles.Main}>
        {children}
        <Nav />
      </Box>
    </Box>
  )
}

