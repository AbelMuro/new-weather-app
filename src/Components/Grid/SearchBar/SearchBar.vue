<script setup>
    import useWeatherStore from '@/Store';
    import {storeToRefs} from 'pinia';
    import {VueSpinner} from 'vue3-spinners';
    import {ref, useTemplateRef} from 'vue';
    import SavedQueries from './SavedQueries';
    import icons from './icons';

    const searchQuery = ref('');
    const openSavedQueries = ref(false);
    const submitButton = useTemplateRef('submit');
    const store = useWeatherStore();
    const {loading} = storeToRefs(store);
    const {updateWeather, setError, setNoSearchResults, setLoading, clearState} = store;
    const apiKey = import.meta.env.VITE_API_KEY;

    const formatLocation = (name) => {
        const location = name.split(', ');
        return `${location[0]}, ${location[location.length - 1]}`
    }

    const handleSearchQuery = (query) => {
        searchQuery.value = query;
        submitButton.value.click();
    }

    const handleFocus = () => {
        openSavedQueries.value = true;
    }

    const handleBlur = () => {
        openSavedQueries.value = false;
    }

    const geocode = async () => {
        try{
            const response = await fetch(`https://geocode.maps.co/search?q=${searchQuery.value}&api_key=${apiKey}`, {
                method: 'GET'
            });

            if(response.status === 200){
                const result = await response.json();

                if(result.length){
                    setNoSearchResults(false);
                    setError(false);
                    return result[0];                    
                }
                else{
                    setNoSearchResults(true);
                    setError(false);
                    return null;
                }
            }
            else {
                const result = await response.text();
                console.log('Internal Server error has ocurred: ', result);
                setNoSearchResults(false);
                setError(true);
                return null;
            }
        }
        catch(error){
            const message = error.message;
            console.log('Server is offline: ', message);
            setNoSearchResults(false);
            setError(true);
            return null;
        }
    }

    const weatherData = async (location) => {
        try{
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current=temperature_2m,relative_humidity_2m,precipitation,apparent_temperature,wind_speed_10m,weathercode&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,weathercode`, {
                method: 'GET'
            });

            if(response.status === 200){
                const result = await response.json();
                const prevSearches = JSON.parse(localStorage.getItem('saved_searches'));
                const formatedLocationName = formatLocation(location.display_name)
                if(prevSearches && !prevSearches.includes(formatedLocationName)){
                    if(prevSearches.length > 4) {
                        prevSearches.unshift(formatedLocationName);
                        prevSearches.pop();
                        localStorage.setItem('saved_searches', JSON.stringify(prevSearches)); 
                    }
                    else
                        localStorage.setItem('saved_searches', JSON.stringify([formatedLocationName, ...prevSearches])); 
                }
                    
                else if(!prevSearches)
                    localStorage.setItem('saved_searches', JSON.stringify([formatedLocationName]))

                const event = new CustomEvent('change_local_storage');
                document.dispatchEvent(event);
                handleSearchQuery('');
                setNoSearchResults(false);
                setError(false);
                return {...result, displayName: formatedLocationName}
            }
            else{
                const result = await response.text();
                console.log(result);
                setNoSearchResults(true);
                setError(false);
                return null
            }         
        }
        catch(error){
            const message = error.message;
            console.log('Server is offline: ', message);
            setNoSearchResults(false);            
            setError(true);
            return null
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!searchQuery.value){
            setNoSearchResults(true);
            setError(false);
            return;
        }
        setLoading(true);
        const location = await geocode();
        if(!location) {
            clearState();
            setLoading(false);
            return;
        };
        const weather = await weatherData(location);
        if(!weather) {
            clearState();
            setLoading(false);
            return;
        };
        updateWeather(weather);   
        setLoading(false);         
    }

</script>

<template>
        <form class="search" @submit="handleSubmit">
            <img class="search_icon" :src="icons['search']">
            <input 
                type="text" 
                v-model="searchQuery"
                placeholder="Search for a place..."
                @focus="handleFocus"
                @blur="handleBlur"
                />
            <button class="search_button" ref="submit">
                {{!loading ? 'Search' : ''}}
                 <VueSpinner v-if="loading" size="30" color="white"/>
            </button>
            <SavedQueries :search="searchQuery" :handleSearchQuery="handleSearchQuery" :openSavedQueries="openSavedQueries"/>            
        </form>
</template>

<style scoped>
    .search{
        grid-column: 1/3;
        grid-row: 1/2;
        margin: 0px auto 48px auto;  
        width: 656px;
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
        .search{
            width: 90%;
            margin: 0px auto 32px auto;
        }

        .search > input{
            width: 100%;
        }
    }

    @media(max-width: 600px){
        .search{
            width: 95%;
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