<script setup>
    import {ref} from 'vue';
    import icons from '@/assets/icons';

    const hours = ref(7)
</script>

<template>
    <div class="temp" v-for="(hour, _) in hours" >
        <div class="temp_time"> 
            <img class="temp_icon" :src="icons['fog']">
            3 PM
        </div>
        <p class="temp_degree">
            20 °
        </p>
    </div>
</template>

<style scoped>
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
    }

    .temp_time{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: white;
        font-family: 'dm sans';
        font-size: 1.25rem;
        line-height: 120%;
        font-weight: 600;
    }

    .temp_icon{
        width: 40px;
        height: 40px;
    }

    .temp_degree{
        font-family: 'dm sans';
        color: white;
        font-size: 1rem;
        line-height: 120%;
        font-weight: medium;
    }
</style>