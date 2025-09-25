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
        width: 100%;
        border-radius: 20px;
        padding: 24px;
        background-color: #262540;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-self: start;
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

    @media(max-width: 945px){
        .hourly{
            grid-row: 3/6; 
        }
    }

    @media(max-width: 840px){
        .hourly{
            grid-column: 1/3;
            grid-row: 5/6;
        }
    }

    @media(max-width: 600px){
        .hourly{
            padding: 20px;
        }
    }

</style>