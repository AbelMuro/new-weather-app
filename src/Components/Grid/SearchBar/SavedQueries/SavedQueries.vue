<script setup>
    import {watchEffect, ref} from 'vue';
    import { useLocalStorage } from '@/Hooks';

    const {search, handleSearchQuery, openSavedQueries} = defineProps({
        search: String,
        handleSearchQuery: Function,
        openSavedQueries: Boolean
    });

    const [savedSearches] = useLocalStorage('saved_searches');
    const displaySavedSearches = ref([]);

    const handleQuery = (savedSearch) => {
        handleSearchQuery(savedSearch);
    }


    watchEffect(() => {
        if(!openSavedQueries) return;
        if(!search) {
            displaySavedSearches.value = [];
            return;
        };
        
        const saved = [];

        for(let i = 0; i < savedSearches.value.length; i++){
            const currentSaved = savedSearches.value[i].toLowerCase();
            if(currentSaved.startsWith(search.toLowerCase()))
                saved.push(savedSearches.value[i]);
        }
        displaySavedSearches.value = saved;

    }, {flush: 'post'})


</script>

<template>
    <section class="queries" v-if="openSavedQueries && displaySavedSearches.length">
        <button type="button" class="queries_query" v-for="(savedSearch) in displaySavedSearches" @mousedown="() => handleQuery(savedSearch)">
            {{savedSearch}}
        </button>
    </section>
</template>

<style scoped>
    .queries{
        position: absolute;
        top: 70px;
        left: 0px;
        width: 526px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #262540;
        border-radius: 12px;
        border: 1px solid #3C3B5E;
    }

    .queries_query{
        width: 100%;
        height: 40px;
        border-radius: 8px;
        padding: 0px 10px;
        color: white;
        font-family: 'dm sans';
        font-size: 1rem;
        line-height: 120%;
        font-weight: medium;
        display: flex;
        align-items: center;
        cursor: pointer;
        border: 1px solid transparent;
        background-color: transparent;
    }

    .queries_query:hover{
        border: 1px solid #3C3B5E;
        background-color: #302F4A;
    }

</style>