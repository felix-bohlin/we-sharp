import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
  shortcuts: {
    'bg-main': 'bg-slate-50 @dark:bg-zinc-900',
    'bg-1': 'bg-white @dark:bg-zinc-800',
    'bg-2': 'bg-zinc-200 @dark:bg-zinc-400/10',

    'text-main': 'text-zinc-800 @dark:text-zinc-200',

    'border-color-1': 'border-zinc-200 @dark:border-zinc-400/10',

    'ring-color-1': 'ring-zinc-200 @dark:ring-zinc-400/10',
    'ring-color-1-hover': 'ring-zinc-800 @dark:ring-zinc-600',
  },
})
