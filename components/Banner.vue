<template>
    <div class="banner" id="home">
        <p class="medium-p">
            <span class="animated-word">hello world</span>, я
        </p>
        <h1 class="big-title">Жанузаков Мухит</h1>
        <p class="big-p">и я люблю web</p>
        
    </div>
</template>

<script>
    export default {

       

        
    }
</script>

<style scoped>
    .banner{
        width: 100%;
        padding-top: 14rem;
        padding-bottom: 20rem;
        color: var(--main-text-color);
        animation: banner-loading 2s ease-in-out;
    }

    @keyframes banner-loading {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .animated-word{
        animation: electic-word 2s ease-in-out forwards infinite;
    }

    @keyframes electic-word {
        0% {
            opacity: 1;
        }

        10% {
            opacity: 0;
        }

        12% {
            opacity: 1;
        }

        20% {
            opacity: 0;
        }

        22% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }

    h1, h2, h3, h4, h5, p{
        margin:0;
    }

    .big-title{
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 0.9rem;
    }

    .big-p{
        font-size: 2rem;
        font-weight: 200;
    }

    .medium-p{
        font-size: 1.2rem;
        font-weight: 200;
        font-family: 'Press Start 2P', cursive;
    }

    @media (max-width: 600px){
        .big-title{
            font-size: 2.2rem;
            font-weight: 700;
            letter-spacing: 0.9rem;
        }

        .big-p{
            font-size: 1.7rem;
            font-weight: 200;
        }

        .medium-p{
            font-size: 1rem;
            font-weight: 200;

        }
    }
</style>