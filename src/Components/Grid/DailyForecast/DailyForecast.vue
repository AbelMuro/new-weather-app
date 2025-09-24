<script setup>
    /* 
        this is where i left off, i need to finish the styles for the .daily_weather element
    */
</script>

<template>
    <section class="daily">
        <h2 class="daily_title"> 
            Daily forecast
        </h2>
        <article class="daily_weather">
            <h3 class="daily_day">
                Tue
            </h3>
            <img class="daily_icon">
            <p class="daily_temp">
                20°
            </p>
            <p class="daily_temp">
                14°
            </p>
        </article>  
    </section>
</template>

<style scoped>
    .daily{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        column-gap: 16px;
        row-gap: 20px;
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
</style>