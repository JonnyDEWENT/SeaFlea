<template>
  <div class="the-charter tc">
      <div class="ImageLeft il">
        <div class="tc__il-row-div row">
          <div class="tc__il-row-image col">
            <img class="tc__image" src="../../assets/the-charter.png"/>
            <h1 class="tc__header">{{title}}</h1>
          </div>
          <div>
            <div class="tc__il-row-text col">
              <p v-for="(p, index) in text" :key=index>{{ p }}</p>
              <li class="tc__list" v-for="item in list" :key="item">{{ item }}</li>
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
  name: 'App',

  components: {
  },

  data: () => ({
    switchContentSides: false,
    title: "THE CHARTER",
    footer: "The dedicated crew will work hard changing presentations and networking to make your trip one you won’t forget!",
    text: ["Aboard the Sea Flea you will experience the lake in a whole new way. it is much more than a good time with friends and family. It’s a time to connect with nature and our spirit. It’s reliving a time when people had to provide for their families by using resources like the great Lake Michigan.",
    "Welcome aboard the Sea Flea…",
    "This fishing charter will begin with a boat ride to the fishing grounds (25-45 minutes). Captain and mate will set up rods that will be trolled at multiple depths using a variety of techniques. Our target species will be salmon and trout (chinook, coho, lake trout, steelhead, brown trout). Most trips will offer opportunities to catch multiple species. After returning to the dock the crew will clean, bag and ice your fish to finish the trip.",
    "Most active months for Lake Michigan fish:"],

    list: [
    "Chinook (King) Salmon: May, July-September",
    "Coho (Silver) Salmon: April-May, August-September",
    "Steelhead (Rainbow) Trout: May-August",
    "Lake Trout: April-August",
    "Brown Trout: April-May"
    ],
    images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYYXz2QYBWPsgQ1JAD15Wcz7Ub-nYYH66dg&usqp=CAU"],
  }),
};
</script>


<style scoped>



@media (min-width:1025px)  { 

.tc{
  padding-top: 20%;
}
  .il{
  min-height: 10%;
  /* margin-top:13%; */
  text-align: center;
  margin-bottom: 40%;
}

.tc__il-spacer{
  min-height: 10%;;
}

  .tc__image{
    max-width: 100%;
  }

.tc__il-row-div{
  padding-top: 5%;
  /* background-color:rgb(207, 178, 184); */
  text-align: center;
  height: 700px;
}

.tc__il-row-image{
 width: 50%;
 float: left;
}

.tc__il-row-text{
  width: 50%;
  padding-left: 2%;
  height: 100%;
  float:right;
  text-align: left;
  padding-bottom: 1%;
  margin-top: -35%;
  font-size: 1.3em;
}

.tc__header{
  margin-top: -85%;
  color: lightgray;
  font-size: 6em;
  text-align: right;
  padding-left: 20%;
}

.tc__footer{
  margin-top: 35%;
}
}

@media (max-width:1025px)  { 
  .tc{
    margin-bottom: 100%;
  }

  .tc__image{
    max-width: 100vw;
  }
  .tc__il-row-text, .tc__il-row-image{
      width: 100%;
      margin-top: 2%;
  }
  .tc__il-row-text{
      padding:2%;
      text-align: left;
  }
  .tc__header{
    margin-top: -13%;
    color: darkgray;
    font-size: 3em;
    text-align: right;
    padding-right:10%;

  }
  .tc__list{
    font-size: 0.9em;
  }
  .tc__footer{
    padding:2%;
  }
}
</style>


