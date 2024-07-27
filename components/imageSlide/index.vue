<template>
    <div class="mt-5">
        <div class="container grid max-w-7xl grid-cols-3 grid-rows-2 gap-1">
            <div class="col-span-2 row-span-2">
                <img
                    src="/image/banner/banner-main.jpg"
                    alt=""
                    class="h-full w-full object-cover"
                />
            </div>
            <div>
                <img src="/image/banner/banner-1.jpg" alt="" />
            </div>
            <div>
                <img src="/image/banner/banner-2.jpg" alt="" />
            </div>
        </div>
        <div class="container flex max-w-7xl">
            <Cardcategory v-for="item in 9" />
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
