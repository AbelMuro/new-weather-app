<script setup>
    import useWeatherStore from '@/Store'
    import icons from './icons';

    const store = useWeatherStore();
    const {setError} = store;

    const handleRetry = () => {
        setError(false);
    }
</script>

<template>
    <section class="error"> 
        <img class="error_icon" :src="icons['error']"/>
        <h1 class="error_title"> 
            Something went wrong
        </h1>
        <p class="error_desc">
            We couldn't connect to the server (API error). Please try again
            in a few moments.
        </p>
        <button class="error_button" @click="handleRetry">
            <img class="error_retry" :src="icons['retry']"/>
            Retry
        </button>
    </section>
</template>

<style scoped>
    .error{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
    }

    .error_icon{
        width: 42px;
        height: 50px;
    }

    .error_title{
        color: white;
        font-family: 'dm sans';
        font-size: 3.25rem;
        line-height: 100%;
        margin: 0px;
    }

    .error_desc{
        width: 554px;
        text-align: center;
        color: #D4D3D9;
        font-size: 1.25rem;
        line-height: 120%;
        font-family: 'dm sans';
        margin: 0px;
    }

    .error_button{
        width: 98px;
        height: 43px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: white;
        font-family: 'dm sans';
        font-size: 1rem;
        line-height: 120%;
        background-color: #262540;  
        border: none;    
        cursor: pointer; 
    }

    .error_button:hover{
        background-color: #302F4A;
    }

    .error_button:active{
        background-color: #201f2e;
    }

    .error_retry{
        width: 16px;
        height: 16px;
    }
</style>