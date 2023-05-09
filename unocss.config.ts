import { presetAnu } from 'anu-vue'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'base-hover': 'hover:color-blue-5 cursor-pointer transition-color transition-300',
  },
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),

    presetAnu(),
    presetThemeDefault(),
  ],
  include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
