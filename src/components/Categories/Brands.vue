<template>
  <div class="brands br">
    <div>
      <h1 class="br__header">{{ title }}</h1>
        <div class="br__row-image">
          <img class="br__image" src="../../assets/brands.jpg" />
        </div>
        <h1 class="br__header-mobile">{{ title }}</h1>
      <div>
        <div class="br__text-div col">
          <div v-for="(brand, index) in brands" :key="index">
            <h3>{{ brand }}</h3>
            <p>{{ text[index] }}</p>
            <!-- <a :href="links[index]">
              <v-btn>Visit Site</v-btn>
            </a> -->
          </div>
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
    title: "TRUSTED BRANDS",
    brands: ["Action Fly","Dreamweaver Lures","Shimano Fishing","Spin Doctors"],
    text: ["Every Action Fly is designed and tested to be a top producer. All colors have been proven to catch fish for anglers throughout the Great Lakes and ocean. So effective have these flies been that many tournaments have been won with the help of the Hypnotic Action Fly."
      , "Dreamweaver develops and produces tournament-proven Big-water fishing tackle including Dreamweaver Spoons, Fuzzy Bear spoons, Action Fly, Strong fly, Spin Doctor, and much more. Dreamweaver Products are standard issue for Trout/Salmon fisherman everywhere. Professional fisherman swear by our products to deliver results."
      ,"Across the planet, the Shimano name is synonymous with fishing. The company is regarded as one of the forerunners in product innovation and an industry leader. Shimano prides itself on its ability to design and produce fishing tackle that features cutting edge technology. for anglers throughout the Great Lakes and ocean. So effective have these flies been that many tournaments have been won with the help of the Hypnotic Action Fly."
      ,"Spin Doctors have proven to be the most productive rotator on the market today. An Action fly, spoon or cutbait combination behind this rotator is the rig of choice for anglers throughout the Great Lakes and ocean. It has proven itself so effective, Kings and Cohos swim in fear of being lured into its hypnotic action."],
    links: []
  }),
};
</script>


<style scoped>
.br {
  padding-top: 10%;
  padding-bottom: 20%;
  align-content: center;
  background-size: cover;
}

@media (min-width: 1000px) {
  .br {
    margin-bottom: 40%;
    align-content: center;
    margin-top: 4%;
    padding-top: 13%;
    /* background-image: url("../../assets/rates-background.png"); */
  }

  .br__image {
    width: 100%;
    float: right;
    padding-right: 10%;
  }

  .br__header {
    font-size: 5em;
    text-align: center;
    margin-bottom: -4%;
    color: lightgray;
    padding-left: 15%;
  }
  .br__header-mobile{
    display: none;
  }
  .br__text-div{
    padding: 7vh 10% 0% 0%;
    width: 50%;
    float: right;
  }

  .br__row-image{
    float: left;
    width: 40%;
    margin-left: 10%;
  }
}

@media (max-width: 1000px) and (min-width: 500px) {

  .br{
    
  }
  .br__image {
    max-width: 100vw;
  }

  .br__header-mobile {
    font-size: 3em;
    margin-right: 8%;
    z-index: 1000;
    position: relative;
    text-align: center;
  }
  .br__header{
    display: none;
  }
}

@media (max-width: 500px) {
  .br {
    margin-bottom: 10%;
  }

  .br__image {
    width: 100vw;
  }

  .br__header-mobile {
    color: lightgray;
    margin-top: -8%;
    margin-bottom: 5%;
    font-size: 2.4em;
    z-index: 1000;
    position: relative;
    text-align: center;
  }
  .br__header{
    display: none;
  }
  .br__text-div{
    padding:2%;
    font-size: 0.9em;
  }
}
</style>

