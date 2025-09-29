<script setup>
    import WeekButton from './WeekButton';
    import HourlyTemp from './HourlyTemp';    
    import LoadingButton from './LoadingButton';
    import LoadingHourlyTemp from './LoadingHourlyTemp';
    import useWeatherStore from '@/Store'
    import {storeToRefs} from 'pinia';

    const store = useWeatherStore();
    const {loading} = storeToRefs(store);

</script>

<template>
    <section class="hourly">
        <div class="hourly_header">
            <h2 class="hourly_title">
                Hourly forecast
            </h2>       
            <LoadingButton v-if="loading"/>     
            <WeekButton v-else/>
        </div>
        <LoadingHourlyTemp v-if="loading"/>
        <HourlyTemp v-else/>
        
    </section>
</template>


<style scoped>
    .hourly{
        height: 693px; 
        overflow-y: scroll;
        grid-column: 2/3;
        grid-row: 1/4;
        width: 100%;
        border-radius: 20px;
        padding: 24px;
        background-color: #262540;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-self: start;
    }


    .hourly::-webkit-scrollbar{
        width: 4px;
        background-color: transparent;
    }

    .hourly::-webkit-scrollbar-thumb{
        background-image: url('./icons/Divider.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
    }


    .hourly_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .hourly_title{
        color: white;
        font-size: 1.25rem;
        font-weight: 500;
        font-family: 'dm sans';
        line-height: 120%;
        margin: 0px;
    }

    @media(max-width: 945px){
        .hourly{
            grid-row: 2/4; 
        }
    }

    @media(max-width: 840px){
        .hourly{
            grid-column: 1/3;
            grid-row: 5/6;
        }
    }

    @media(max-width: 600px){
        .hourly{
            padding: 20px;
        }
    }

</style>