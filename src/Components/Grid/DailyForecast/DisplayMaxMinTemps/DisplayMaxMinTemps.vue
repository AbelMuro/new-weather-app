<script setup>
    import {watch, ref} from 'vue';
    const {max, min, unit} = defineProps({
        max: Number,
        min: Number,
        unit: String
    })

    const displayMax = ref(max);
    const displayMin = ref(min);

    watch(() => unit, (unit) => {
        if(unit === 'fahrenheit'){
            displayMax.value = ((Number(displayMax.value) * 1.8) + 32).toFixed(0);
            displayMin.value = ((Number(displayMin.value) * 1.8) + 32).toFixed(0);
        }
            
        else{
            displayMax.value = (((Number(displayMax.value) - 32)*5)/9).toFixed(0);
            displayMin.value = (((Number(displayMin.value) - 32)*5)/9).toFixed(0);
        }
    }, {flush: 'post'})

</script>

<template>
    <p class="daily_high">
        {{displayMax}}°
    </p>
    <p class="daily_low">
        {{displayMin}}°
    </p>
</template>

<style scoped>
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
</style>