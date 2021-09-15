<template>
    <div>
        <center>
            <div class="first-section" id="about_me">
                    <div class="card-img">
                        <img src="../assets/poland.JPG" alt="My photo">
                    </div>
                    <p class="light-p">
                        Привет, меня зовут Мухит.
                        Я junior веб-разработчик из Казахстана. На данный момент открыть к предложениям. 
                    </p>
                    <p class="resume">
                        <el-button @click="openResume" href="https://hh.kz/resume/8776d6d4ff0920b1970039ed1f444641534972" plain>
                            Просмотреть резюме (hh.kz)
                        </el-button>
                    </p>

                    <el-row type="flex" justify="center" align="middle"  :gutter="12">
                        <el-col :sm="12" :md="4" class="medium-p">
                            Мой арсенал:
                        </el-col>
                        <el-col :sm="12" :md="4" class="hidden-md-and-down">
                            <div class="vertical-line"></div>
                        </el-col> 
                        <el-col :sm="12" :md="4" class="medium-p">
                            HTML, CSS, Nuxt JS, Vue JS, Express JS, Laravel
                        </el-col>
                    </el-row>
            </div>
        </center>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';    

    export default {
        methods:{
            openResume(){
                window.open('https://hh.kz/resume/8776d6d4ff0920b1970039ed1f444641534972')
            },
           
        }
    }
</script>

<style scoped>

    .card-img{
        margin-top: 110px;
    }

    .card-img img{
        width: 25%;
        height: 25%;
        clip-path: circle();
    }

    .el-divider__text{
        background-color: var(--main-text-color);
        font-size: 1.6rem;
    }

    /* .resume{
    } */

    .first-section{
        width: 70%;
        padding-bottom: 100px;;
    }

    .light-p{
        font-size: 1.5rem;
        text-align: center;
        font-weight: 300;
        /* margin-bottom: 50px; */
    }


    .medium-p{
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
    }


    .vertical-line{
        width: 2px;
        height: 140px;
        background-color: var(--main-text-color);
    }

    @media (max-width: 600px) {
        .card-img img{
            width: 55%;
            height: 55%;
        }
        .first-section{
            width: 100%;
        }
        .el-divider__text{
            font-size: 0.8rem;
        }
        .light-p{
            font-size: 1.1rem;
        }
        .medium-p{
            font-size: 1rem
        }
    }
</style>