import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],

  shortcuts: {
    // background
    'bg-main': 'bg-slate-50 @dark:bg-zinc-900',
    'bg-1': 'bg-white @dark:bg-zinc-800',
    'bg-2': 'bg-zinc-200 @dark:bg-zinc-400/10',

    // text
    'text-main': 'text-zinc-800 @dark:text-zinc-200',

    // border
    'border-color-1': 'border-zinc-200 @dark:border-zinc-400/10',

    // ring
    'ring-color-1': 'ring-zinc-200 @dark:ring-zinc-400/10',
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
      primary: {
        DEFAULT: 'var(--c-primary)',
        active: 'var(--c-primary-active)',
      },
    },
  },
})
