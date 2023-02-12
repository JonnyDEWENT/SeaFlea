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
            <p class="c__row-text-p">{{ text[0] }}</p>
            <p class="c__row-text-p">{{ text[1] }}</p>
            <p class="c__row-text-p">{{ text[2] }}</p>
            <p class="c__row-text-p">{{ text[3] }}</p>
            <br>
            <p class="c__row-text-p">{{ text[4] }}</p>
            <p class="c__row-text-p">{{ text[5] }}</p>
            <p class="c__row-text-p">{{ text[6] }}</p>
            <br>
            <p class="c__row-text-p">{{ text[7] }}</p>
            <p class="c__row-text-p">{{ text[8] }}</p>
            <br>
            <a class="c__row-text-p" :href="text[9]">{{ text[9] }}</a>
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
    font-size: 1.3em;
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
    text-align: left;
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
    text-align: left;
  }
  .c__header {
    margin-top: -13%;
    color: lightgray;
    font-size: 3em;
    text-align: right;
    padding-right: 10%;
  }
  .c__list {
    font-size: 0.9em;
  }
  .c__footer {
    padding: 2%;
  }
}
</style>


