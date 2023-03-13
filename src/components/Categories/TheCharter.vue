<template>
  <div id="tc" class="the-charter tc">
    <div class="ImageLeft">
      <div class="tc__row-div row">
        <h1 class="tc__header">{{ title }}</h1>
        <div class="tc__row-image col">
          <img class="tc__image" src="../../assets/the-charter.png" />
        </div>
        <h1 class="tc__header-mobile">{{ title }}</h1>
        <div>
          <div class="tc__row-text col">
            <p v-for="(p, index) in text" :key="index">{{ p }}</p>
            <ul>
              <li class="tc__list" v-for="item in list" :key="item">
                <span class="tc__list-item">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
          <div class="tc__footer">
            <h3>{{ footer }}</h3>
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
    switchContentSides: false,
    title: "THE CHARTER",
    footer:
      "The dedicated crew will work hard changing presentations and networking to make your trip one you won’t forget!",
    text: [
      "Aboard the Sea Flea you will experience the lake in a whole new way. It is much more than a good time with friends and family. It’s a time to connect with nature and our spirit. It’s reliving a time when people had to provide for their families by using resources like the great Lake Michigan.",
      "Welcome aboard the Sea Flea…",
      "This fishing charter will begin with a boat ride to the fishing grounds (25-45 minutes). Captain and mate will set up rods that will be trolled at multiple depths using a variety of techniques. Our target species will be salmon and trout (chinook, coho, lake trout, steelhead, brown trout). Most trips will offer opportunities to catch multiple species. After returning to the dock the crew will clean, bag and ice your fish to finish the trip.",
      "Most active months for Lake Michigan fish:",
    ],

    list: [
      "Chinook (King) Salmon: May, July-September",
      "Coho (Silver) Salmon: AprMay, August-September",
      "Steelhead (Rainbow) Trout: May-August",
      "Lake Trout: April-August",
      "Brown Trout: April-May",
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYYXz2QYBWPsgQ1JAD15Wcz7Ub-nYYH66dg&usqp=CAU",
    ],
  }),
  created(){
    var el = document.getElementById("tc");
    document.addEventListener("visibilityChange", () => {
      if(el.visibilityState == "visible"){
        console.log("hello")
      }
    })
  }
};
</script>


<style scoped>
@media (min-width: 1000px) {
  .tc {
    padding-top: 4%;
    margin-top: 20%;
    margin-bottom: 30%;
  }

  .tc__spacer {
    min-height: 10%;
  }

  .tc__image {
    max-width: 100%;
  }

  .tc__row-div {
    padding: 10%;
    /* background-color:rgb(207, 178, 184); */
    text-align: center;
    height: 700px;
  }

  .tc__row-image {
    width: 50%;
    float: left;
  }

  .tc__row-text {
    width: 50%;
    padding-left: 2%;
    padding-top: 5vh;
    height: 100%;
    float: right;
    text-align: left;
    padding-bottom: 1%;
    margin-top: -33%;
    z-index: 100;
    position: relative;
  }

  .tc__header {
    font-size: 5em;
    margin-bottom: -5%;
    color: lightgray;
    text-align: center;
    padding-left: 10vw;
  }

  .tc__header-mobile {
    display: none;
  }

  .tc__footer {
    margin-top: 35%;
    width: 50%;
    text-align: left;
    font-size: 1em;
  }
}


@media (max-width: 1000px) and (min-width: 500px) {
  .tc {
    margin-bottom: 20%;
    margin-top: 20%;
    font-size: 1em;
  }

  .tc__image {
    width: 100vw;
  }

  .tc__row-text,
  .tc__row-image {
    width: 100%;
    margin-top: -8%;
  }

  .tc__row-text {
    margin-top: 5%;
    padding: 2%;
    text-align: left;
  }

  .tc__header-mobile {
    padding-top: 0%;
    color: lightgray;
    font-size: 3em;
    text-align: right;
    padding-right: 2%;
    z-index: 100;
    position: relative;
    margin-top: -5%;
  }

  .tc__header{
    display: none;
  }

  .tc__list {
    font-size: 0.9em;
  }

  .tc__footer {
    padding: 2%;
  }
}

@media (max-width: 500px) {
  .tc {
    margin-bottom: 20%;
  }

  .tc__image {
    max-width: 100vw;
  }

  .tc__row-text,
  .tc__row-image {
    width: 100%;
    margin-top: -8%;
  }

  .tc__row-text {
    margin-top: 5%;
    padding: 2%;
    text-align: left;
    font-size: 0.9em;
  }

  .tc__header {
    visibility: hidden;
  }

  .tc__list {
    padding-bottom: 10px;
  }

  .tc__list-item {
    padding-bottom: 10px;
  }

  .tc__footer {
    padding: 2%;
    font-size: 0.9em;
    text-align: center;
  }

  .tc__header-mobile {
    margin-top: -8%;
    color: lightgray;
    font-size: 2.5em;
    text-align: center;
    z-index: 100;
    position: relative;
  }
}
</style>


