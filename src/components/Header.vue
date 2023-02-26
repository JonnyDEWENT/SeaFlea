<template>
    <div class="header h">
        <div class="h__top">
            <div class="row">
                <img class="h__logo" src="../assets/seaflealogo.png">
                <a class="c__email" href="mailto: seafleacharters@gmail.com">
                    <v-btn dark class="h__button">
                        Email: seafleacharters@gmail.com
                    </v-btn>
                </a>
                <a class="bb__call-link" href="tel:6168861306">
                    <v-btn dark class="h__button">
                        <v-icon color="orange" class="bb__icon">mdi-phone</v-icon>
                        Call (616) 886-1306
                    </v-btn>
                </a>
            </div>
        </div>
        <v-card dark class="h-bar">
            <v-tabs class="h__tabs" bg-color="primary">
                <v-tab :class="[index !== tabs.length - 1 ? 'h__tab' : '']" v-for="(tab, index) in tabs" :key="index"
                    @click="GoTo(tab.element)">{{
                        tab.name
                    }}</v-tab>
            </v-tabs>



        </v-card>
        <v-navigation-drawer v-model="drawer" temporary app floating class="h__nav">
            <v-list nav dense>
                <v-list-item-group>
                    <v-list-item v-for="(tab, index) in tabs" :key="index" @click="GoTo(tab.element)">
                        <v-list-item-title class="h__nav-item">{{ tab.name }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',

    data: () => ({
        tabs: [
            { 'name': 'Home', 'element': 'la' },
            { 'name': 'The Charter', 'element': 'tc' },
            { 'name': 'Meet The Crew', 'element': 'tcr' },
            { 'name': 'Boat', 'element': 'b' },
            { 'name': 'Trip Rates', 'element': 'r' },
            { 'name': 'Guest Info', 'element': 'gi' },
            { 'name': 'Trusted Brands', 'element': 'br' },
            { 'name': 'Contact', 'element': 'c' },
        ],
        drawer: false,
    }),
    mounted() {
        // var self = this;
        // document.addEventListener('scroll', function () {
        //     try {
        //         self.tabs.forEach(x => {
        //             if (self.isInViewport(document.querySelector("." + x.element))) {
        //                 document.title = "Sea Flea Charters | " + x.name;
        //                 return;
        //             }
        //         });
        //     }
        //     catch {
        //         console.error("failed to set title");
        //     }
        // });

    },
    methods: {
        GoTo(elementName) {
            const yOffset = 0;
            const element = document.getElementsByClassName(elementName)[0];
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            this.drawer = false;
        },

        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.left >= 0 &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }
}
</script>

<style scoped>
.h {
    z-index: 10000;
    opacity: 0.8;
}

.h__nav {
    display: none;
    opacity: 80%;
    height: 100%;
}

.h__nav-icon {
    padding-left: 52%;
}

.h__tabs {
    display: none;
}

@media (min-width:1000px) {
    .h__tabs {
        display: flex;
        max-width: 90%;
        margin-left: 5% !important;
        color: black;
        justify-content: center;
        padding-top: 40px;
        /* height: 75px; */
    }

    .v-toolbar__content {
        background-color: rgb(210, 210, 126) !important;
    }

    .h__tab {
        width: 9vw;
        font-size: .8em;
        border-right: 1px white solid;
    }

    .h__nav-icon {
        display: none;
    }

    .h__logo {
        max-width: 14%;
        padding-top: 0%;
        filter: brightness(120%);
        filter: contrast(120%);
        filter: drop-shadow(5px 5px 5px black);
        z-index: 1000;
        position: relative;
    }

    .h__button {
        margin-top: 1%;
        margin-right: 2%;
        float: right;
    }

    .h {
        opacity: 1;
        position: fixed;
        margin-bottom: 300px;
    }

    .h-bar {
        height: 100px;
    }

    .h__top {
        height: 70px;
        width: 100vw;
        background-color: rgb(210, 210, 126);
    }
}

@media (max-width:1000px) {
    .h {
        display: none;
    }
}
</style>
