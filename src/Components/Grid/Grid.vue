<script setup>
    import SearchBar from './SearchBar';
    import WeatherSummary from './WeatherSummary';
</script>

<template>
    <section class="grid">
        <SearchBar/>
        <WeatherSummary/>
    </section>
</template>

<style scoped>
    .grid{
        width: 1216px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr auto;
    }
</style>