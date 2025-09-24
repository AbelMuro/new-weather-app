<script setup>
    import {ref} from 'vue';
    import {motion, AnimatePresence} from 'motion-v';
    import icons from '@/assets/icons';

    const open = ref(false);
    const weekday = ref('Monday');

    const handleOpen = () => {
        open.value = !open.value;
    }

    const handleWeekday = (day) => {
        weekday.value = day;
        handleOpen();
    }

</script>

<template>
    <div class="week_container">
        <button class="week" @click="handleOpen">
            {{weekday}}
            <motion.img 
                class="week_arrow" 
                :src="icons['arrow']" 
                :initial="false"
                :animate="open ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}"
                :transition="{duration: 0.3}"
                />
        </button>
        <AnimatePresence>
            <motion.ul 
                class="week_dropdown" 
                v-if="open"
                :initial="{scaleY: 0}"
                :animate="{scaleY: 1}"
                :exit="{scaleY: 0}"
                :transition="{duration: 0.3}"
                >
                <li>
                    <button 
                        class="week_option" 
                        @click="() => handleWeekday('Monday')"
                        :style="weekday === 'Monday' ? {backgroundColor: '#302F4A'} : {}"
                        >
                        Monday
                    </button>
                </li>
                <li>
                    <button 
                        class="week_option" 
                        @click="() => handleWeekday('Tuesday')"
                        :style="weekday === 'Tuesday' ? {backgroundColor: '#302F4A'} : {}"
                        > 
                        Tuesday
                    </button>                
                </li>
                <li>
                    <button 
                        class="week_option" 
                        @click="() => handleWeekday('Wednesday')"
                        :style="weekday === 'Wednesday' ? {backgroundColor: '#302F4A'} : {}"
                        >
                        Wednesday
                    </button>
                </li>
                <li>
                    <button 
                        class="week_option" 
                        @click="() => handleWeekday('Thursday')"
                        :style="weekday === 'Thursday' ? {backgroundColor: '#302F4A'} : {}"
                        >
                        Thursday
                    </button>
                </li>
                <li>
                    <button 
                        class="week_option" 
                        @click="() => handleWeekday('Friday')"
                        :style="weekday === 'Friday' ? {backgroundColor: '#302F4A'} : {}"
                        >
                        Friday
                    </button>
                </li>
                <li>
                    <button 
                        class="week_option" 
                        @click="() => handleWeekday('Saturday')"
                        :style="weekday === 'Saturday' ? {backgroundColor: '#302F4A'} : {}"
                        >
                        Saturday
                    </button>
                </li>
                <li>
                    <button 
                        class="week_option" 
                        @click="() => handleWeekday('Sunday')"
                        :style="weekday === 'Sunday' ? {backgroundColor: '#302F4A'} : {}"
                        >
                        Sunday
                    </button>                
                </li>
            </motion.ul>
        </AnimatePresence>

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

    .week:focus{
        outline: 1px solid white;
        outline-offset: 2px;
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
        transform-origin: top center;
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