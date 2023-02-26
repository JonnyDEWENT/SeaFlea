<template>
    <v-footer
      class="bg-indigo-lighten-1 text-center d-flex flex-column f"
    >
      <div>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          :icon="true"
          class="mx-4"
          variant="text"

        >
        <a :href="icon.link">
            <v-icon class="f__icons" size="x-large">
                {{ icon.icon}}
            </v-icon>
        </a>
        </v-btn>
      </div>
  
      <div class="pt-0">
      </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>Sea Flea Charters LLC</strong>
      </div>
    </v-footer>
  </template>
  
<script>
export default {
    name: 'FooterComponent',

    data: () => ({
        icons: [
            {'icon': 'mdi-facebook', 'link' : 'https://www.facebook.com/SeaFleaCharters'}
    ],
    }),
    methods: {
       
    }
}
</script>
<style>
@media(max-width: 1000px) {
    .f{
        min-height: 150px !important;
    } 
}
@media(min-width: 1000px) {
    .f__icons{ 
        
    }
}
 
</style>