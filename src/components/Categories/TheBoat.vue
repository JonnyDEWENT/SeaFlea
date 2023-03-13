<template>
  <div class="boat b">
    <div class="ImageLeft il">
      <div class="b__row-div row">
        <h1 class="b__header">{{ title }}</h1>
        <div class="b__row-image col">
          <img class="b__image" src="../../assets/boat.jpg" />
        </div>
        <h1 class="b__header-mobile">{{ title }}</h1>
        <div>
          <div class="b__row-text col">
            <p v-for="(p, index) in text" :key="index">{{ p }}</p>
            <li class="b__list" v-for="item in list" :key="item">
              {{ item }}
            </li>
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
    "To provide customers with the ultimate fishing and boating experience, we have a spacious 36 ft. Tiara Open.",

    "This boat is designed and built with fishing in mind. The hull design allows for the boat to sit flatter on the water in rough waves providing a more comfortable ride. The open design means it does not have a bridge which allows for a lower center of mass also reducing the amount the boat rocks.",

    "This style of boat is a highly sought after charter boat. This boat is also considered a fishy boat, meaning, not all boats catch fish the same and in certain conditions some boats catch more fish.",

    "This twin-engine boat is large enough to comfortably and safely accommodate 6 people plus the Sea Flea crew. The boat is insured and inspected annually by the United States Coast Guard and has the latest safety equipment. There is also a private bathroom on board.",

    "To enhance our guest’s experience the boat is also outfitted with:"
,
    ],

    list: [
      "Latest fishing equipment and tackle",
      "Electronic navigational equipment",
      "GPS",
      "Radar",
      "Autopilot",
      "Fish finders",
      "Temperature monitor",
      "Speed indicators",
      "Vhf radio",
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
    padding-top: 4%;
    margin-top: 3%;
    margin-bottom: 40%;
  }

  .b__image {
    width: 100%;
  }

  .b__row-div {
    padding-top: 5%;
    padding: 10%;
    /* background-color:rgb(207, 178, 184); */
    text-align: center;
    height: 700px;
  }

  .b__row-image {
    width: 50%;
    float: left;
  }

  .b__row-text {
    width: 50%;
    padding-left: 2%;
    height: 100%;
    float: left;
    text-align: left;
    padding-right: 2%;
    z-index: 100;
    position: relative;
    margin-top: 7Vh;
  }

  .b__header {
    font-size: 5em;
    color: lightgray;
    margin-bottom: -5%;
    padding-left: 15%;
  }

  .b__header-mobile{
    display: none;
  }

  .b__footer {
    margin-top: 35%;
  }
}

@media (max-width: 1000px) and (min-width: 500px) {
  .b {
    margin-bottom: 20%;
    margin-top: 20%;
    font-size: 1em;
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
    visibility: hidden;
  }
  .b__footer {
    padding: 2%;
  }

  .b__header-mobile{
    margin-top: -5%;
    color: lightgray;
    font-size: 3em;
    text-align: right;
    padding-right: 10%;
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
    font-size: 0.9em;
  }
  .b__header {
    visibility: hidden;
  }
  .b__header-mobile{
    margin-top: -8%;
    color: lightgray;
    font-size: 2.5em;
    text-align: center;
  }
  .b__footer {
    padding: 2%;
  }
}
</style>


