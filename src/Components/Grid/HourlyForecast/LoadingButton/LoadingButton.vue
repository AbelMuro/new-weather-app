<script setup>
    import icons from '@/assets/icons'
</script>

<template>
    <button class="loading_button">
        -
        <img class="loading_icon_button" :src="icons['arrow']">
    </button>
</template>

<style scoped>
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
</style>