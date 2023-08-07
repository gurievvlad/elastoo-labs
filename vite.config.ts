import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]'
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          if (
            /\.(mp4|ogg|mp3|wav|wma|flac|aac|3gp|avi|flv|mkv|mov|rmvb|ts|vob|webm|wmv)(\?.*)?$/i.test(assetInfo.name)
          ) {
            extType = 'media'
          } else if (/\.(png|jpe?g|gif|svg|bmp|tiff|webp)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'img'
          } else if (/\.(woff2?|eot|ttf|otf|ttc|fnt)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'fonts'
          }
          return `static/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js'
      }
    }
  }
})
