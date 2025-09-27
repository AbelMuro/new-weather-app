<script setup>
    import {watch, ref} from 'vue';
    const {search, handleSearchQuery} = defineProps({
        search: String,
        handleSearchQuery: Function
    });

    const savedSearches = ref([]);

    watch(() => search, () => {
        if(!search) {
            savedSearches.value = [];
            return;
        }

        const prevSearches = JSON.parse(localStorage.getItem('saved_searches'));
        savedSearches.value = prevSearches;
    })
</script>

<template>
    <section class="queries" v-if="search && savedSearches.length">
        <button type='button' class="queries_query" v-for="(savedSearch) in savedSearches" @click="() => handleSearchQuery(savedSearch)">
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