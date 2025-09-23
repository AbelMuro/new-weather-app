<script setup>
    import HeaderBar from './Components/HeaderBar';
    import Grid from './Components/Grid';
</script>

<template>
    <HeaderBar/>
    <h1 class="title">
        How's the sky looking today?
    </h1>
    <Grid/>
</template>

<style>
    * {
        box-sizing: border-box;
        transition: all 0.2s linear, transform 0s, opacity 0s;
    }

    body{
        background-color: #02012C;
        margin: 0px;
    }

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

    @font-face {
        font-family: 'dm sans';
        src: url('../public/DMSans.ttf');
    }
</style>