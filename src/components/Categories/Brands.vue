<template>
  <div class="brands br">
    <div>
      <h1 class="br__header">{{ title }}</h1>
      <div>
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
  background-image: url("../../assets/rates-background.png");
  background-size: cover;
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
  .br{
    margin-bottom: 10%;
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
    text-align: right;
  }
}
</style>

