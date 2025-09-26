<script setup>
    import useWeatherStore from '@/Store';
    import {storeToRefs} from 'pinia';
    import {ref, computed, watch} from 'vue';
    import icons from '@/assets/icons';

    const forecast = ref([]);
    const store = useWeatherStore();
    const {hourly_forecast} = storeToRefs(store);
    const currentDay = computed(() => {
        return hourly_forecast.value.current_day;
    });

    watch([currentDay, hourly_forecast], ([currentDay, hourlyForecast]) => {
        forecast.value = hourlyForecast[currentDay]
    }, {flush: 'post', deep: true})

</script>

<template>
    <div class="temp" v-for="(hour, _) in forecast" >
        <div class="temp_time"> 
            <img class="temp_icon" :src="icons['fog']">
            {{hour.hour}}
        </div>
        <p class="temp_degree">
            {{hour.temp}}
        </p>
    </div>
</template>

<style scoped>
    .temp{
        width: 100%;
        height: 60px;
        border-radius: 8px;
        padding: 0px 16px 0px 12px;
        background-color: #302F4A;
        border: 1px solid #3C3B5E;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
    }

    .temp_time{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: white;
        font-family: 'dm sans';
        font-size: 1.25rem;
        line-height: 120%;
        font-weight: 600;
    }

    .temp_icon{
        width: 40px;
        height: 40px;
    }

    .temp_degree{
        font-family: 'dm sans';
        color: white;
        font-size: 1rem;
        line-height: 120%;
        font-weight: medium;
    }
</style>