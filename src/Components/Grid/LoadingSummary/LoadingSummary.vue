<script setup>
    import {motion} from 'motion-v';
</script>

<template>
    <section class="loading_summary">
        <div class="loading_icon">
            <motion.div 
                class="circle"
                :initial="{y: 0}"
                :animate="{y: [10,-10, 10]}"
                :transition="{duration: 2, delay: 0.9, repeat: Infinity, repeatType: 'loop'}"
                ></motion.div>
            <motion.div 
                class="circle"
                :initial="{y: 0}"
                :animate="{y: [10,-10, 10]}"
                :transition="{duration: 2, delay: 0.7, repeat: Infinity, repeatType: 'loop'}"
                ></motion.div>
            <motion.div 
                class="circle"
                :initial="{y: 0}"
                :animate="{y: [10,-10, 10]}"
                :transition="{duration: 2, delay: 0.5, repeat: Infinity, repeatType: 'loop'}"
                ></motion.div>
        </div>
        Loading...
    </section>
</template>

<style scoped>
    .loading_summary{
        grid-column: 1/2;
        grid-row: 1/2;
        width: 100%;
        height: 286px;
        border-radius: 20px;
        background-color: #262540;
        display: flex;
        flex-direction: column;
        gap: 14px;
        justify-content: center;
        align-items: center;
        color: #D4D3D9;
        font-family: 'dm sans';
        font-size: 1.125rem;
        line-height: 120%;
        font-weight: medium;
    }

    .loading_icon{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .circle{
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background-color: white;
    }

    @media(max-width: 945px){
        .loading_summary{
            grid-column: 1/3;
        }
    }

    @media(max-width: 840px){
        .loading_summary{
            margin-bottom: 20px;
        }
    }

</style>