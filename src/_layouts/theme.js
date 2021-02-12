const SPACING_UNIT = 8

export const theme = {
  fonts: {
    primary: 'Raleway, sans-serif',
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    brand:  '#FDC600',
    text: {
      primary: '#FFFFFF',
      secondary: '#A6A6A6'
    },
    ui: {
      primary: '#000000',
      secondary: '#A6A6A6',
      background: '#202020'
    },
    support: {
      success: '#5AA700',
      error: '#CE3336',
      warning: '#BFBEBE',
      neutral: '#5E9ED6',
      info: '#A6A6A6'
    }
  },
  spacing: {
    unit: SPACING_UNIT,
    xsmall: `${SPACING_UNIT}px`,
    small: `${SPACING_UNIT * 2}px`,
    normal: `${SPACING_UNIT * 3}px`,
    large: `${SPACING_UNIT * 4}px`,
    xlarge: `${SPACING_UNIT * 5}px`,
    xxlarge: `${SPACING_UNIT * 6}px`
  }
}
