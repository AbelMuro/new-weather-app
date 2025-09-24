<script setup>
    import SearchBar from './SearchBar';
    import WeatherSummary from './WeatherSummary';
    import HourlyForecast from './HourlyForecast'; 
    import WeatherDetails from './WeatherDetails';
    import DailyForecast from './DailyForecast';
</script>

<template>
    <section class="grid">
        <SearchBar/>
        <WeatherSummary/>
        <HourlyForecast/>
        <WeatherDetails/>
        <DailyForecast/>
    </section>
</template>

<style scoped>
    .grid{
        width: 1216px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto 318px 166px auto
    }
</style>