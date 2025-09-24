<script setup>
    import SearchBar from './SearchBar';
    import WeatherSummary from './WeatherSummary';
    import HourlyForecast from './HourlyForecast'; 
    import WeatherDetails from './WeatherDetails';
    import DailyForecast from './DailyForecast';

    /* 
        this is where i left off, i was in the middle of making
        the app responsive, i am currently in 900px
    */

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
        margin: 0px auto 40px auto;
        display: grid;
        grid-template-columns: 800px 384px;
        grid-template-rows: auto minmax(318px, auto) minmax(166px, auto) auto;
        column-gap: 32px;
    }

    @media(max-width: 1270px){
        .grid{
            width: 90%;
            grid-template-columns: 65.7894737% 34.2105263%;

        }
    }
</style>