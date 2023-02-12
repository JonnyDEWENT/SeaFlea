<template>
  <div class="brands br">
    <div class="ImageLeft il">
      <h1 class="br__header">{{ title }}</h1>
      <div class="il__row-div row">
        <div class="ir__row-image col">
          <img class="br__image" src="../../assets/seaflealogo.png" />
          <img class="br__image" src="../../assets/seaflealogo.png" />
          <img class="br__image" src="../../assets/seaflealogo.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    switchContentSides: true,
    title: "BRANDS WE TRUST",
    text: [],
  }),
};
</script>


<style scoped>
.br {
  margin-top: 20%;
  padding-top: 10%;
  padding-bottom: 20%;
  align-content: center;
}
@media (min-width: 1000px) {
  .br {
    margin-bottom: 20%;
    align-content: center;
  }
  .br__image {
    padding-left: 10%;
    width: 30%;
  }
  .br__header {
    font-size: 6em;
    text-align: center;
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
  .br__image {
    max-width: 85vw;
    margin-left: 7.5vw;
  }
  .br__header {
    font-size: 3em;
    margin-right: 8%;
    z-index: 1000;
    position: relative;
    text-align: center;
  }
}

@media (max-width: 500px) {
  .il__row-text,
  .il__row-image,
  .ir__row-text,
  .ir__row-image {
    width: 100%;
    margin-top: 2%;
  }
  .br__image {
    max-width: 85vw;
    margin-left: 7.5vw;
  }
  .br__header {
    font-size: 3em;
    margin-right: 8%;
    margin-bottom: -22%;
    z-index: 1000;
    position: relative;
    color: lightgray;
    text-align: right;
  }
}
</style>

