<template>
  <div class="boat b">
    <div class="ImageLeft il">
      <div class="b__row-div row">
        <div class="b__row-image col">
          <img class="b__image" src="../../assets/boat.jpg" />
          <h1 class="b__header">{{ title }}</h1>
        </div>
        <div>
          <div class="b__row-text col">
            <p v-for="(p, index) in text" :key="index">{{ p }}</p>
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
    title: "THE BOAT",
    footer:
      "The dedicated crew will work hard changing presentations and networking to make your trip one you won’t forget!",
    text: [
      "Aboard the Sea Flea you will experience the lake in a whole new way. it is much more than a good time with friends and family. It’s a time to connect with nature and our spirit. It’s reliving a time when people had to provide for their families by using resources like the great Lake Michigan.",
      "Welcome aboard the Sea Flea…",
      "This fishing charter will begin with a boat ride to the fishing grounds (25-45 minutes). Captain and mate will set up rods that will be trolled at multiple depths using a variety of techniques. Our target species will be salmon and trout (chinook, coho, lake trout, steelhead, brown trout). Most trips will offer opportunities to catch multiple species. After returning to the dock the crew will clean, bag and ice your fish to finish the trip.",
      "Most active months for Lake Michigan fish:",
    ],

    list: [
      "Chinook (King) Salmon: May, July-September",
      "Coho (Silver) Salmon: April-May, August-September",
      "Steelhead (Rainbow) Trout: May-August",
      "Lake Trout: April-August",
      "Brown Trout: April-May",
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYYXz2QYBWPsgQ1JAD15Wcz7Ub-nYYH66dg&usqp=CAU",
    ],
  }),
};
</script>


<style scoped>
@media (min-width: 1000px) {
  .b {
    padding-top: 7%;
    margin-top: 3%;
  }
  .il {
    min-height: 8%;
    /* margin-top:13%; */
    text-align: center;
    margin-bottom: 40%;
  }

  .b__spacer {
    min-height: 10%;
  }

  .b__image {
    width: 100%;
  }

  .b__row-div {
    padding-top: 5%;
    /* background-color:rgb(207, 178, 184); */
    text-align: center;
    height: 700px;
  }

  .b__row-image {
    width: 60%;
    float: left;
  }

  .b__row-text {
    width: 40%;
    padding-left: 2%;
    height: 100%;
    float: right;
    text-align: left;
    padding-right: 2%;
    font-size: 1.3em;
  }

  .b__header {
    margin-top: -9%;
    color: lightgray;
    font-size: 6em;
    padding-left: 20%;
  }

  .b__footer {
    margin-top: 35%;
  }
}

@media (max-width: 1000px) and (min-width: 500px) {
  .b {
    margin-bottom: 20%;
    margin-top: 20%;
    font-size: 1.4em;
  }

  .b__image {
    width: 100vw;
  }
  .b__row-text,
  .b__row-image {
    width: 100%;
    margin-top: 2%;
  }
  .b__row-text {
    padding: 2%;
    text-align: left;
  }
  .b__header {
    margin-top: -8%;
    color: lightgray;
    font-size: 3em;
    text-align: right;
    padding-right: 10%;
  }
  .b__list {
    font-size: 0.9em;
  }
  .b__footer {
    padding: 2%;
  }
}

@media (max-width: 500px) {
  .b {
    margin-bottom: 20%;
    margin-top: 20%;
  }

  .b__image {
    max-width: 100vw;
  }
  .b__row-text,
  .b__row-image {
    width: 100%;
    margin-top: 2%;
  }
  .b__row-text {
    padding: 2%;
    text-align: left;
  }
  .b__header {
    margin-top: -13%;
    color: lightgray;
    font-size: 3em;
    text-align: right;
    padding-right: 10%;
  }
  .b__list {
    font-size: 0.9em;
  }
  .b__footer {
    padding: 2%;
  }
}
</style>


