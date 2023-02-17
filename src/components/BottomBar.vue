<template>
    <div class="bb">
        <v-layout class="overflow-visible bb__layout">
            <v-bottom-navigation dark mode="shift" class="bb__layout" grow>
                <a class="bb__call-link" href="tel:6168861306">
                    <v-btn class="bb__button">
                        <v-icon class="bb__icon">mdi-phone</v-icon>
                        Call (616) 886-1306
                    </v-btn>
                </a>

                <v-btn @click="GoTo('c')">
                    <v-icon>mdi-calendar</v-icon>
                    Book Now
                </v-btn>
            </v-bottom-navigation>
        </v-layout>
    </div>
</template>
  
<script>
export default {
    name: 'BottomBar',

    data: () => ({
        tabs: [

        ],

    }),
    methods: {
        GoTo(elementName) {
            const yOffset = 0;
            const element = document.getElementsByClassName(elementName)[0];
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            this.drawer = false;
        }
    }
}
</script>
<style>
@media(min-width: 1000px) {
    .bb {
        visibility: hidden;
    }
}

.bb {
    bottom: 0px;
    position: fixed;
    width: 100vw;
    z-index: 10000;
    background-color: black;

}

.bb__layout {
    background-color: black;
    height: 60px;
}

.bb__button,
.bb__icon {}

.bb__call-link {
    text-decoration: none;
    padding-top: 2.3%;
}
</style>