<template>
  <div class="contact c">
    <div class="ImageLeft il">
      <div class="c__row-div row">
        <div class="c__row-image col">
          <img class="c__image" src="../../assets/location.png" />
          <h1 class="c__header">{{ title }}</h1>
        </div>
        <div>
          <div class="c__row-text col">
            <a class="c__directions" :href="text[9]">
            <v-btn dark>Get Directions</v-btn>
          </a>
            <p class="c__row-text-p">{{ text[0] }}</p>
            <p class="c__row-text-p">{{ text[1] }}</p>
            <p class="c__row-text-p">{{ text[2] }}</p>
            <p class="c__row-text-p">{{ text[3] }}</p>
            <br>
            <p class="c__row-text-p">{{ text[4] }}</p>
            <p class="c__row-text-p">{{ text[5] }}</p>
            <p class="c__row-text-p">{{ text[6] }}</p>
            <br>
            <a class="c__call-link" href="tel:6168861306"> 
              <v-btn color="success">Call (616) 886-1306</v-btn> 
            </a>
            <br>
            <a class="c__email" href="mailto: seafleacharters@gmail.com">
              <v-btn color="primary">Send Us an Email</v-btn> 
            </a>
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
    title: "CONTACT",
    footer:
      "The dedicated crew will work hard changing presentations and networking to make your trip one you won’t forget!",
    text: [
      "Sea Flea Charters",
      "Chinook Pier",
      "301 N. Harbor Dr.",
      "Grand Haven, MI 49417",
      "Mailing Address:",
      "3494 Hollywood Dr",
      "Holland, MI 49424",
      "Phone: (616) 886-1306",
      "Email: seafleacharters@gmail.com",
      "https://goo.gl/maps/6xrq15oaqdE3WUVq9",
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

  .c__row-text-p{
    margin-bottom: 0px;
  }

  .c__directions{
    text-decoration: none;
    margin-bottom: 10%;
  }

  .c__email{
    text-decoration: none;
  }
  .c__call-link{
    text-decoration: none;
    margin-bottom: 5%;
  }

@media (min-width: 1000px) {
  .c {
    padding-top: 7%;
    margin-top: 3%;
    margin-bottom: 20%;
  }
  .il {
    min-height: 8%;
    /* margin-top:13%; */
    text-align: center;
  }

  .c__spacer {
    min-height: 10%;
  }

  .c__image {
    width: 75%;
  }

  .c__row-div {
    padding-top: 5%;
    /* background-color:rgb(207, 178, 184); */
    text-align: center;
    height: 700px;
  }

  .c__row-image {
    width: 60%;
    padding-left: 10%;
    float: left;
  }

  .c__row-text {
    width: 40%;
    padding-left: 2%;
    height: 100%;
    float: right;
    text-align: left;
    padding-right: 2%;
    font-size: 1.1em;
    margin-bottom: 0px;
  }

  .c__header {
    margin-top: -75%;
    color: lightgray;
    font-size: 6em;
    text-align: right;
    padding-left: 20%;
  }

  .c__footer {
    margin-top: 35%;
  }
}


@media (max-width: 1000px) and (min-width: 500px) {
  .c {
    margin-bottom: 20%;
    margin-top: 0%;
    font-size: 1.4em;
  }

  .c__image {
    width: 100vw;
  }
  .c__row-text,
  .c__row-image {
    max-width: 100%;
    margin-top: 2%;
    align-content: center;
  }
  .c__row-text {
    padding: 2%;
    text-align: center;
  }
  .c__header {
    margin-top: -8%;
    color: lightgray;
    font-size: 3em;
    text-align: right;
    padding-right: 10%;
  }
  .c__footer {
    padding: 2%;
  }
}

@media (max-width: 500px) {
  .c {
    margin-bottom: 20%;
    margin-top: 0%;
  }

  .c__image {
    width: 100vw;
  }
  .c__row-text,
  .c__row-image {
    max-width: 100%;
    margin-top: 2%;
    align-content: center;
  }
  .c__row-text {
    padding: 2%;
    text-align: center;
    align-content: center;
  }
  .c__header {
    margin-top: -10%;
    color: lightgray;
    font-size: 3em;
    text-align: center;
    margin-bottom: 5%;
  }
  .c__list {
    font-size: 0.9em;
  }
  .c__footer {
    padding: 2%;
  }

  .c__directions{
    display:flex;
    justify-content: center;
  }

  .c__email{
    display:flex;
    justify-content: center;
  }

  .c__call-link{
    display:flex;
    justify-content: center;
  }
}
</style>


