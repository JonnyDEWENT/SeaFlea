<template>
  <div class="about-us au">
      <div class="ImageLeft il">
        <div class="au__row-div row">
          <h1 class="au__header">{{title}}</h1>
          <div class="au__row-image col">
            <img class="au__image" src="../../assets/AboutUs.jpg"/>
          </div>
          <h1 class="au__header-mobile">{{title}}</h1>
          <div>
            <div class="au__row-text col">
              <p v-for="(p, index) in text" :key=index>{{ p }}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    switchContentSides: false,
    title: "WHO WE ARE",
    footer: "The dedicated crew will work hard changing presentations and networking to make your trip one you won’t forget!",
    text: ["If you've got 'THE ITCH' to fish on Lake Michigan, then Sea Flea Fishing Charters has the cure. ",
    "The value of a fishing experience is measured by the lasting memories it creates. Here at Sea Flea Charters, it’s our mission to provide you the best experience by creating memories you’ll never forget.",
    "We want to be your go-to fishing charter. With access to Lake Michigan's world-class fishery, Sea Flea Charters offers the ultimate salmon and trout fishing experience. Not only do we want to provide you with the opportunity to catch the fish of a lifetime, we want to build a lasting relationship. We want to get to know you and be a part of your fondest fishing memories. Come have fun enjoying the great outdoors and let us show you what makes Sea Flea Charters the best salmon and trout fishing charter on Lake Michigan."],
    images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYYXz2QYBWPsgQ1JAD15Wcz7Ub-nYYH66dg&usqp=CAU"],
  }),
};
</script>


<style scoped>



@media (min-width:1000px)  { 
  .au{
    padding-top: 7%;
    margin-top: 20%;
    display: none;
    /* margin-bottom: 40%; */
    /* display: none; */
  }

  .au__spacer{
    min-height: 10%;;
  }

    .au__image{
      width: 100%;
    }

  .au__row-div{
    padding: 10%;
    /* background-color:rgb(207, 178, 184); */
    text-align: center;
    height: 700px;
  }

  .au__row-image{
  width: 50%;
  float: left;
  }

  .au__row-text{
    width: 50%;
    padding-left: 2%;
    height: 100%;
    float:right;
    text-align: left;
    padding-right: 2%;
    z-index: 100;
    position: relative;
  }

  .au__header{
    font-size: 6em;
    text-align: center;
    margin-bottom: -5%;
    color:lightgray;
  }

  .au__footer{
    margin-top: 35%;
  }

  .au__header-mobile{
    display: none;
  }
}


@media (max-width:1000px) and (min-width: 500px)  { 
  .au{
    margin-bottom: 20%;
    margin-top: 0%;
    font-size: 1em;
  }

  .au__image{
    width: 100vw;
  }
  .au__row-text, .au__row-image{
      width: 100%;
      margin-top: 2%;
  }
  .au__row-text{
      padding:2%;
      text-align: left;
  }
  .au__header-mobile{
    margin-top: -7%;
    color: lightgray;
    font-size: 3em;
    text-align: right;
    padding-right:10%;
  }
  .au__header{
    display: none;
  }
  .au__list{
  }
  .au__footer{
    padding:2%;
  }
}

@media (max-width:500px)  { 
  .au{
    margin-bottom: 10%;
    margin-top: -10%;
  }

  .au__image{
    width: 100vw;
  }
  .au__row-text, .au__row-image{
      width: 100%;
      margin-top: 2%;
  }
  .au__row-text{
      padding:2%;
      text-align: left;
      font-size: 0.9em;
  }
  .au__header-mobile{
    color: lightgray;
    font-size: 2.5em;
    text-align: center;
    margin-top: -8%;
  }
  .au__header{
    visibility: hidden;
  }
  .au__list{
    font-size: 0.9em;
  }
  .au__footer{
    padding:2%;
  }
}
</style>


