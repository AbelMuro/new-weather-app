<script setup>
    import HeaderBar from './Components/HeaderBar';
    import Grid from './Components/Grid';
    import DisplayTitle from './Components/DisplayTitle';
    /* 
        this is where i left off, i need to implemenent the logic for the 
        units button component, more specifically, converting km/h to mph 
    */
</script>

<template>
    <HeaderBar/>
    <DisplayTitle/>
    <Grid/>

    
</template>

<style>
    :root{
        --closest: 100;
        --closer: 75;
        --close: 50;
        --far: 25;
        --farthest: 1;
    }

    * {
        box-sizing: border-box;
        transition: all 0.2s linear, transform 0s, opacity 0s;
    }

    body{
        background-color: #02012C;
        margin: 0px;
    }


    @font-face {
        font-family: 'dm sans';
        src: url('../public/DMSans.ttf');
    }
</style>