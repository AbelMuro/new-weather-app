<script setup>
    import useWeatherStore from '@/Store';
    import {computed, watch, ref} from 'vue';
    import {storeToRefs} from 'pinia';


    const store = useWeatherStore();
    const {feels_like, humidity, wind_speed, precipitation, units} = storeToRefs(store);
    const temperature = ref(feels_like.value); 
    const windSpeed = ref(wind_speed.value);   


    const tempUnit = computed(() => {
        return units.value.temp
    })

    const windUnit = computed(() => {
        return units.value.wind_speed;
    });

    watch(tempUnit, (temp) => {
        if(temp === 'fahrenheit')
            temperature.value = ((Number(temperature.value) * 1.8) + 32).toFixed(0);
        else
            temperature.value = (((Number(temperature.value)- 32)*5)/9).toFixed(0);
    }, {flush: 'post'});

    watch(windUnit, (speed) => {
        if(speed === 'km/h')
           windSpeed.value = (Number(windSpeed.value) * 1.609344).toFixed(0);
        else
           windSpeed.value = (Number(windSpeed.value) / 1.609344).toFixed(0);
    })

</script>

<template>
    <section class="details_container">
        <div class="details_detail">
            <h3 class="details_title">
                Feels Like
            </h3>
            <strong class="details_data">
                {{temperature}}°
            </strong>
        </div>

        <div class="details_detail">
            <h3 class="details_title">
                Humidity
            </h3>
            <strong class="details_data">
                {{humidity}}%
            </strong>
        </div>
        <div class="details_detail">
            <h3 class="details_title">
                Wind
            </h3>
            <strong class="details_data">
                {{`${windSpeed} ${windUnit}`}}
            </strong>
        </div>
        <div class="details_detail">
            <h3 class="details_title">
                Precipitation
            </h3>
            <strong class="details_data">
                {{precipitation}} mm
            </strong>
        </div>
    </section>
</template>

<style scoped>
    .details_container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        grid-column: 1/2;
        grid-row: 2/3;
        margin-bottom: 48px;
    }

    .details_detail{
        width: 182px;
        height: 118px;
        border-radius: 12px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        background-color: #262540;
        border: 1px solid #3C3B5E;
    }

    .details_title{
        color: #D4D3D9;
        font-family: 'dm sans';
        font-size: 1.125rem;
        line-height: 120%;
        font-weight: medium;
        margin: 0px;
        text-align: left;
    }

    .details_data{
        font-family: 'dm sans';
        color: white;
        font-size: 2rem;
        line-height: 100%;
        font-weight: 300;
        white-space: nowrap;
    }

    @media(max-width: 1270px){
        .details_container{
            gap: 12px;
        }
    }

    @media(max-width: 840px){
        .details_container{
            grid-column: 1/3;
            margin-bottom: 32px;
            gap: 20px;
        }

        .details_detail{
            width: 165px;
        }
    }

    @media(max-width: 600px){
        .details_container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;

        }

        .details_detail{
            width: 100%;
        }
    }

</style>