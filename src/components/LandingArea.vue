<template>
<div class="landing-area la container">
  <div class="la__logo-div">
    <img class="la__title" src="../assets/seaflealogo.png">
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
  margin-bottom:2%;
  margin-top:-2%;
}

.la__image{
  width: 100vw;
  opacity: 50%;
  z-index: 10;
}
.la__logo-div{
  background-image: url("../assets/landing-area.jpg");
  text-align: center;
  right: 0;
  bottom: 0;
  max-width: 100%;
  height: 110vh;
  padding-top:10%;
  opacity: 0.7;
  background-position-x: center;
} 

.la__title {
  min-width: 30%;
  max-width: 80%;
  padding: 20px;
  margin-top:10%;
}

@media (min-width:1000px) {
  .la__logo-div{
    background-size: cover;
  }
  .la__title{
    display: none;
  }

}

@media (max-width:1000px) {

}

</style>
