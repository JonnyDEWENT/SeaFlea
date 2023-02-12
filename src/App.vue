<template>
  <v-app>
    <header-component/>
    <v-main class="app">
      <landing-area/>
      <about-us/>
      <the-charter/>
      <the-crew/>
      <the-boat/>
      <rates/>
      <guest-info/>
      <brands/>
      <contact/>

    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import LandingArea from './components/LandingArea.vue'
import AboutUs from './components/Categories/AboutUs.vue'
import TheCharter from './components/Categories/TheCharter.vue'
import TheCrew from './components/Categories/TheCrew.vue'
import TheBoat from './components/Categories/TheBoat.vue'
import GuestInfo from './components/Categories/GuestInfo.vue'
import Rates from './components/Categories/Rates.vue'
import Contact from './components/Categories/Contact.vue'
import HeaderComponent from './components/Header.vue';
import Brands from './components/Categories/Brands.vue'

export default {
  name: 'App',

  components: {
    AboutUs,
    HeaderComponent,
    LandingArea,
    TheCharter,
    TheCrew,
    TheBoat,
    GuestInfo,
    Rates,
    Contact,
    Brands
  },

  data: () => ({
    images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYYXz2QYBWPsgQ1JAD15Wcz7Ub-nYYH66dg&usqp=CAU"],
  }),
};
</script>
<style scoped>
.app{
  max-width:100%;
  padding-top: 0px !important;
  font-family: sans-serif;
}
</style>
