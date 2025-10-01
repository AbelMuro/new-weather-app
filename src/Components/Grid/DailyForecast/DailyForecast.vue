<script setup>
    import useWeatherStore from '@/Store';
    import {storeToRefs} from 'pinia';
    import icons from '@/assets/icons';

    const store = useWeatherStore();
    const {daily_forecast, loading} = storeToRefs(store);

</script>

<template>
    <section class="daily">
        <h2 class="daily_title"> 
            Daily forecast
        </h2>
        <div class="daily_list">
            <article class="daily_weather" v-for="() in 7" v-if="loading"></article>
            <article class="daily_weather" v-for="(day, _) in daily_forecast" v-else>
                <h3 class="daily_day">
                    {{day.day.slice(0, 3)}}
                </h3>
                <img class="daily_icon" :src="icons[day.condition]">
                <p class="daily_high">
                    {{day.max}}
                </p>
                <p class="daily_low">
                    {{day.min}}
                </p>
            </article>  
        </div>
    </section>
</template>

<style scoped>
    .daily{
        grid-column: 1/2;
        grid-row: 3/4;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .daily_title{
        grid-column: 1/4;
        grid-row: 1/2;
        font-size: 1.25rem;
        line-height: 120%;
        color: white;
        font-family: 'dm sans';
        margin: 0px;
    }

    .daily_list{
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }

    .daily_weather{
        grid-row: 2/3;
        width: 100px;
        height: 165px;
        padding: 16px 10px;
        border-radius: 12px;
        background-color: #262540;
        border: 1px solid #3C3B5E;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .daily_day{
        grid-column: 1/3;
        grid-row: 1/2;
        text-align: center;
        color: white;
        font-family: 'dm sans';
        font-size: 1.125rem;
        line-height: 120%;
        font-weight: medium;
        margin: 0px;
    }

    .daily_icon{
        grid-column: 1/3;
        grid-row: 2/3;
        width: 60px;
        height: 60px;
        justify-self: center;
    }

    .daily_high, .daily_low{
        color: white;
        font-family: 'dm sans';
        font-size: 1rem;
        line-height: 120%;
        font-weight: medium;
        margin: auto;
    }

    .daily_high{
        grid-column: 1/2;
        grid-row: 3/4;
        justify-self: start;
    }

    .daily_low{
        grid-column: 2/3;
        grid-row: 3/4;
        justify-self: end;
    }

    @media(max-width: 840px){
        .daily{
            grid-column: 1/3;
            margin-bottom: 32px;
        }

        .daily_weather{
            width: 89.14px;
        }
    }

    @media(max-width: 600px){
        .daily_list{
            justify-content: space-between;
        }

        .daily_weather{
            width: 30%
        }
    }

    @media(max-width: 352px){
        .daily_list{
            justify-content: initial;
        }
    }

</style>