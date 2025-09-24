<script setup>

</script>

<template>
    <section class="details_container">
        <div class="details_detail">
            <h3 class="details_title">
                Feels Like
            </h3>
            <strong class="details_data">
                18°
            </strong>
        </div>
        <div class="details_detail">
            <h3 class="details_title">
                Humidity
            </h3>
            <strong class="details_data">
                46%
            </strong>
        </div>
        <div class="details_detail">
            <h3 class="details_title">
                Wind
            </h3>
            <strong class="details_data">
                14 km/h
            </strong>
        </div>
        <div class="details_detail">
            <h3 class="details_title">
                Precipitation
            </h3>
            <strong class="details_data">
                0 mm
            </strong>
        </div>
    </section>
</template>

<style scoped>
    .details_container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        grid-column: 1/2;
        grid-row: 3/4;
        margin-bottom: 48px;
    }

    .details_detail{
        width: 182px;
        height: 118px;
        border-radius: 12px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        background-color: #262540;
        border: 1px solid #3C3B5E;
    }

    .details_title{
        color: #D4D3D9;
        font-family: 'dm sans';
        font-size: 1.125rem;
        line-height: 120%;
        font-weight: medium;
        margin: 0px;
        text-align: left;
    }

    .details_data{
        font-family: 'dm sans';
        color: white;
        font-size: 2rem;
        line-height: 100%;
        font-weight: 300;
        white-space: nowrap;
    }

    @media(max-width: 1270px){
        .details_container{
            gap: 12px;
        }
    }

</style>