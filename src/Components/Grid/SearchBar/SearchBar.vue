<script setup>
    import {ref} from 'vue';
    import SavedQueries from './SavedQueries';
    import icons from './icons';

    const searchQuery = ref('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
    }

    .search{
        width: 656px;
        margin: auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 48px;
    }

    .search > input{
        width: 526px;
        height: 56px;
        border-radius: 10px;
        padding: 16px 64px;
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

</style>