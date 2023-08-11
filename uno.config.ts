import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirectives()],
  shortcuts: {
    'bg-main': 'bg-slate-50 @dark:bg-zinc-900',

    'text-main': 'text-zinc-800 @dark:text-zinc-200',
  },
})
