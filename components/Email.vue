<template>
    <div>
    <ul class="fixed-right">
        <li>
            <a href="mailto:zhanmuha01@gmail.com">zhanmuha01@gmail.com</a>
        </li>
        
    </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.fixed-right{
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  width: 40px;
  position: fixed;
  bottom: 0px;
  right: 40px;
  left: auto;
  z-index: 10;
  animation: email-loading 2s ease-in-out;
}

@keyframes email-loading {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 600px){
    .fixed-right{
        display: none;
    }
}

.fixed-right li{
    writing-mode: vertical-lr;
}

.fixed-right li a{
    text-decoration: none;
    padding-bottom: 20px;
    color: var(--main-text-color);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}

.fixed-right li a:hover{
    color: var(--secondary-text-color);
    padding-bottom: 30px;
}

.fixed-right::after{
    content: "";
    display: block;
    width: 2px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--main-text-color);
}
</style>