<script setup>
    import icons from '@/assets/icons';
</script>

<template>
    <article class="summary">
        <section class="summary_header">
            <h2 class="summary_city">
                Berlin, Germany  
            </h2>
            <p class="summary_date">
                Tuesday, Aug 5, 2025
            </p>    
        </section>
        <section class="summary_temp">
            <img class="summary_icon" :src="icons['sunny']"/>
            <strong class="summary_degree">
                20°
            </strong>
        </section>
    </article>
</template>

<style scoped>
    .summary{
        grid-column: 1/2;
        grid-row: 2/3;
        width: 800px;
        height: 286px;
        border-radius: 20px;
        background-color: blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 24px;
        background-image: url('./images/bg-today-large.svg');
        background-position: center center;
        background-size: contain;
    }

    .summary_header{
        width: 458px;
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
        font-size: 8rem;
        line-height: 100%;
        letter-spacing: -2px;
        font-family: 'dm sans'
    }
</style>