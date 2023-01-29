<template>
<div class="landing-area la container">
  <div class="la__logo-div">
    <img class="la__image" src="../assets/panda.jpg">
    <h1 class="centered">Logo And Image Backdrop</h1>
  </div>
</div>
</template>

<script>
  export default {
    name: 'AboutUs',

    data: () => ({
     images: [],
     headers:[],
     text:[]
    }),
  }
</script>

<style scoped>
.la{
  height: 23%;
}

.la__image{
  width: 100vw;
  opacity: 50%;
  z-index: 10;
}
.la__logo-div{
 padding-bottom: 5%;
  /* background-image: url("../assets/panda.jpg"); */
  /* background-width */
  text-align: center;
  height: 90vh;
} 

.centered {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
