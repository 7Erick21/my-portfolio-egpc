'use client'

import { Box } from '@mui/material'
import React, { FC } from 'react'

import { NavDefaults } from './Nav.defaults'
import { motion } from 'framer-motion'
import styles from './Nav.module.sass'
import { INavProps } from './Nav.interface'
import Link from 'next/link'



export const Nav: FC<INavProps> = ({ refDragContaint }) => {
  return (
    <motion.article className={styles.Nav} drag='y' dragConstraints={{ top: -250, bottom: 150 }}>
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
