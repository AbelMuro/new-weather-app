<script setup>
    import useWeatherStore from '@/Store';
    import {ref, watch, computed} from 'vue';
    import {storeToRefs} from 'pinia';
    import icons from '@/assets/icons';

    const store = useWeatherStore();
    const {location, current_temp, condition, units} = storeToRefs(store);
    const temperature = ref(current_temp.value);    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const date = new Date()
    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const fullDate = `${week[dayOfWeek - 1]}, ${months[month]} ${dayOfMonth}, ${year}`;

    const unit = computed(() => {
        return units.value.temp;
    })

    watch(unit, (tempUnit) => {
        if(tempUnit === 'fahrenheit')
            temperature.value = ((Number(temperature.value) * 1.8) + 32).toFixed(0);
        else
            temperature.value = (((Number(temperature.value) - 32)*5)/9).toFixed(0);
    }, {flush: 'post'})

</script>

<template>
    <article class="summary">
        <section class="summary_header">
            <h2 class="summary_city">
                {{location}}  
            </h2>
            <p class="summary_date">
                {{fullDate}}
            </p>    
        </section>
        <section class="summary_temp">
            <img class="summary_icon" :src="icons[condition]"/>
            <strong class="summary_degree">
                {{temperature}}°
            </strong>
        </section>
    </article>
</template>

<style scoped>
    .summary{
        grid-column: 1/2;
        grid-row: 1/2;
        width: 100%;
        height: 286px;
        border-radius: 20px;
        background-color: blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 24px;
        background-image: url('./images/bg-today-large.svg');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .summary_header{
        width: 100%;
        height: 68px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .summary_city{
        color: white;
        font-family: 'dm sans';
        font-size: 1.75rem;
        line-height: 120%;
        font-weight: 800;
        margin: 0px
    }

    .summary_date{
        font-size: 1.125rem;
        font-weight: medium;
        line-height: 120%;
        font-family: 'dm sans';
        color: white;
        opacity: 0.8;
        margin: 0px;
    }

    .summary_temp{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .summary_icon{
        width: 120px;
        height: 120px;
    }

    .summary_degree{
        white-space: nowrap;
        color: white;
        font-size: 6rem;
        line-height: 100%;
        letter-spacing: -2px;
        font-family: 'dm sans'
    }

    @media(max-width: 945px){
        .summary{
            grid-column: 1/3;
        }
    }

    @media(max-width: 840px){
        .summary{
            margin-bottom: 20px;
        }
    }

    @media(max-width: 600px){
        .summary{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;
            padding: 0px;
            background-image: url('./images/bg-today-small.svg');
        }

        .summary_city, .summary_date{
            text-align: center
        }
    }

</style>