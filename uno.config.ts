import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
  shortcuts: {
    'bg-main': 'bg-slate-50 @dark:bg-zinc-900',
    'bg-surface-1': 'bg-white @dark:bg-zinc-800',

    'text-main': 'text-zinc-800 @dark:text-zinc-200',
  },
})
