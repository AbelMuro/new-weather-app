<script setup>

</script>


<template>
    <section class="daily">
        <h2 class="daily_title"> 
            Daily forecast
        </h2>
        <div class="daily_list">
            <article class="daily_weather" v-for="() in 7"></article>
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

    .daily_list{
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
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

    .daily_weather{
        grid-row: 2/3;
        width: 100px;
        height: 165px;
        padding: 16px 10px;
        border-radius: 12px;
        background-color: #262540;
        border: 1px solid #3C3B5E;
    }

    @media(max-width: 840px){
        .daily{
            grid-column: 1/3;
            margin-bottom: 32px;
        }
        
        .daily_list{
            justify-content: space-between;
        }

        .daily_weather{
            width: 89.14px;
        }
    }

    @media(max-width: 600px){
        .daily_weather{
            width: 30%
        }
    }


</style>