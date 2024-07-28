import { defineStore } from 'pinia'

interface UserPayloadInterface {
    username: string
    password: string
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        userProfilePic: '', // Add user profile picture URL
    }),
    actions: {
        async authenticateUser({ username, password }: UserPayloadInterface) {
            // useFetch from nuxt 3
            try {
                const data: any = await $fetch(
                    'https://dummyjson.com/auth/login',
                    {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username,
                            password,
                        }),
                    }
                )

                const token = useCookie('token') // useCookie new hook in nuxt 3
                token.value = data.token // set token to cookie
                this.authenticated = true // set authenticated state value to true

                // Set user profile picture URL from API response
                this.userProfilePic = data.image || ''
            } catch (error) {
                console.error('Error during authentication:', error)
            } finally {
                this.loading = false
            }
            this.loading = true
        },
        logUserOut() {
            const token = useCookie('token') // useCookie new hook in nuxt 3
            this.authenticated = false // set authenticated  state value to false
            token.value = null // clear the token cookie
            this.userProfilePic = ''
        },
    },
})
