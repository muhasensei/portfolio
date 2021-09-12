<template>
    <div>
        <div class="navbar">
            <div class="nav-items">
                <ul>
                    <li><a class="nav-link" @click="show('home')">главная</a></li>
                    <li><a class="nav-link" @click="show('about_me')">обо мне</a></li>
                    <li><a class="nav-link" @click="show('projects')">проекты</a></li>
                    <li><a class="nav-link" @click="show('contacts')">контакты</a></li>
                </ul>
            </div>
            <div class="nav-items-sm">
                <el-link :underline="false" icon="el-icon-menu"  class="hidden-md-and-up" style="font-size: 28px;" @click="drawer = true"></el-link>
            </div>

        </div>
            <el-drawer
                class="drawer hidden-md-and-up"
                size="70%"
                title="I am the title"
                :visible.sync="drawer"
                :with-header="false">
                <br>
                <ul>
                <el-button @click="drawer = false" type="primary" class="el-icon-close"></el-button>
                    <li><a class="nav-link" @click="show('home')">главная</a></li>
                    <li><a class="nav-link" @click="show('about_me')">обо мне</a></li>
                    <li><a class="nav-link" @click="show('projects')">проекты</a></li>
                    <li><a class="nav-link" @click="show('contacts')">контакты</a></li>
                </ul>
            </el-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
            };
        },
        methods:{
            show(element){
                document.getElementById(element).scrollIntoView({behavior: "smooth"});
            }
        }
    }
</script>

<style scoped>
    .drawer{
        color: var(--secondary-text-color);
    }

    .nav-link{
        cursor: pointer;
    }

    .drawer ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
    }

    .drawer ul li{
        font-weight: 600;
        padding-top: 1.5em;
        font-size: 28px;
        letter-spacing: 0.3em;
    }

    .navbar {
        padding-top: 0.4em;
        padding-bottom: 0.4em;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        position: fixed;
        top: 0px;
        z-index: 11;
        width: 100%;
        background-color: rgba(10, 25, 47, 0.25);
        backdrop-filter: blur(10px);
        transition: var(--transition);
        filter: none !important;
        pointer-events: auto !important;
        user-select: auto !important;
        
        animation: nav-loading 2s ease-in-out;
    }

    @keyframes nav-loading {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .navbar a{
        text-decoration: none;
        color: var(--main-text-color);
    }

    .navbar ul{
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
    }

    .navbar ul li{
        padding-right: 20px;
        font-weight: 600;
        letter-spacing: 0.3em;
    }

    .nav-items{
        display: block;
    }

    .nav-items-sm{
        display: none;
    }

    @media (max-width: 750px) {
        .nav-items{
            display: none;
        }

        .nav-items-sm{
            display: block;
        }

        .navbar{
            animation: nav-loading 1s ease-in-out;
        }
    }

</style>