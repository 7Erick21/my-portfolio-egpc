'use client'

import {
  Box, useColorScheme
} from '@mui/material'
import { motion } from 'framer-motion'
import React, {
  FC, useCallback, useEffect
} from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type {
  Container, Engine
} from 'tsparticles-engine'

import { handleThemeParticles } from '@/toolbox/constants/Particles'
import { ETheme } from '@/toolbox/enums/Theme'
import { IContextProviders } from '@/toolbox/interface/Context'

import { Nav } from '../components/Nav'
import styles from './Layout.module.sass'

type ILayoutProps = IContextProviders

export const Layout:FC<ILayoutProps> = ({ children }) => {
  const { mode } = useColorScheme()


  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])
  
  const particlesLoaded = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    async (container: Container | undefined) => { },
    []
  )
 
  useEffect(()=>{console.log(mode)}, [mode])

  // const [mounted, setMounted] = useState<boolean>(false)
  
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   // for server-side rendering
  //   // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  //   return null
  // }

  // const backgroundParticles = mode === ETheme.DARK ? '#282C34' : '#AFAFAF'
  // const linesParticles = mode === ETheme.DARK ? '#36A2EB' : '#C19A6B'
  // const colorParticles = mode === ETheme.DARK ? '#61C0BF' : '#A65343'



  

  return (
    <Box className={styles.Content}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={handleThemeParticles({
          background:mode === ETheme.DARK ? '#282C34' : '#AFAFAF',
          particles:mode === ETheme.DARK ? '#61C0BF' : '#A65343',
          lines:mode === ETheme.DARK ? '#36A2EB' : '#C19A6B'
        })}
      />
      <motion.article className={styles.Main} >
        {children}
        <Nav />
      </motion.article>
    </Box>
  )
}

