<template>
  <v-app>
    <header-component/>
    <v-main>
      <!-- <HelloWorld/> -->
      <landing-area/>
      <about-us/>
      <the-charter/>
      <the-crew/>
      <the-boat/>
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
import HeaderComponent from './components/Header.vue';

export default {
  name: 'App',

  components: {
    AboutUs,
    HeaderComponent,
    LandingArea,
    TheCharter,
    TheCrew,
    TheBoat,
  },

  data: () => ({
    //
    tabs: [{'name':'About Us', 'element': 'au'}, {'name':'The Charter', 'element': 'tc'}, {'name':'The Crew', 'element': 't'}, {'name': 'The Boat', 'element': 'tb'}, {'name': 'Photos', 'element': 'p'}, {'name': 'Guest Info', 'element': 'gi'}, {'name': 'Rates', 'element': 'r'}, {'name':'Contact', 'element': 'c'}],
    text: ["Here's some text about us. It's here to give potential customers some of our background and qualifications"],
    images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYYXz2QYBWPsgQ1JAD15Wcz7Ub-nYYH66dg&usqp=CAU"],
  }),
};
</script>
