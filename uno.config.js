import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  shortcuts: [
    ['center', 'flex ma'],
    [/^size(\d+)$/, ([, c]) => `w${c} h${c}`],
  ],
  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      secondary: '#333',
    },
    animation: {
      keyframes: {
        'blob-bounce': `{
          0% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
          25% {
            transform: translate(-100%, -100%) translate3d(100%, 0, 0);
          }
          50% {
            transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
          }
          75% {
            transform: translate(-100%, -100%) translate3d(0, 100%, 0);
          }
          100% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
        }`,
      },
      durations: {
        'blob-bounce': '5s',
      },
      timingFns: {
        'blob-bounce': 'ease',
      },
      counts: {
        'blob-bounce': 'infinite',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        lato: [
          {
            name: 'Lato',
            weights: [400, 700],
          },
        ],
      },
    }),
    presetRemToPx({ baseFontSize: 4 }),
  ],
})
