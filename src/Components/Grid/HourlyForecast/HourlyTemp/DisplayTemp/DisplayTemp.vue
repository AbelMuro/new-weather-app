<script setup>
    import {watch, ref} from 'vue';

    const {temp, unit} = defineProps({
        temp: Number,
        unit: String
    })

    const displayTemp = ref(temp);

    const formatUnit = (unit) => {
        if(unit === 'fahrenheit')
            return 'F';
        else
            return 'C';
    }

    watch(() => unit, (unit) => {
        if(unit === 'fahrenheit')
            displayTemp.value = ((Number(displayTemp.value) * 1.8) + 32).toFixed(0);
        else
            displayTemp.value = (((Number(displayTemp.value) - 32)*5)/9).toFixed(0);
    }, {flush: 'post'})

</script>


<template>
    <p class="temp_degree">
        {{`${displayTemp} °${formatUnit(unit)}`}}
    </p>
</template>


<style scoped>
    .temp_degree{
        font-family: 'dm sans';
        color: white;
        font-size: 1rem;
        line-height: 120%;
        font-weight: medium;
    }
</style>