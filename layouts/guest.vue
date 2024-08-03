<template>
    <div
        class="sticky top-0 z-50 flex h-20 w-full items-center justify-around bg-white"
    >
        <div class="flex items-end gap-4">
            <img src="/public/image/Shopee.svg" alt="" class="w-32" />

            <div class="text-2xl">เข้าสู่ระบบ</div>
        </div>
        <div>
            <NuxtLink to="/" class="text-sm text-primary"
                >ต้องการความช่วยเหลือ?</NuxtLink
            >
        </div>
    </div>
    <div>
        <slot />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
