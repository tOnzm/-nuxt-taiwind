<template>
    <div><ImageSlide /></div>
    <div>
        <h1>Movies</h1>
        <ul class="flex flex-wrap">
            <li v-for="movie in movies" :key="movie._id">
                {{ movie.title }} --
            </li>
        </ul>
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
