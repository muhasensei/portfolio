<template>
    <div>
        <center>
            <div class="second-section" id="projects">
                <!-- first project -->
                <el-container class="project-container first-project">
                        <el-row :gutter="24">
                            <el-col :sm="24" :md="12">
                                <div align="center">
                                    <a href="https://derekterqory.netlify.app/" class="pl">
                                        <img src="../assets/derekter_qory.PNG" class="image">
                                    </a>
                                </div>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <div align="left">
                                    <a class="project-title" href="https://derekterqory.netlify.app/"><h3>Веб-сайт для изучения теории баз данных</h3> </a>
                                        <div class="card">
                                            <p>Дипломный проект. Приложение MERN с авторизацией. Курс предлагает видеолекции, тесты, экзаменационный тест и сертификат в конце курса. Повеселись!</p>
                                        </div>
                                        <div class="techs">
                                            <ul>
                                                <li>REST API</li>
                                                <li>React JS</li>
                                                <li>Express JS</li>
                                                <li>MongoDB</li>
                                            </ul>
                                        </div>
                                </div>
                            </el-col>
                        </el-row>
                </el-container>


                <!-- end first project -->


                <el-divider class="hidden-md-and-up"></el-divider>


                <!-- second project -->

                <el-container class="project-container second-project">
                        <el-row :gutter="24">
                            <el-col :sm="24" :md="12">
                                <div align="left">
                                    <a class="project-title" href="https://memories-mukhit-project.netlify.app/"><h3>Memories</h3> </a>
                                    <div class="card">
                                        <p>Сайт для написания воспоминаний. Простое приложение MERN без авторизации. Поддерживает CRUD. Повеселись!</p>
                                    </div>
                                    <div class="techs">
                                        <ul>
                                            <li>REST API</li>
                                            <li>React JS</li>
                                            <li>Express JS</li>
                                            <li>MongoDB</li>
                                        </ul>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <a href="https://memories-mukhit-project.netlify.app/" class="pr">
                                    <img src="../assets/memories.PNG" class="image">
                                </a>
                            </el-col>
                        </el-row>
                </el-container>

                <!-- end second project -->


                <el-divider class="hidden-md-and-up"></el-divider>

                <!-- third project -->

                <el-container class="project-container third-project">
                        <el-row :gutter="24">
                            <el-col :sm="24" :md="12">
                                <a href="https://my-hero-posts.herokuapp.com/" class="pl">
                                    <img src="../assets/my_hero_posts.PNG" class="image">
                                </a>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <div class="project" align="left">
                                    <a class="project-title" href="https://my-hero-posts.herokuapp.com/"><h3>My hero posts</h3> </a>
                                    <div class="card">
                                        <p>Сайт для просмотра постов + Админка. В админке реализован CRUD для постов, категории, тегов. Логин: admin@admin.com, пароль: admin. Повеселись!</p>
                                    </div>
                                    <div class="techs">
                                        <ul>
                                            <li>Laravel 7</li>
                                            <li>PHP</li>
                                            <li>SQL</li>
                                            <li>Bootstrap 4</li>
                                        </ul>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                </el-container>

                <!-- end third project -->

                <el-divider class="hidden-md-and-up"></el-divider>


                <!-- fourth project -->

                <el-container class="project-container fourth-project">
                        <el-row :gutter="24">
                            <el-col :sm="24" :md="12">
                                <div align="left">
                                    <a class="project-title" href="https://e-documents-kaznu.netlify.app/"><h3>E-document management system</h3> </a>
                                    <div class="card">
                                        <p>Система электронного документооборота - проект для МОН РК по
                                        создании масштабируемой отказоустойчивой информационной системы 
                                        цифровизации предприятия с использованием технологий Big Data</p>
                                    </div>
                                    <div class="techs">
                                        <ul>
                                            <li>Nuxt JS</li>
                                            <li>Express JS</li>
                                            <li>MongoDB</li>
                                            <li>REST API</li>
                                        </ul>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :sm="24" :md="12">
                                <a href="https://e-documents-kaznu.netlify.app/" class="pr">
                                    <img src="../assets/kaznu.PNG" class="image">
                                </a>
                            </el-col>
                        </el-row>
                </el-container>

                <!-- end fourth project -->

            </div>
        </center>
    </div>
</template>

<script>
    

    import 'element-ui/lib/theme-chalk/display.css';    
    export default {
        mounted(){
            const observer = new IntersectionObserver(entries => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('scrolled');
                    }
                });
            });
            observer.observe(document.querySelector('.first-project'));
            observer.observe(document.querySelector('.second-project'));
            observer.observe(document.querySelector('.third-project'));
            observer.observe(document.querySelector('.fourth-project'));
        }
    }
</script>

<style scoped>
    .section-divider{
        background-color: var(--main-text-color);
        color: var(--secondary-text-color);
        font-size: 1.6rem;
    }

    .project-container{
        margin-top: 100px;
        margin-bottom: 100px;
    }

    .scrolled{
        animation: project-loading 2s ease-in-out;
    }

    @keyframes project-loading {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    
    .project-title{
        font-size: 1.5rem;
    }


    .techs ul{
        display: flex;
        list-style: none;
    }

    .techs ul li{
        padding-right: 10px;
        font-weight: 300;
        letter-spacing: 0.1em;
    }

    a, img{
        transition: var(--transition); 
    }
    

    a:hover{
        color: var(--secondary-text-color);
    }

    .pr img:hover{
        padding-left: 20px;
    }

    .pl img:hover{
        padding-right: 20px;
    }


    .card{
        border: 2px solid var(--main-text-color);
        border-radius: 3px;
        padding: 9px 9px;
        margin-top: 10px;
    }

    h1, h2, h3, h4, h5, h6{
        margin: 0;
    }
    .el-divider__text{
        background-color: var(--main-text-color);
    }

    .second-section{
        width: 70%;
        padding-bottom: 100px;
    }

    .light-p{
        font-size: 1.2rem;
        font-weight: 200;
        margin-top: 150px;
    }

    .medium-p{
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
    }

    .row{
        margin-top: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .vertical-line{
        width: 2px;
        height: 140px;
        background-color: var(--main-text-color);
    }

    

    .image{
        max-width: 490px;
        max-height: 380px;
    }

    @media (max-width: 1100px) {
        .image{
            width: 300px;
            height: 210px;
        }
    }

    @media (max-width: 600px) {
        .project-title{
            font-size: 1.1rem;
        }

        .image{
            width: 300px;
            height: 210px;
        }

        .second-section{
            width: 100%;
        }

        .pr img:hover{
            padding-left: 0;
        }

        .pl img:hover{
            padding-right: 0;
        }
    }

    @media (max-width: 800px) {
        .image{
            width: 350px;
            height: 230px;
        }
    }


</style>