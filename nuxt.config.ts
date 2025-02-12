import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    css: ['~/assets/css/global.css'],
    
    modules: [
        '@primevue/nuxt-module',
        '@nuxtjs/tailwindcss',
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'fa',
                dir: 'rtl',
            },
        },
    },
    runtimeConfig: {
        public: {
            mapIrApiKey: process.env.MAP_IR_API_KEY
        }
    },

    primevue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: false,
                    cssLayer: false
                }
            }
        }
    },

    compatibilityDate: '2025-02-06'
})