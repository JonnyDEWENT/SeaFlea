<template>
  <v-app>
    <header-component />
    <header-mobile />
    <v-main class="app">
      <landing-area />
      <about-us />
      <the-charter />
      <the-crew />
      <the-boat />
      <rates />
      <guest-info />
      <brands />
      <contact />
      <bottom-bar />
      <Footer />
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
import BottomBar from './components/BottomBar.vue'
import HeaderMobile from './components/HeaderMobile.vue'
import Footer from './components/Footer.vue'

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
    Brands,
    BottomBar,
    HeaderMobile,
    Footer
  },

  data: () => ({
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYYXz2QYBWPsgQ1JAD15Wcz7Ub-nYYH66dg&usqp=CAU"],
  }),

};
</script>

<style scoped>
.app {
  max-width: 100%;
  padding-top: 0px !important;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  font-size: 1.1em;
}

@media (min-width: 1000px) {
  .app {
    /* background: url("./assets/rates-background.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
  }
}
</style>
