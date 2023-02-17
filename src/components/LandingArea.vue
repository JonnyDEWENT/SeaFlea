<template>
  <div class="landing-area la container">
    <img class="la__image" src="../assets/Home.jpg">
    <div class="la__logo-div">
      <img class="la__title-logo" src="../assets/seaflealogo.png">
      <h3 class="la__title">Lake Michigan Charter Fishing</h3>
      <h5 class="la__subtitle">Chinook Pier Sportfishing | Grand Haven, Michigan</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',

  data: () => ({
    images: [],
    headers: [],
    text: []
  }),
}
</script>

<style scoped>
.la {
  margin-bottom: 2%;
  margin-top: -2%;
  max-height: 100vh;
  text-align: center;
}


.la__logo-div {
  background-size: auto;
  text-align: center;
  right: 0;
  bottom: 0;
  padding-top: 10%;
}

.la__title-logo {
  min-width: 30%;
  max-width: 80%;
  padding: 20px;
}

@media (min-width:1000px) {
  .la__logo-div {
    background-size: cover;
    text-align: center;
  }

  .la__title-logo {
    display: none;
  }

  .la__image {
    margin-left: 0%;
    width: 40%;
    height: 110vh;
    z-index: 10;
    margin-bottom: 50%;
  }

  .la__title {
    visibility: hidden;
  }

  .la__subtitle {
    visibility: hidden;
  }

}

@media (max-width:1000px) {
  .la__title-logo {
    top: 0.3%;
    position: absolute;
    left: 10%;
    filter: brightness(120%);
    filter: contrast(120%);
    filter: drop-shadow(5px 5px 5px black);
  }

  .la__title {
    top: 1.5%;
    position: absolute;
    padding: 5%;
    width: 100%;
  }

  .la__subtitle {
    top: 2%;
    text-align: center;
    width: 100%;
    position: absolute;
    color: white;
  }

  .la__image {
    width: 100vw;
    height: 80vh;
    z-index: 10;
    margin-bottom: 50%;
    margin-top: 20%;
  }

  .la__logo-div {
    background-size: cover;
    text-align: center;
  }
}
</style>
