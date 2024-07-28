<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/store/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const authStore = useAuthStore()
const { authenticateUser } = authStore
const { authenticated } = storeToRefs(authStore)

const user = ref({
    username: '',
    password: '',
})
const router = useRouter()
const errorMessage = ref('')
const successMessage = ref('')

const login = async () => {
    errorMessage.value = ''
    successMessage.value = ''
    try {
        await authenticateUser(user.value)
        if (authenticated.value) {
            successMessage.value = 'Successfully logged in!'
            router.push('/')
        } else {
            errorMessage.value =
                'Authentication failed. Please check your credentials.'
        }
    } catch (error) {
        errorMessage.value =
            'An error occurred during authentication. Please try again.'
    }
}
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div
            class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0"
        >
            <a
                href="#"
                class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
                <img
                    class="mr-2 h-8 w-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                    alt="logo"
                />
                Flowbite
            </a>
            <div
                class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
            >
                <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
                    >
                        Sign in to your account
                    </h1>
                    <form
                        class="space-y-4 md:space-y-6"
                        @submit.prevent="login"
                    >
                        <div>
                            <label
                                for="username"
                                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >Your email</label
                            >
                            <input
                                v-model="user.username"
                                type="text"
                                name="username"
                                id="username"
                                class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                placeholder="username"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="password"
                                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >Password</label
                            >
                            <input
                                v-model="user.password"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex h-5 items-center">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        class="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                                    />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label
                                        for="remember"
                                        class="text-gray-500 dark:text-gray-300"
                                        >Remember me</label
                                    >
                                </div>
                            </div>
                            <a
                                href="#"
                                class="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                                >Forgot password?</a
                            >
                        </div>
                        <button
                            type="submit"
                            class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4"
                        >
                            Sign in
                        </button>
                        <p
                            class="text-sm font-light text-gray-500 dark:text-gray-400"
                        >
                            Don’t have an account yet?
                            <a
                                href="#"
                                class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                                >Sign up</a
                            >
                        </p>
                        <p v-if="errorMessage" class="text-sm text-red-500">
                            {{ errorMessage }}
                        </p>
                        <p v-if="successMessage" class="text-sm text-green-500">
                            {{ successMessage }}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
