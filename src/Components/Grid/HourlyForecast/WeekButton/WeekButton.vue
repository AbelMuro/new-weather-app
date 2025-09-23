<script setup>
    import icons from '@/assets/icons';

    /* 
        this is where i left off, i need to work on the JS portion of the following component
    */

</script>

<template>
    <div class="week_container">
        <button class="week">
            Monday
            <img class="week_arrow" :src="icons['arrow']">
        </button>
        <ul class="week_dropdown">
            <li>
                <button class="week_option">
                    Monday
                </button>
            </li>
            <li>
                <button class="week_option"> 
                    Tuesday
                </button>                
            </li>
            <li>
                <button class="week_option">
                    Wednesday
                </button>
            </li>
            <li>
                <button class="week_option">
                    Thursday
                </button>
            </li>
            <li>
                <button class="week_option">
                    Friday
                </button>
            </li>
            <li>
                <button class="week_option">
                    Saturday
                </button>
            </li>
            <li>
                <button class="week_option">
                    Sunday
                </button>                
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .week_container{
        position: relative;
    }

    .week{
        width: 120px;
        height: 37px;
        border-radius: 8px;
        background-color: #3C3B5E;
        border: none;
        font-size: 1rem;
        color: white;
        font-weight: medium;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }

    .week_arrow{
        width: 12px;
        height: 18px;
    }

    .week:hover{
        background-color: #302F4A;
    }

    .week:active{
        background-color: #201f2e;
    }

    .week_dropdown{
        position: absolute;
        top: 50px;
        right: 0px;
        width: 214px;
        list-style-type: none;
        padding: 8px;
        margin: 0px;
        border: 1px solid #3C3B5E;
        border-radius: 12px;
        background-color: #262540;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .week_option{
        width: 100%;
        height: 39px;
        border-radius: 8px;
        padding: 8px;
        background-color: transparent;
        border: none;
        text-align: left;
        color: white;
        font-family: 'dm sans';
        font-size: 1rem;
        line-height: 120%;
        cursor: pointer;
    }

    .week_option:hover{
        background-color: #302F4A;
    }

</style>