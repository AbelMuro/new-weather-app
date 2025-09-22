<script setup>
    import HeaderBar from './Components/HeaderBar';
</script>

<template>
    <HeaderBar/>
</template>

<style>
    * {
        box-sizing: border-box;
        transition: all 0.2s linear, transform 0s, opacity 0s;
    }

    body{
        background-color: #02012C;
    }

    @font-face {
        font-family: 'dm sans';
        src: url('../public/DMSans.ttf');
    }
</style>