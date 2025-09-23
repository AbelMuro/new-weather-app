<script setup>
    import {ref} from 'vue';
    import icons from './icons';
    import {motion, AnimatePresence} from 'motion-v';

    const temp = ref('fahrenheit');
    const speed = ref('km/h');
    const precipitation = ref('precipitation');
    const open = ref(false);

    const handleTemp = (newTemp) => {
        temp.value = newTemp;
    }

    const handleSpeed = (newSpeed) => {
        speed.value = newSpeed
    }   

    const handlePrecipitation = () => {
        precipitation.value = !precipitation.value;
    }

    const handleOpen = () => {
        open.value = !open.value;
    }

    /* 
        this is where i left off, i need to correct the hover states for the units button.
        Then i can start displaying the title in the center of the document
    */

</script>

<template>
    <div class="units_container"> 
        <button class="units" @click="handleOpen">
            <img class="gear" :src="icons['gear']">
            Units
            <img class="arrow" :src="icons['arrow']">
        </button>
        <AnimatePresence>
            <motion.section 
                class="dropdown" 
                v-if="open" 
                :initial="{scaleY: 0}" 
                :animate="{scaleY: 1}"
                :transition="{duration: 0.3}"
                :exit="{scaleY: 0}"
                >
                <h2 class="dropdown_header"> 
                    Switch to Imperial
                </h2>
                <ul class="dropdown_list">
                    <li class="dropdown_title">
                        Temperature
                    </li>
                    <li>
                        <button class="dropdown_button" @click="() => handleTemp('celsius')" :style="temp === 'celsius' ? {backgroundColor: '#302F4A'} : {}"> 
                            Celsius (°C)
                            <img v-if="temp === 'celsius'" :src="icons['checkmark']"/>
                        </button>
                    </li>
                    <li>
                        <button class="dropdown_button" @click="() => handleTemp('fahrenheit')" :style="temp === 'fahrenheit' ? {backgroundColor: '#302F4A'} : {}"> 
                            Fahrenheit (°F)
                            <img v-if="temp === 'fahrenheit'" :src="icons['checkmark']"/>
                        </button>
                    </li>
                </ul>
                <hr class="line"/>
                <ul class="dropdown_list">
                    <li class="dropdown_title">
                        Wind Speed
                    </li>
                    <li>
                        <button class="dropdown_button" @click="() => handleSpeed('km/h')" :style="speed === 'km/h' ? {backgroundColor: '#302F4A'} : {}"> 
                            km/h
                            <img v-if="speed === 'km/h'" :src="icons['checkmark']"/>
                        </button>
                    </li>
                    <li>
                        <button class="dropdown_button" @click="() => handleSpeed('mph')" :style="speed === 'mph' ? {backgroundColor: '#302F4A'} : {}"> 
                            mph
                            <img v-if="speed === 'mph'" :src="icons['checkmark']"/>
                        </button>
                    </li>
                </ul>
                <hr class="line"/>
                <ul class="dropdown_list">
                    <li class="dropdown_title">
                        Precipitation
                    </li>
                    <li>
                        <button class="dropdown_button" @click="() => handlePrecipitation()" :style="precipitation ? {backgroundColor: '#302F4A'} : {}">
                            Millimeters (mm)
                            <img v-if="precipitation" :src="icons['checkmark']"/>
                        </button>
                    </li>
                </ul>
            </motion.section>
        </AnimatePresence>
    </div>

</template>

<style scoped>
    .units_container{
        position: relative;
    }

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
        background-color: #302F4A;
    }

    .units:active{
        background-color: #201f2e; 
    }

    .units:focus, .units:focus ~ .dropdown > .dropdown_header{
        outline: 2px solid white;
        outline-offset: 3px;
    }

    .gear{
        width: 16px;
        height: 16px;
    }
    
    .arrow{
        width: 12px;
        height: 18px;
    }

    .line{
        width: 100%;
        height: 2px;
        margin: 5px 0px 5px 0px;
        border: none;
        background-color: #3C3B5E;
    }

    .dropdown{
        position: absolute;
        top: 58px;
        right: 0px;
        width: 214px;
        height: 440px;
        border: 1px solid #3C3B5E;
        padding: 10px;
        border-radius: 12px;
        background-color: #262540;
        transform-origin: top center;
    }

    .dropdown_header{
        width: 100%;
        height: 39px;
        border-radius: 12px;
        color: white;
        font-family: 'dm sans';
        font-size: 1rem;
        line-height: 120%;
        font-weight: medium;
        margin: 0px 0px 5px 0px;
        padding: 0px 10px 0px 10px;
        text-align: left;
        display: flex;
        align-items: center;
    }

    .dropdown_title{
        color: #ACACB7;
        font-family: 'dm sans';
        font-weight: medium;
        line-height: 120%;
        font-size: 0.875rem;
        height: 30px;
        display: flex;
        align-items: center;
        padding: 0px 10px 0px 10px;
    }

    .dropdown_list{
        padding: 0px;
        margin: 0px 0px 10px 0px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
    }

    .dropdown_button{
        width: 100%;
        height: 39px;
        border-radius: 12px;
        padding: 0px 10px 0px 10px;
        font-size: 1rem;
        line-height: 120%;
        color: white;
        font-weight: medium;
        border: none;
        background-color: transparent;
        cursor: pointer;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media(max-width: 600px){
        .units{
            width: 89px;
            height: 33px;
            padding: 10px;
            font-size: 0.875rem;
        }

        .gear{
            width: 14px;
            height: 14px;
        }

        .arrow{
            width: 9px;
            height: 14px;
        }
    }

</style>