<template>
  <div class="the-charter r">
      <div class="ImageLeft il">
        <div class="r__il-row-div row">
          <div :class="swirhContentSides == true ? 'r__ir-row-image col' : 'r__il-row-image col'">
            <img class="r__image" src="../../assets/rates.png"/>
            <h1 class="r__header">{{title}}</h1>
          </div>
          <div>            
            <div :class="swirhContentSides ? 'r__ir-row-text col' : 'r__il-row-text col'">
              <h3 class="r__subheader">Current Rates</h3>
              <div class="r__rates">
                <p class="r__rate-text">{{ rates[0] }}</p>
                <p class="r__rate-text"><strong>{{ rates[1] }}</strong></p>
                <p class="r__rate-text">{{ rates[2] }}</p>
              </div>
              <div class="r__text-div">
                <p class="r__text" v-for="(p, index) in text" :key=index>{{ p }}</p>
              </div>
              <h3 class="r__subheader">Policies</h3>
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
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    swirhContentSides: false,
    title: "TRIP RATES",   
    footer: "The dedicated crew will work hard changing presentations and networking to make your trip one you won’t forget!",
    
    rates: ["5 HOUR TRIP….…..$700 (Available as a PM trip)",
            "7 HOUR TRIP..….…$850 (Most Popular)",
            "9 HOUR TRIP .….…$1100"
    ],

    text: ["$250 Non-Refundable Deposit",
          "Additional time $150 per hour upon availability",
          "6 guest max per trip + crew",
          "Trip hours are from dock departure to dock arrival",
          "Custom trips are available to fit all groups",
          "For groups larger than 6 guest please call to arrange with the Captain."],

    list: [
          "TRIP DEPOSIT IS NON-REFUNDABLE"
          ,"CANCELLATION OF TRIP 14 DAYS OUT OR MORE RESULTS IN A ROLLED OVER DEPOSIT TOWARDS A FUTURE DATE THAT MUST BE TAKEN WITHIN 365 DAYS OF ORIGINAL BOOKING DATE"
          ,"CANCELLATION OF TRIP WITHIN 24 HOURS OR LESS RESULTS IN A FULL RATE CHARGE OF THE SCHEDULED TRIP"
          ,"WEATHER RELATED CANCELLATION BY YOUR CAPTAIN RESULTS IN A ROLLED OVER DEPOSIT TOWARDS A FUTURE DATE THAT MUST BE TAKEN WITHIN 365 DAYS OF ORIGINAL BOOKING DATE"
    ],
  }),
};
</script>


<style scoped>

@media (min-width:1025px)  { 
  .il{
  min-height: 10%;
  text-align: center;
  margin-bottom: 100%;
}

.r__il-spacer{
  min-height: 10%;;
}

.r__il-row-div{
  padding-top: 5%;
  text-align: center;
  height: 700px;
}

.r__il-row-image{
  width: 100%;
}

.r__il-row-text{
      padding:2%;
      text-align: left;
      margin-bottom: 0%;
      background-image: url("../../assets/rates-background.png");
      background-size: cover;
      margin-top: -8%;
      padding-top: 5%;
      width: 100%;
      padding-right: 20%;
      padding-left: 20%;
}

.r__ir-row-image{
  width: 50%;
  float:right;
}

.r__ir-row-text{
  padding-right: 20%;
  padding-left: 20%;
  height: 83%;
  float:right;
  text-align: left;
  padding-bottom: 1%;
}
.r__header{
  margin-top: -4%;
  font-size: 4em;
  margin-bottom: 2%;
}

}

@media (max-width:1025px)  { 
  .r{
    margin-bottom: 200%;
  }

  .r__rate-text, .r__text{
    margin-bottom: 0px;
  }

  .r__image{
    max-width: 100vw;
  }
  .r__il-row-image, .r__ir-row-image{
      width: 100%;
  }
  .r__il-row-text{
      padding:2%;
      text-align: left;
      margin-bottom: 0%;
      background-image: url("../../assets/rates-background.png");
      background-size: cover;
      margin-top: -10%;
      padding-top: 5%;
      width: 100%;
  }
  .r__header{
    margin-top: -13%;
    font-size: 3em;
    text-align: right;
    padding-right:2%;
    z-index: 100; 
    position: relative;
    padding-right: 10%;
    
  }
  .r__list{
    /* font-size: 0.9em; */
  }
  .r__footer{
    padding:2%;
  }

  .r__rates, .r__text-div{
    margin-bottom: 8%;
  }

  .r__list{
   
  }

  .r__list-item{
    padding-bottom: 10px;
  }

  .r__subheader{
    text-align: left;
  }

}
</style>


