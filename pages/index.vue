<template>
    <div><ImageSlide /></div>

    <div class="flex flex-wrap">
        <CardMovies
            v-for="movie in movies"
            :key="movie._id"
            :poster="movie.poster"
            :title="movie.title"
            :plot="movie.plot"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const movies = ref([])

const fetchMovies = async () => {
    try {
        const response = await fetch('/api/movies')
        movies.value = await response.json()
    } catch (error) {
        console.error('Error fetching movies:', error)
    }
}

onMounted(() => {
    fetchMovies()
})
</script>
