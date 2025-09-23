<script setup>
    import WeekButton from './WeekButton';
</script>

<template>
    <section class="hourly">
        <div class="hourly_header">
            <h2 class="hourly_title">
                Hourly forecast
            </h2>            
            <WeekButton/>
        </div>
    </section>
</template>


<style scoped>
    .hourly{
        grid-column: 2/3;
        grid-row: 2/4;
        width: 384px;
        height: 693px;
        border-radius: 20px;
        padding: 24px;
        background-color: #262540;
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
</style>