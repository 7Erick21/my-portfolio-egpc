'use client'

import { Box } from '@mui/material'
import React, { FC } from 'react'

import { NavDefaults } from './Nav.defaults'
import styles from './Nav.module.sass'

export const Nav:FC = () => {
  return (
    <Box component='article' className={styles.Nav}>
      {NavDefaults.map(({
        IconNav, url
      }, idx)=>(
        <Box key={idx}>
          <IconNav />
          {url}
        </Box>
      ))}
    </Box>
  )
}
