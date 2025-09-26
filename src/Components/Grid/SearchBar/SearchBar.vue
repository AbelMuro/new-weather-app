<script setup>
    import useWeatherStore from '@/Store';
    import {ref} from 'vue';
    import SavedQueries from './SavedQueries';
    import icons from './icons';

    const searchQuery = ref('');
    const store = useWeatherStore();
    const {updateWeather} = store;
    const apiKey = import.meta.env.VITE_API_KEY

    const geocode = async () => {
        try{
            const response = await fetch(`https://geocode.maps.co/search?q=${searchQuery.value}&api_key=${apiKey}`, {
                method: 'GET'
            });
            if(response.status === 200){
                const result = await response.json();
                return result[0]
            }
            else{
                const result = await response.text();
                return result;
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
            throw new Error(message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const location = await geocode();

            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current=temperature_2m,relative_humidity_2m,precipitation,apparent_temperature,wind_speed_10m,weathercode&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,weathercode`, {
                method: 'GET'
            });

            if(response.status === 200){
                const result = await response.json();
                updateWeather({...result, displayName: location.display_name});

            }
            else{
                const result = await response.text();
                console.log(result)
            }            
        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
    }
</script>

<template>
    <search class="search_container">
        <form class="search" @submit="handleSubmit">
            <img class="search_icon" :src="icons['search']">
            <input 
                type="text" 
                v-model="searchQuery"
                placeholder="Search for a place..."
                />
            <button class="search_button">
                Search
            </button>
            <SavedQueries :search="searchQuery"/>            
        </form>
    </search>
</template>

<style scoped>
    .search_container{
        grid-column: 1/3;
        grid-row: 1/2;
        margin-bottom: 48px;        
    }

    .search{
        width: 656px;
        margin: auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    .search > input{
        width: 526px;
        height: 56px;
        border-radius: 10px;
        padding: 0px 16px 0px 64px;
        background-color: #262540;
        border: none;
        color: white;
        font-family: 'dm sans';
        font-size: 1.25rem;
        line-height: 120%;
        font-weight: 400;
    }

    .search > input::placeholder{
        color: #D4D3D9;
    }

    .search > input:focus{
        outline: 2px solid white;
        outline-offset: 1px;
    }

    .search > input:hover{
        background-color: #302F4A;
    }

    .search_icon{
        position: absolute;
        left: 24px;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .search_button{
        width: 114px;
        height: 56px;
        border-radius: 12px;
        border: none;
        color: white;
        font-family: 'dm sans';
        font-size: 1.25rem;
        line-height: 120%;
        font-weight: 400;
        background-color: #4658D9;
        cursor: pointer;
    }

    .search_button:hover{
        background-color: #2B1B9C;
    }

    .search_button:active{
        background-color: #180f63
    }
    .search_button:focus{
        outline: 2px solid #4658D9;
        outline-offset: 1px;
    }

    @media(max-width: 940px){
        .search_container{
            margin-bottom: 32px;
        }

        .search{
            width: 100%;
        }

        .search > input{
            width: 100%;
        }
    }

    @media(max-width: 600px){

        .search{
            flex-direction: column;
            gap: 12px;
            border-radius: 12px;
        }

        .search_icon{
            top: 18px;
            bottom: initial;
            margin: initial;
        }

        .search_button{
            width: 100%;
        }
    }

</style>