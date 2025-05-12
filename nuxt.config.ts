import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '',
      contacts: {
        phone: '+7 499 505-50-50',
        links: {
          wa: '#',
          tg: '#',
          docs: '#',
        },
      }
    }
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/app.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/mixins/text.scss" as *;
            @use "~/assets/scss/mixins/screen.scss" as *;
            @use "~/assets/scss/mixins/shadow.scss" as *;
          `,
        }
      }
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [ path.resolve(process.cwd(), 'app/assets/icons') ],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),
    ],
  }
});
