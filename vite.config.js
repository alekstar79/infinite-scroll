/** @see [vitejs.dev/config]{@link https://vitejs.dev/config} */

import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

import vuetify from 'vite-plugin-vuetify'
import eslint from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'

/**
* @function
* @param {import('vite').ConfigEnv} config
* @returns {import('vite').UserConfig}
*/
const configFn = ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_URL,

    plugins: [vue(), vuetify(), eslint()],

    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.js', '.mjs', '.json', '.vue']
    },

    server: {
      open: './',
      proxy: {
        '/api': {
          target: env.API_SERVICE_URL,
          changeOrigin: true,
          ws: true
        }
      }
    },

    build: {
      // https://vitejs.dev/config/build-options.html#build-target
      target: 'esnext',
      // https://vitejs.dev/config/build-options.html#build-minify
      minify: 'esbuild',
      // https://vitejs.dev/config/build-options.html#build-rollupoptions
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'],
            vuetify: [
              'vuetify',
              'vuetify/components',
              'vuetify/directives'
            ]
          },
          plugins: []
        }
      }
    },

    esbuild: {
      drop: command === 'serve' ? [] : ['console'],
    }
  }
}

export default defineConfig(configFn)
