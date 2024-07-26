<template>
    <div class="bg-shopee">
        <nav class="container mx-auto flex justify-evenly text-sm text-white">
            <ul class="item-center gap-4 md:flex">
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
            <ul class="flex items-center gap-4 text-sm">
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
                <li>สมัครใหม่</li>
                <li class="line">|</li>
                <li>เข้าสู่ระบบ</li>
            </ul>
        </nav>
        <nav class="flex justify-center">
            <ul class="flex justify-evenly text-sm text-white">
                <li class="justify-start">
                    <img src="/image/shopee_logo.webp" alt="" width="162" />
                </li>
                <ul>
                    <li class="flex pb-1 pt-4">
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
                <li class="justify-end">
                    <Icon
                        name="ic:outline-shopping-cart"
                        style="font-size: 26px"
                    />
                </li>
            </ul>
        </nav>
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
