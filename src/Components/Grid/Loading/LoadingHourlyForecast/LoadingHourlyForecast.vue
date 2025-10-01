<script setup>
    import icons from '@/assets/icons';
</script>

<template>
    <section class="hourly">
        <div class="hourly_header">
            <h2 class="hourly_title">
                Hourly forecast
            </h2>       
            <button class="loading_button">
                -
                <img class="loading_icon_button" :src="icons['arrow']">
            </button>
        </div>
        <div class="temp" v-for="(i) in 8"></div>
    </section>
</template>

<style scoped>
    .hourly{
        height: 693px; 
        overflow: hidden;
        grid-column: 2/3;
        grid-row: 1/4;
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

    .loading_button{
        width: 67px;
        height: 37px;
        border-radius: 8px;
        background-color: #3C3B5E;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        color: white;
        font-size: 1rem;
        font-weight: medium;
        font-family: 'dm sans';
        border: none;
    }

    .loading_icon_button{
        width: 12px;
        height: 18px;
    }

    .temp{
        width: 100%;
        height: 60px;
        border-radius: 8px;
        padding: 0px 16px 0px 12px;
        background-color: #302F4A;
        border: 1px solid #3C3B5E;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
    }


    @media(max-width: 945px){
        .hourly{
            grid-row: 2/4; 
        }
    }

    @media(max-width: 840px){
        .hourly{
            grid-column: 1/3;
            grid-row: 5/6;
        }
    }

</style>