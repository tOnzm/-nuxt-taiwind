<template>
    <div>
        <ImageSlide />
        <li v-for="item in countries" :key="item.id">
            {{ item.name }}
        </li>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const { data: countries } = await useAsyncData(async () => {
    const { data } = await supabase.from('countries').select('*')
    return data
})
</script>
