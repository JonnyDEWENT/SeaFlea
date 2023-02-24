<template>
  <div class="guest-info gi">
    <h1 class="gi__header">{{ title }}</h1>
    <div class="gi__row-div">
      <div class="gi__row-image col">
        <img class="gi__image" src="../../assets/guestinfo.jpg" />
      </div>
      <h1 class="gi__header-mobile">{{ title }}</h1>
      <div class="gi__text-div">
          <div class="gi__required-text col">
            <h4>Required</h4>
            <p class="gi__required-text-p">{{ required[1] }}</p>
            <a class="gi__license" href="https://www.mdnr-elicense.com/">
              <v-btn color="primary">Buy E-License</v-btn>
            </a>
          </div>
          <div class="gi__additional-text col">
            <h4>Additional Information</h4>
            <ul>
              <li v-for="(note, index) in additional" :key="index">
                <p class="gi__additional-text-p">{{ note }}</p>
              </li>
            </ul>
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
    title: "GUEST INFO",
    footer:
      "The dedicated crew will work hard changing presentations and networking to make your trip one you won’t forget!",
    required: [
      "REQUIRED:",
      "All guest 17 or older must have a Michigan All Species Fishing License",
      "Your license can be purchased online at: https://www.mdnr-elicense.com/",
    ],

    additional: [
      "Please wear soft-soled shoes",
      "Clothing appropriate for weather conditions (temperatures on the lake are normally 10 degrees colder)",
      "Food and beverages (preferably in small coolers)",
      "NO GLASS CONTAINERS. This is for safety reasons.",
      "Please apply sunscreen if needed before coming on the boat.",
      "A cooler to transport your fish home. We will clean and fillet your fish for you at the end of your charter and provide ice.",
    ],
  }),
};
</script>


<style scoped>
.gi__required-text-p,
.gi__additional-text-p {
  margin-bottom: 0px;
}

.gi__license {
  text-decoration: none;
}

@media (min-width: 1000px) {
  .gi {
    padding-top: 13%;
    margin-top: 3%;
  }

  .gi__image {
    width: 80%;
  }

  .gi__row-div {
    padding: 0% 10%;
    text-align: center;
    height: 700px;
  }

  .gi__row-image {
    width: 50%;
    float: left;
    margin-top: -7vh;
  }

  .gi__required-text,
  .gi__additional-text {
    width: 50%;
    padding-left: 2%;
    height: 100%;
    float: right;
    text-align: left;
    padding-right: 2%;
    margin-bottom: 1%;
    z-index: 100;
    position: relative;
  }

  .gi__header {
    font-size: 5em;
    text-align: center;
    padding-left: 15%;
    margin-bottom: -4%;
    color: lightgray;
  }

  .gi__header-mobile {
    display: none;
  }

  .gi__footer {
    margin-top: 35%;
  }

  .gi__text-div{
    margin-top: 7vh;
  }
}

@media (max-width: 1000px) and (min-width: 500px) {
  .gi {
    margin-bottom: 20%;
    margin-top: 0%;
    font-size: 1.4em;
  }

  .gi__image {
    width: 100vw;
  }

  .gi__required-text,
  .gi__additional-text,
  .gi__row-image {
    width: 100%;
    margin-top: 2%;
  }

  .gi__required-text,
  .gi__additional-text {
    padding: 2%;
    text-align: left;
    margin-bottom: 1%;
  }

  .gi__header-mobile {
    margin-top: -8%;
    color: lightgray;
    font-size: 3em;
    text-align: right;
    padding-right: 10%;
  }

  .gi__header {
    visibility: hidden;
  }

  .gi__list {
    font-size: 0.9em;
  }

  .gi__footer {
    padding: 2%;
  }
}

@media (max-width: 500px) {
  .gi {
    margin-bottom: 20%;
    margin-top: 0%;
  }

  .gi__image {
    width: 100vw;
  }

  .gi__required-text,
  .gi__additional-text,
  .gi__row-image {
    width: 100%;
    margin-top: 2%;
  }

  .gi__required-text,
  .gi__additional-text {
    padding: 2%;
    text-align: left;
    margin-bottom: 1%;
    font-size: 0.9em;
  }

  .gi__header-mobile {
    margin-top: -8%;
    color: lightgray;
    font-size: 2.5em;
    text-align: center;
  }

  .gi__header {
    visibility: hidden;
  }

  .gi__list {
    font-size: 0.9em;
  }

  .gi__footer {
    padding: 2%;
  }
}
</style>


