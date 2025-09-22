<script setup>
    import UnitsButton from './UnitsButton';
    import icons from './icons';
</script>


<template>
    <header class="header">
        <img class="logo" :src="icons['logo']" />
        <UnitsButton/>
    </header>
</template>

<style scoped>
    .header{
        width: 1216px;
        display: flex;
        justify-content: space-between;
        margin: 48px auto 64px auto;
    }

    .logo{
        height: 40px;
        object-fit: contain;
    }

    @media(max-width: 1270px){
        .header{
            width: 90%;
        }
    }

    @media(max-width: 600px){
        .logo{
            height: 33px;
        }
    }
</style>