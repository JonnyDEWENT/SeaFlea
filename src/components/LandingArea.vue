<template>
  <div class="landing-area la container">
    <div class="la__logo-div">
      <div class="la__image-div">
      <img class="la__image" src="../assets/Home.jpg">
      <img class="la__title-logo" src="../assets/seaflealogo.png">
      </div>
      <h3 class="la__title">Grand Haven Charter Fishing</h3>
      <h5 class="la__subtitle">Chinook Pier Sportfishing | Grand Haven, Michigan</h5>
      <div class="la__text-div">
        <h5 class="la__subtitle-desktop">Chinook Pier Sportfishing | Grand Haven, Michigan</h5>
        <p v-for="(line, index) in text" :key="index">
          {{ line }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',

  data: () => ({
    images: [],
    headers: [],
    text: ["If you've got 'THE ITCH' to fish on Lake Michigan, then Sea Flea Fishing Charters has the cure. ",
    "The value of a fishing experience is measured by the lasting memories it creates. Here at Sea Flea Charters, it’s our mission to provide you the best experience by creating memories you’ll never forget.",
    "We want to be your go-to fishing charter. With access to Lake Michigan's world-class fishery, Sea Flea Charters offers the ultimate salmon and trout fishing experience. Not only do we want to provide you with the opportunity to catch the fish of a lifetime, we want to build a lasting relationship. We want to get to know you and be a part of your fondest fishing memories. Come have fun enjoying the great outdoors and let us show you what makes Sea Flea Charters the best salmon and trout fishing charter on Lake Michigan."],
    
  }),
}
</script>

<style scoped>
.la {
  margin-bottom: 2%;
  margin-top: -2%;
  max-height: 100vh;
  text-align: center;
  /* background: url("../assets/rates-background.png") center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
}


.la__logo-div {
  background-size: auto;
  text-align: center;
  right: 0;
  bottom: 0;
  padding-top: 8%;
}

.la__title-logo {
  min-width: 30%;
  max-width: 80%;
  padding: 20px;
}

@media (min-width:1000px) {
  .la{ 
    margin-top: 3%;
    padding-top: 6%;
  }
  .la__logo-div {
    height: 100vh;
    background-size: 50%;
    text-align: center;
    margin-top: -100px;
    background: linear-gradient(to top left, #fff 30%, #fff 60%, rgb(210, 210, 126) 50%, rgb(210, 210, 126)  60%);
  }

  .la__title-logo {
    display: none;
  }

  .la__image {
    /* height: 80vh; */
    margin-top: 139px;
    z-index: 10;
    float: left;
    margin-right: 0%;
    padding: 5% 15%;
    margin-top: -100px;
    max-width: 100%;
  }
  .la__image-div{
    width: 50%;
  }

  .la__title {
    text-align: left;
    font-size: 2.5em;
    margin-top: 50px;
  }

  .la__subtitle-desktop {
    font-size: 1.3em;
    text-align: left;
    margin-top: 10%;
    margin-bottom:2%;
    color: rgb(210, 210, 126)
  }
  .la__subtitle{
    display: none;
  }

  .la__text-div{
    width: 50%;
    padding-right: 8%;
    float: right;
    text-align: left;
  }

}


@media (max-width:1000px) and (min-width: 500px) {

  .la{
    margin-top: 0px;
    padding-top: 0px;
  }
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
    margin-top: 0%;
  }

  .la__logo-div {
    background-size: cover;
    text-align: center;
  }
  .la__text-div{
    display: none;
  }
}


@media (max-width:500px) {
  .la__title-logo {
    top: 0.3%;
    position: absolute;
    left: 10%;
    filter: brightness(120%);
    filter: contrast(120%);
    filter: drop-shadow(5px 5px 5px black);
  }

  .la__title {
    top: 1.25%;
    position: absolute;
    padding: 5%;
    width: 100%;
  }

  .la__subtitle {
    top: 1.65%;
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
    margin-top: 10%;
  }

  .la__logo-div {
    background-size: cover;
    text-align: center;
  }
  .la__text-div{
    display: none;
  }
}
</style>
