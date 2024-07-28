<script lang="ts" setup>
import { storeToRefs } from 'pinia' // import storeToRefs helper hook from pinia
import { useAuthStore } from '@/store/auth' // import the auth store we just created

const router = useRouter()

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
            class="container mx-auto flex max-w-7xl justify-evenly pt-2 text-sm text-white"
        >
            <ul class="item-center flex flex-1 gap-4">
                <li>Seller Centre</li>
                <li class="line">|</li>
                <li>เริ่มต้นขายสินค้า</li>
                <li class="line">|</li>
                <li>ดาวน์โหลด</li>
                <li class="line">|</li>
                <li>ติดตามเราบน</li>
                <ul class="flex gap-2">
                    <li><Icon name="fa-brands:facebook" /></li>
                    <li>
                        <Icon name="streamline:instagram-solid" />
                    </li>
                    <li><Icon name="fa-brands:line" /></li>
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
                    <Icon name="hugeicons:globe-02" />
                    ไทย
                </li>
                <ul v-if="!authenticated" class="flex gap-2">
                    <li>สมัครใหม่</li>
                    <li class="line">|</li>
                    <li>
                        <NuxtLink to="/login">เข้าสู่ระบบ</NuxtLink>
                    </li>
                </ul>
                <li v-if="authenticated" class="flex items-center gap-2">
                    <img
                        :src="userProfilePic"
                        alt="User Profile"
                        class="h-8 w-8 rounded-full"
                    />
                    <NuxtLink @click="logout">ออกจากระบบ</NuxtLink>
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
                        <li>ลูกค้าใหม่ 1 บาท</li>
                        <li>หูฟังบลูทูธ เบส หนัก ของแท้</li>
                        <li>สินค้า 1 บาท ลูกค้าใหม่เครื่องปั่น</li>
                        <li>ไอโฟนผ่านได้</li>
                        <li>กิ๊บ Sanrio Sakura</li>
                        <li>เสื้อกันหนาวทรงซ้อ</li>
                        <li>ที่นอน 1 บาท</li>
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
