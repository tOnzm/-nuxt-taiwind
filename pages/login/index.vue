<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/store/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

definePageMeta({
    layout: false,
})
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
            successMessage.value = 'เข้าสู่ระบบ สำเร็จ'
            router.push('/')
        } else {
            errorMessage.value =
                'เข้าสู่ระบบไม่สำเร็จ กรุณาลองอีกครั้งหรือเข้าสู่ระบบด้วยวิธีอื่น'
        }
    } catch (error) {
        errorMessage.value =
            'An error occurred during authentication. Please try again.'
    }
}
const showPassword = ref(false)
const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}
</script>

<template>
    <NuxtLayout name="guest">
        <section class="bg-primary dark:bg-gray-900">
            <div
                class="bg-hero-pattern container flex w-[1200px] flex-col items-end justify-center bg-center bg-no-repeat px-6 py-8 md:h-screen lg:py-0"
            >
                <div
                    class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
                >
                    <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
                        >
                            เข้าสู่ระบบ
                        </h1>
                        <div
                            v-if="errorMessage"
                            class="border border-red-300 bg-red-100 px-5 py-2 text-sm text-black"
                        >
                            <Icon
                                name="fa6-regular:circle-xmark"
                                class="text-red-500"
                            />
                            {{ errorMessage }}
                        </div>
                        <form
                            class="space-y-4 md:space-y-6"
                            @submit.prevent="login"
                        >
                            <div>
                                <input
                                    v-model="user.username"
                                    type="text"
                                    name="username"
                                    id="username"
                                    class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="หมายเลขโทรศัพท์ / อีเมล / ชื่อผู้ใช้"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    v-model="user.password"
                                    :type="showPassword ? 'text' : 'password'"
                                    name="password"
                                    id="password"
                                    placeholder="รหัสผ่าน"
                                    class="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                    required
                                />
                                <button
                                    type="button"
                                    @click="togglePasswordVisibility"
                                    class="inset-y-100 absolute right-0 flex items-center bg-purple-600 px-3"
                                >
                                    <span v-if="showPassword"> dsdsd </span>
                                    <span v-else>🙈</span>
                                </button>
                            </div>

                            <div class="flex flex-col gap-2">
                                <button
                                    type="submit"
                                    class="hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded bg-primary px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
                                >
                                    เข้าสู่ระบบ
                                </button>
                                <div
                                    class="flex items-center justify-between space-y-0"
                                >
                                    <a
                                        href="#"
                                        class="dark:text-primary-500 text-xs text-blue-900"
                                        >ลืมรหัสผ่าน</a
                                    >
                                    <a
                                        href="#"
                                        class="dark:text-primary-500 text-xs text-blue-900"
                                        >เข้าสู่ระบบด้วย SMS</a
                                    >
                                </div>
                            </div>
                            <div class="relative flex items-center">
                                <div
                                    class="flex-grow border-t border-gray-300"
                                ></div>
                                <span class="mx-4 text-xs text-gray-500"
                                    >หรือ</span
                                >
                                <div
                                    class="flex-grow border-t border-gray-300"
                                ></div>
                            </div>
                            <div class="flex space-x-2">
                                <button
                                    type="submit"
                                    class="hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded border border-black bg-white px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
                                >
                                    เข้าสู่ระบบ
                                </button>
                                <button
                                    type="submit"
                                    class="hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded bg-primary px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
                                >
                                    เข้าสู่ระบบ
                                </button>
                            </div>

                            <p
                                class="text-sm font-light text-gray-500 dark:text-gray-400"
                            >
                                เพิ่งเคยเข้ามาใน Shopee ใช่หรือไม่
                                <a
                                    href="#"
                                    class="dark:text-primary-500 font-medium text-primary hover:underline"
                                    >สมัครใหม่</a
                                >
                            </p>

                            <p
                                v-if="successMessage"
                                class="text-sm text-green-500"
                            >
                                {{ successMessage }}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
