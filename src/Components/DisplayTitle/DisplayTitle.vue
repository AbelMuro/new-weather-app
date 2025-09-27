<script setup>
    import useWeatherStore from '@/Store';
    import { storeToRefs } from 'pinia';

    const store = useWeatherStore();
    const {error} = storeToRefs(store);
</script>


<template>
    <h1 class="title" v-if="!error">
        How's the sky looking today?
    </h1>
</template>

<style scoped>
    .title{
        width: 90%;
        color: white;
        font-family: 'dm sans';
        font-size: 3.25rem;
        line-height: 100%;
        font-weight: light;
        text-align: center;
        margin: 0px auto 40px auto;
    }
</style>