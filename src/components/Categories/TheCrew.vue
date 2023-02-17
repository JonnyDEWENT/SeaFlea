<template>
  <div class="the-crew tcr">
    <img class="tcr__head-image" src="../../assets/crew.jpg" />
      <h1 class="tcr__header">{{ title }}</h1>
      <div class="tcr__row-div row">
        <img class="tcr__image" src="../../assets/crew1.jpg" />
        <h3 class="tcr__image-caption">Captain Brian Butts</h3>
        <img class="tcr__image" src="../../assets/crew3.jpg" />
        <h3 class="tcr__image-caption">Captain April</h3>
        <img class="tcr__image" src="../../assets/crew2.jpg" />
        <h3 class="tcr__image-caption">Captain Sam</h3>
        <img class="tcr__image" src="../../assets/crew4.jpg" />
        <h3 class="tcr__image-caption">First Mate Will</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    switchContentSides: true,
    title: "MEET THE CREW",
    text: [],
    image: "Brian.jpg",
  }),
};
</script>


<style scoped>
.tcr {
  padding-bottom: 0%;
  align-content: center;
}

@media (min-width: 1000px) {
  .tcr {
    margin-bottom: 20%;
    align-content: center;
  }

  .tcr__image {
    padding-left: 10%;
    width: 30%;
  }

  .tcr__header {
    font-size: 6em;
    text-align: center;
  }

  .tcr__row-div {
    padding: 10%;
  }
}

@media (max-width: 1000px) and (min-width: 500px) {

  .il__row-text,
  .il__row-image,
  .ir__row-text,
  .ir__row-image {
    width: 100%;
    margin-top: 2%;
  }

  .tcr__image {
    width: 85vw;
    margin-left: 7.5vw;
  }

  .tcr__header {
    font-size: 3em;
    margin-right: 8%;
    margin-bottom: -7%;
    z-index: 1000;
    position: relative;
    color: lightgray;
    text-align: right;
  }
}

@media (max-width: 500px) {

  .tcr__image {
    max-width: 100vw;
  }

  .tcr__header {
    line-height: normal;
    font-size: 3em;
    margin-top: -10%;
    z-index: 1000;
    position: relative;
    color: lightgray;
    text-align: center;
  }

  .tcr__image-caption {
    color: white;
    font-size: 1.5em;
    margin-left: 2.5%;
    padding-left: 2%;
    margin-top: -10%;
    margin-bottom: 2%;
  }
  
  .tcr__head-image{
    max-width: 100vw;
  }
}
</style>

