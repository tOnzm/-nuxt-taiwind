<script lang="ts" setup>
import { storeToRefs } from 'pinia' // import storeToRefs helper hook from pinia
import { useAuthStore } from '@/store/auth' // import the auth store we just created

const router = useRouter()

const items = [
    { id: 1, title: 'ลูกค้าใหม่ 1 บาท' },
    { id: 2, title: 'หูฟังบลูทูธ เบส หนัก ของแท้' },
    { id: 3, title: 'สินค้า 1 บาท ลูกค้าใหม่เครื่องปั่น' },
    { id: 4, title: 'ไอโฟนผ่านได้' },
    { id: 5, title: 'กิ๊บ Sanrio Sakura' },
    { id: 6, title: 'เสื้อกันหนาวทรงซ้อ' },
    { id: 7, title: 'ที่นอน 1 บาท' },
]

const { logUserOut } = useAuthStore() // use authenticateUser action from  auth store
const { authenticated, userProfilePic } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

const logout = () => {
    logUserOut()
    router.push('/login')
}
</script>

<template>
    <div class="bg-shopee">
        <nav
            class="container mx-auto flex max-w-7xl items-center justify-evenly pt-2 text-sm text-white"
        >
            <ul class="item-center flex flex-1 gap-4">
                <NuxtLink to="/">Seller Centre</NuxtLink>
                <li class="line">|</li>
                <NuxtLink to="/">เริ่มต้นขายสินค้า</NuxtLink>
                <li class="line">|</li>
                <NuxtLink to="/">ดาวน์โหลด</NuxtLink>
                <li class="line">|</li>
                <NuxtLink to="/">ติดตามเราบน</NuxtLink>
                <ul class="flex gap-2">
                    <Nuxtlink><Icon name="fa-brands:facebook" /></Nuxtlink>
                    <Nuxtlink>
                        <Icon name="streamline:instagram-solid" />
                    </Nuxtlink>
                    <Nuxtlink><Icon name="fa-brands:line" /></Nuxtlink>
                </ul>
            </ul>
            <ul class="flex flex-1 items-center justify-end gap-4 text-sm">
                <li>
                    <Icon name="fa6-regular:bell" />
                    การแจ้งเตือน
                </li>
                <li>
                    <Icon name="fa6-regular:circle-question" />
                    ช่วยเหลือ
                </li>
                <li>
                    <dropdown />
                </li>
                <ul v-if="!authenticated" class="flex gap-2">
                    <NuxtLink to="/">สมัครใหม่</NuxtLink>
                    <li class="line">|</li>
                    <li>
                        <NuxtLink to="/login">เข้าสู่ระบบ</NuxtLink>
                    </li>
                </ul>
                <li
                    v-if="authenticated"
                    class="flex cursor-pointer items-center gap-2"
                >
                    <img
                        :src="userProfilePic"
                        alt="User Profile"
                        class="h-8 w-8 rounded-full"
                    />
                    <NuxtLink @click="logout"> ออกจากระบบ</NuxtLink>
                </li>
            </ul>
        </nav>
        <nav
            class="container mx-auto flex max-w-7xl grow pb-2.5 pt-2 text-sm text-white"
        >
            <ul class="item-center flex grow justify-center">
                <li class="flex flex-1 justify-start">
                    <img src="/image/shopee_logo.webp" alt="" width="162" />
                </li>
                <ul>
                    <li class="flex flex-1 pb-1 pt-4">
                        <SearchBox />
                    </li>
                    <ul class="flex gap-2 text-xs">
                        <li v-for="item in items" :key="item.id">
                            <NuxtLink :to="`/${item.id}`">
                                {{ item.title }}</NuxtLink
                            >
                        </li>
                    </ul>
                </ul>
                <li class="flex flex-1 justify-center">
                    <Icon
                        name="ic:outline-shopping-cart"
                        style="font-size: 32px"
                    />
                </li>
            </ul>
        </nav>
    </div>
    <div>
        <slot />
    </div>
</template>

<script setup></script>

<style scoped>
li {
    display: flex;
    align-items: center;
    gap: 4px;
}
.line {
    color: #ffffff50;
}
.bg-shopee {
    background: rgb(246, 65, 46);
    background: linear-gradient(
        180deg,
        rgba(246, 65, 46, 1) 0%,
        rgba(254, 98, 50, 1) 65%
    );
}
</style>
