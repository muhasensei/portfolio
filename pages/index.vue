<template>
  <div>
    <div class="container">
      <Navbar/>
      <section>
        <Banner/>
      </section>
      <section>
        <About/>
      </section>
      <Projects/>
      <section>
      <Contact/>
      </section>
      <!-- fixed items: -->
      <Socials/>
      <Email/>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
    }
  },
}
</script>

<style>
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

section {
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

:root{
  --back-color: #00ABE1;
  --main-text-color: #D2FAFF;
  --secondary-text-color: #161F6D;
  --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}

body{
  background-color: rgb(112, 38, 185);
  color: #fff;
  line-height: 1.3;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: 'Literata', serif;
}

a{
  text-decoration: none;
  color: inherit;
}

.section-divider{
    background-color: var(--main-text-color);
    color: var(--secondary-text-color);
}

</style>
