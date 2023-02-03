<template>
  <div class="the-crew tcr">
    <div class="ImageLeft il">
      <h1 class="tcr__header">{{title}}</h1>
      <div class="il__row-div row">
        <div v-if="image" :class="switchContentSides == true ? 'ir__row-image col' : 'il__row-image col'">
          <img class="tcr__image" src="../../assets/crew1.png"/>
          <img class="tcr__image" src="../../assets/crew2.png"/>
          <img class="tcr__image" src="../../assets/crew3.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    switchContentSides: true,
    title: "THE CREW",
    text: [],
    image: "Brian.jpg",
  }),
};
</script>


<style scoped>
 @media (min-width:1025px)  { 
  .tcr{
    margin-bottom: 20%;
    align-content: center;
  }
  .tcr__image{
    padding-left: 5.5%;
  }
  .tcr__header{
    font-size: 4em;
    margin-left: 10%;
  }
}

@media (max-width:1025px)  { 
    .il__row-text, .il__row-image, .ir__row-text, .ir__row-image{
        width: 100%;
        margin-top: 2%;
    }
  .tcr__image{
    max-width: 85vw;
    margin-left:7.5vw;
  }
  .tcr__header{
    font-size: 3em;
    margin-left:3%;
    margin-bottom: -5%;
  }
} 
</style>

