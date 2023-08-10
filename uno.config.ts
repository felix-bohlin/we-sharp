import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirectives()],
  shortcuts: {
    'text-main': 'text-zinc-800 @dark:text-zinc-200',
  },
})
