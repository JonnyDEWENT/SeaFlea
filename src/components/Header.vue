<template>
<div class="header h">
    <v-app-bar
        color="white"
        app
        class="h-bar"
        >
         <v-app-bar-nav-icon class="h__nav-icon" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
         <img class="h__logo" src="../assets/seaflealogo.png">

        <template class="h__tabs" v-slot:extension>
            <v-tabs class="h__tabs" fixed-tabs>
                <v-tab v-for="(tab, index) in tabs" :key="index" @click="GoTo(tab.element)">{{ tab.name }}</v-tab>
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
                >
                <v-list-item v-for="(tab, index) in tabs" :key="index"  @click="GoTo(tab.element)">
                    <v-list-item-title class="h__nav-item">{{ tab.name }}</v-list-item-title>
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
            {'name':'Home', 'element': 'la'}, 
            {'name':'Who We Are', 'element': 'au'}, 
            {'name':'The Charter', 'element': 'tc'}, 
            {'name':'Meet The Crew', 'element': 'tcr'}, 
            {'name': 'Boat', 'element': 'b'},   
            {'name': 'Trip Rates', 'element': 'r'}, 
            {'name': 'Guest Info', 'element': 'gi'},
            {'name': 'Brands We Trust', 'element': 'br'},
            {'name':'Contact', 'element': 'c'},
        ],
        drawer: false,
    }),
    methods:{
        GoTo(elementName){
            const yOffset = 0; 
            const element = document.getElementsByClassName(elementName)[0];
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
            this.drawer = false;
         }
    }
  }
</script>

<style scoped>
.h{
    z-index: 10000;
    opacity: 0.8;
}
.h__nav{
    display: none;
    opacity: 80%;
    height: 100%;
}
.h__nav-icon{
    padding-left:52%;
}

.h__tabs{
    display: none;

}

@media (min-width:1000px)  { 
    .h__tabs{
        display: block;
        max-width: 90%;
        margin-left: 5% !important;
    }
    .h__nav-icon{
        display: none;
    }

    .h__logo{
        max-width: 14%;
        margin-left: 43%;
        padding-top:1%;
    }
}

@media (max-width:1000px)  { 
    .h__nav{
        display: block; 
    }
    .h-bar{
    height: 70px !important;
    }

    .h__logo{
        display: none;
    }
}
</style>
