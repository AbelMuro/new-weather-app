<script setup>

</script>

<template>
    <div class="temp" v-for="(i) in 8"></div>
</template>

<style scoped>
    .temp{
        width: 100%;
        height: 60px;
        border-radius: 8px;
        padding: 0px 16px 0px 12px;
        background-color: #302F4A;
        border: 1px solid #3C3B5E;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
    }
</style>