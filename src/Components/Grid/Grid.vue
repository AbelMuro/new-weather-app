<script setup>
    import SearchBar from './SearchBar';
    import WeatherSummary from './WeatherSummary';
    import HourlyForecast from './HourlyForecast'; 
</script>

<template>
    <section class="grid">
        <SearchBar/>
        <WeatherSummary/>
        <HourlyForecast/>
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