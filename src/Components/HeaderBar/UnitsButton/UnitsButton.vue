<script setup>
    import icons from './icons';
    import {motion} from 'motion-v';

    /* 
        this is where i left off, i need to finish styling the dropdown feature
    */
</script>

<template>
    <button class="units">
        <img class="gear" :src="icons['gear']">
        Units
        <img class="arrow" :src="icons['arrow']">
    </button>
    <motion.section class="dropdown">
        <h2 class="dropdown_header"> 
            Switch to Imperial
        </h2>
        <ul class="dropdown_list">
            <li class="dropdown_title">
                Temperature
            </li>
            <li>
                <button class="dropdown_button"> 
                    Celsius (°C)
                </button>
            </li>
            <li>
                <button class="dropdown_button"> 
                    Fahrenheit (°F)
                </button>
            </li>
        </ul>
        <ul class="dropdown_list">
            <li class="dropdown_title">
                Wind Speed
            </li>
            <li>
                <button class="dropdown_button"> 
                    km/h
                </button>
            </li>
            <li>
                <button class="dropdown_button"> 
                    mph
                </button>
            </li>
        </ul>
        <ul class="dropdown_list">
            <li class="dropdown_title">
                Precipitation
            </li>
            <li>
                <button class="dropdown_button">
                    Millimeters (mm)
                </button>
            </li>
        </ul>
    </motion.section>

</template>

<style scoped>
    .units{
        width: 119px;
        height: 43px;
        border-radius: 10px;
        background-color: #262540;
        border: none;
        cursor: pointer;
        color: white;
        font-family: 'dm sans';
        font-size: 1rem;
        line-height: 120%;
        font-weight: medium;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px
    }

    .units:hover{
        background-color: #171727;
    }

    .units:active{
        background-color:rgb(9, 9, 15); 
    }

    .dropdown{
        width: 214px;
        height: 412px;
        border: 1px solid #3C3B5E;
        padding: 20px 15px;
        border-radius: 12px;
        background-color: #262540;
    }

    .dropdown_header{
        color: white;
        font-family: 'dm sans';
        font-size: 1rem;
        line-height: 120%;
        font-weight: medium;
        margin: 0px 0px 15px 0px ;
    }

    .dropdown_title{
        color: #ACACB7;
        font-family: 'dm sans';
        font-weight: medium;
        line-height: 120%;
        font-size: 0.875rem;
    }

    .dropdown_list{
        padding: 0px;
        margin: 0px 0px 10px 0px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 15px;
    }

    .dropdown_button{
        width: 100%;
        height: 39px;
        border-radius: 12px;
        font-size: 1rem;
        line-height: 120%;
        color: white;
        font-weight: medium;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

</style>