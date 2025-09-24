<script setup>
    import WeekButton from './WeekButton';
    import HourlyTemp from './HourlyTemp';
</script>

<template>
    <section class="hourly">
        <div class="hourly_header">
            <h2 class="hourly_title">
                Hourly forecast
            </h2>            
            <WeekButton/>
        </div>
        <HourlyTemp/>
    </section>
</template>


<style scoped>
    .hourly{
        grid-column: 2/3;
        grid-row: 2/5;
        width: 384px;
        border-radius: 20px;
        padding: 24px;
        background-color: #262540;
        display: flex;
        flex-direction: column;
        gap: 16px;
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