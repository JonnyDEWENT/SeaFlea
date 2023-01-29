<template>
<div class="header h">
    <v-app-bar
        app
        color="black"
        dark
        >
        <div class="d-flex align-center">
            <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="100"
            />
            <v-app-bar-title style="width:200px">Sea Flea Charters</v-app-bar-title>
        <br>
        </div>
         <v-app-bar-nav-icon class="h__nav" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <template class="h__tabs" v-slot:extension>
            <v-tabs class="h__tabs" fixed-tabs>
                <v-tab v-for="tab in tabs" :key="tab" @click="GoTo(tab.element)">{{ tab.name }}</v-tab>
            </v-tabs>
        </template>
    

        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"       
            temporary
            app
            floating
            class="h__nav"
            >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
                >
                <v-list-item v-for="tab in tabs" :key="tab" @click="GoTo(tab.element)">
                    <v-list-item-title>{{ tab.name }}</v-list-item-title>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    name: 'AboutUs',

    data: () => ({
        tabs: [
            {'name':'About Us', 'element': 'au'}, 
            {'name':'The Charter', 'element': 'tc'}, 
            {'name':'The Crew', 'element': 'tcr'}, 
            {'name': 'The Boat', 'element': 'tb'}, 
            {'name': 'Photos', 'element': 'p'}, 
            {'name': 'Guest Info', 'element': 'gi'}, 
            {'name': 'Rates', 'element': 'r'}, 
            {'name':'Contact', 'element': 'c'}
        ],
        drawer: false,
    }),
    methods:{
        GoTo(elementName){
        //     var element = document.getElementsByClassName(elementName)[0];
        //     element.scrollIntoView({behavior: "smooth", block: "start"});
        //     this.drawer = false;
            const yOffset = -150; 
            const element = document.getElementsByClassName(elementName)[0];
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
         }
    }
  }
</script>

<style scoped>

.h__nav{
    display: none;
    opacity: 80%;
    height: 100%;
}

.h__tabs{
    display: none;
    max-width: 75%;
    margin-left: 12.5% !important;
}

@media (min-width:1025px)  { 
    .h__tabs{
        display: block;
    }
}

@media (max-width:1025px)  { 
    .h__nav{
        display: block; 
    }
}
</style>
