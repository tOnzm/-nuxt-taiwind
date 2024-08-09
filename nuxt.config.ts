// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/icon',
        'nuxt-lodash',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        /* 'nuxt-server-utils', */
        /* '@sidebase/nuxt-auth', */
        /* '@nuxtjs/supabase', */
    ],

    /*   nuxtServerUtils: {
        mongodbUri: process.env.MONGODB_URL,
    }, */

    /*   auth: {
        baseURL: process.env.AUTH_ORIGIN,
        provider: {
            type: 'authjs',
            trustHost: false,
            defaultProvider: 'github',
            addDefaultCallbackUrl: true,
        },
    }, */

    app: {
        head: {
            script: [{ src: 'https://js.stripe.com/v3/', defer: true }],
        },
    },
    /* nitro: {
        plugins: ['/server/index.ts'],
    }, */

    /*     runtimeConfig: {
        public: {
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseKey: process.env.SUPABASE_KEY,
        },
    }, */
})
