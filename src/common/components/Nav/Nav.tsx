'use client'

import {
  Box, useTheme
} from '@mui/material'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, {
  FC, useEffect, useState
} from 'react'

import { NavDefaults } from './Nav.defaults'
import styles from './Nav.module.sass'



export const Nav: FC= () => {
  const theme = useTheme()

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
    <motion.article className={styles.Nav} drag='y' dragConstraints={{
      top: -250,
      bottom: 150
    }} style={{ backgroundColor: theme.palette.primary.main }}>
      {NavDefaults.map(({
        IconNav, url, nav
      }, idx) => (
        <Link key={idx} href={url}>
          <Box key={idx}>
            <IconNav aria-label={nav} />
          </Box>
        </Link>
      ))}
    </motion.article>
  )
}
