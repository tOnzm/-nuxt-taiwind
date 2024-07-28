// plugins/supabase.js
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const supabaseUrl = config.public.supabaseUrl
    const supabaseKey = config.public.supabaseKey
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Make supabase available in the Nuxt app
    nuxtApp.provide('supabase', supabase)
})
