import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { OnuResolver } from 'onu-ui'

export default {
  plugins: [
    vue(),
    AutoImport({
      resolvers: [OnuResolver()],
      imports: [
        'vue',
        {
          '#imports': [
            'useFetch',
          ],
        },
      ],
    }),
    Components({
      resolvers: [OnuResolver()],
      dirs: ['./components'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  },
}
