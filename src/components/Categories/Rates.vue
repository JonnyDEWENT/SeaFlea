<template>
  <div class="the-charter r">
    <div class="ImageLeft il">
      <div class="r__row-div row">
        <h1 class="r__header">{{ title }}</h1>
        <div class="r__row-image col">
          <img class="r__image" src="../../assets/rates.png" />
          <h1 class="r__header-mobile">{{ title }}</h1>
        </div>
        <div>
          <div class="r__row-text col">

            <div class="r__text-div">
              <h3 class="r__subheader">Current Rates</h3>
              <ul class="r__list">
                <li class="r__list-item">{{ rates[0] }}</li>
                <li class="r__list-item">
                  <strong>{{ rates[1] }}</strong>
                </li>
                <li class="r__list-item">{{ rates[2] }}</li>
              </ul>
            </div>

            <div class="r__text-div">
              <h3 class="r__subheader">Policies</h3>
              <ul class="r__list">
                <li class="r__list-item" v-for="item in text" :key="item">
                  <span>
                    {{ item }}
                  </span>
                </li>
              </ul>
            </div>
            <div class="r__text-div">
            <h3 class="r__subheader">Cancellation Policies</h3>
            <ul class="r__list">
              <li class="r__list-item" v-for="item in list" :key="item">
                <span>
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
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
    swirhContentSides: false,
    title: "TRIP RATES",
    footer:
      "The dedicated crew will work hard changing presentations and networking to make your trip one you won’t forget!",

    rates: [
      "5 Hours - $700 (AM or PM)",
      "7 Hours - $850 (Most Popular)",
      "9 Hours - $1100",
    ],

    text: [
      "$250 Non-Refundable Deposit",
      "Additional time $150 per hour upon availability",
      "6 guest max per trip + crew",
      "Trip hours are from dock departure to dock arrival",
      "Custom trips are available to fit all groups",
      "For groups larger than 6 guest please call to arrange with the Captain.",
    ],

    list: [
      "TRIP DEPOSIT IS NON-REFUNDABLE",
      "CANCELLATION OF TRIP 14 DAYS OUT OR MORE RESULTS IN A ROLLED OVER DEPOSIT TOWARDS A FUTURE DATE THAT MUST BE TAKEN WITHIN 365 DAYS OF ORIGINAL BOOKING DATE",
      "CANCELLATION OF TRIP WITHIN 24 HOURS OR LESS RESULTS IN A FULL RATE CHARGE OF THE SCHEDULED TRIP",
      "WEATHER RELATED CANCELLATION BY YOUR CAPTAIN RESULTS IN A ROLLED OVER DEPOSIT TOWARDS A FUTURE DATE THAT MUST BE TAKEN WITHIN 365 DAYS OF ORIGINAL BOOKING DATE",
    ],
  }),
};
</script>


<style scoped>
.r__rate-text,
.r__text {
  margin-bottom: 0px;
}

/* standard fhd screen desktop */
@media (min-width: 1000px) {
  .r {
    margin-bottom: 20%;
    padding-top: 13%;
    margin-top: 10%;
  }

  .r__row-div {
    padding-top: 5%;
    text-align: center;
    height: 700px;
  }

  .r__row-image {
    width: 50%;
    padding-left: 10%;
  }

  .r__image{
    width: 90%;
    float: left;
  }

  .r__row-text {
    text-align: left;
    margin-bottom: 0%;
    padding-right: 10%;
    /* background-image: url("../../assets/rates-background.png"); */
    background-size: cover;
    width: 50%;
    float: right;
    z-index: 1000;
    position: relative;
    margin-top: 7vh;
  }

  .r__row-text {
    height: 83%;
    text-align: left;
    padding-bottom: 1%;
  }

  .r__header {
    margin-top: -4%;
    font-size: 5em;
    margin-bottom: -4%;
    z-index: 100;
    position: relative;
    color: lightgray;
    padding-left: 13%;
  }
  .r__header-mobile{
    display: none;
  }

  .r__rates,
  .r__text-div {
    margin-bottom: 1%;
  }

}

/* tablet */
@media (min-width: 500px) and (max-width: 1000px) {
  .r {
    margin-bottom: 20%;
    font-size: 1.4em;
  }

  .r__image {
    max-width: 100vw;
  }

  .r__row-image,
  .r__row-image {
    width: 100%;
  }

  .r__row-text {
    padding: 2%;
    text-align: left;
    margin-bottom: 0%;
    background-size: cover;
    margin-top: -10%;
    padding-top: 5%;
    width: 100%;
  }

  .r__header-mobile {
    margin-top: -8%;
    font-size: 3em;
    text-align: right;
    padding-right: 2%;
    z-index: 100;
    position: relative;
    padding-right: 10%;
    color: lightgray;
    margin-bottom: 2%;
  }
  .r__header {
    display: none;
  }
  .r__list {
    /* font-size: 0.9em; */
  }

  .r__footer {
    padding: 2%;
  }

  .r__rates,
  .r__text-div {
    margin-bottom: 8%;
  }

  .r__list {}

  .r__list-item {
    padding-bottom: 10px;
  }

  .r__subheader {
    text-align: left;
  }
}


/* Phone */
@media (max-width: 500px) {
  .r {
    margin-bottom: 10%;
    padding-top:10%;
  }

  .r__image {
    max-width: 100vw;
  }

  .r__row-image,
  .r__row-image {
    width: 100%;
  }

  .r__row-text {
    padding: 2%;
    text-align: left;
    margin-bottom: 0%;
    margin-top: -10%;
    padding-top: 5%;
    width: 100%;
  }

  .r__header-mobile {
    margin-top: -8%;
    font-size: 2.5em;
    text-align: center;
    z-index: 100;
    position: relative;
    color: lightgray;
    margin-bottom: 7%;
  }
  .r__header {
    display: none;
  }

  .r__list {
    /* font-size: 0.9em; */
  }

  .r__footer {
    padding: 2%;
  }

  .r__rates {
    margin-bottom: 8%;
  }

  .r__text-div {
    margin-bottom: 8%;
    font-size: 0.9em;
  }

  .r__list {}

  .r__list-item {
    padding-bottom: 5px;
  }

  .r__subheader {
    text-align: left;
  }
}
</style>


