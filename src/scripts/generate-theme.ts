import type { ThemeColors } from '@/types/settings'
import chroma from 'chroma-js'


function colorToString(colorArray: number[]) {
  return `oklch(${colorArray.join(', ')})`
}

function getThemeColors(primary: string): ThemeColors {
  const c = chroma(primary)

  return {
    '--c-primary': colorToString(c.oklch()),
    '--c-primary-active': colorToString(c.darken(0.5).oklch()),
  }
}

export const theme = getThemeColors('#ff0000')


