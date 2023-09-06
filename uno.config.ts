import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons(), presetWebFonts({
    provider: 'google',
    fonts: {
      mukta: {
        name: 'Mukta',
        weights: ['400', '600', '700'],
        italic: true,
      },

    },
  })],
  transformers: [transformerDirectives()],

  shortcuts: {
    // background
    'bg-main': 'bg-slate-50 @dark:bg-zinc-900',
    'bg-1': 'bg-white @dark:bg-zinc-800',
    'bg-2': 'bg-zinc-200 @dark:bg-zinc-400/10',

    // text
    'text-primary': 'text-zinc-800 @dark:text-zinc-200',
    'text-secondary': 'text-zinc-500 @dark:text-zinc-500',

    // border
    'border-color-1': 'border-zinc-200 @dark:border-zinc-400/10',

    // ring
    'ring-color-1': 'ring-zinc-500 @dark:ring-zinc-500',
    'ring-color-1-hover': 'ring-zinc-800 @dark:ring-zinc-600',

    // input
    'input-base-focus': 'focus:outline-none focus:ring-color-1-hover',
    'input-base-disabled': 'disabled:pointer-events-none disabled:bg-gray-500/5 disabled:text-gray-500/50',
    'input-base': 'p2 rounded w-full ring-zinc-400 @dark:ring-zinc-700 ring-1 bg-2 text-inherit rounded input-base-focus input-base-disabled',

    // utils
    'w-page': 'w-[clamp(38ch,100%,120ch)]',
    'p-page': 'ps-4 pe-4',
    'm-page': 'ms-auto me-auto',

  },

  theme: {
    colors: {
      main: {
        DEFAULT: 'var(--c-main)',
        active: 'var(--c-main-active)',
      },
    },
  },
})
