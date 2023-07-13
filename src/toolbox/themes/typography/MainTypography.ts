import { TypographyOptions } from '@mui/material/styles/createTypography'

export const MainTypography: TypographyOptions = {
  fontFamily: ['var(--font-montserrat_alternates)', 'sans-serif'].join(','),
  h1: {
    fontSize: 'clamp(1.25rem, 1.0511rem + 0.9943vw, 2.125rem)',
    lineHeight: 'clamp(1.5238rem, 1.7348vw + 0.7171rem, 2.5906rem)',
    letterSpacing: '-0.02em',
    fontWeight: 700,
  },
  h2: {
    fontSize: 'clamp(1rem, 0.9057rem + 0.3643vw, 1.25rem)',
    lineHeight: '1.5238rem',
    letterSpacing: '-0.02em',
    fontWeight: 700,
  },
  caption: {
    fontSize: '1.125rem',
    lineHeight: '1.375rem',
    letterSpacing: '-0.02em',
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '1rem',
    lineHeight: '1.2188rem',
    letterSpacing: '-0.02em',
    fontWeight: 600,
  },
  body1: {
    fontSize: '0.875rem',
    lineHeight: '1.0938rem',
    letterSpacing: '-0.02em',
    fontWeight: 400,
  },
  body2: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
    letterSpacing: '-0.02em',
    fontWeight: 400,
  },
  button: {
    fontSize: '0.875rem',
    lineHeight: '1.0938rem',
    letterSpacing: '-0.02em',
    textTransform: 'none',
    fontWeight: 600,
  },
  h3: {
    fontSize: 'clamp(0.875rem, 0.6189rem + 0.5854vw, 1.25rem)',
    lineHeight: '1.5238rem',
    letterSpacing: '-0.02em',
    fontWeight: 700,
  },
}
