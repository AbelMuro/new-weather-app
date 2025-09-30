<script setup>
    import SearchBar from './SearchBar';
    import WeatherSummary from './WeatherSummary';
    import HourlyForecast from './HourlyForecast'; 
    import WeatherDetails from './WeatherDetails';
    import DailyForecast from './DailyForecast';
    import LoadingSummary from './LoadingSummary';
    import LoadingHourlyForecast from './LoadingHourlyForecast';
    import LoadingWeatherDetails from './LoadingWeatherDetails';
    import LoadingDailyForecast from './LoadingDailyForecast';
    import NoSearchResultsMessage from './NoSearchResultsMessage';
    import ErrorMessage from './ErrorMessage'
    import useWeatherStore from '@/Store';
    import {storeToRefs} from 'pinia';

    const store = useWeatherStore();
    const {error, noSearchResults, loading, location} = storeToRefs(store);

</script>

<template>
    <SearchBar v-if="!error"/>
    <ErrorMessage v-else/>
    <NoSearchResultsMessage v-if="noSearchResults"/>
    <section class="grid" v-if="loading">
        <LoadingSummary/>
        <LoadingHourlyForecast/>
        <LoadingWeatherDetails/>
        <LoadingDailyForecast/>
    </section>
    <section class="grid" v-else-if="location">
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
        grid-template-rows: minmax(318px, auto) minmax(166px, auto) auto;
        column-gap: 32px;
    }

    @media(max-width: 1270px){
        .grid{
            width: 90%;
            grid-template-columns: 65.7894737% 34.2105263%;
        }
    }

    @media(max-width: 945px){
        .grid{
            grid-template-columns: 1fr 307px;
        }
    }

    @media(max-width: 600px){
        .grid{
            width: 95%;
            gap: 0px;
            grid-template-columns: 1fr;
        }
    }

</style>