<template>
<div class="ImageLeft il">
  <h1>{{title}}</h1>
  <div class="il__row-div row">
    <div v-if="imageUrl" :class="switchContentSides == true ? 'ir__row-image col' : 'il__row-image col'">
      <img v-bind:src="imageUrl"/>
    </div>
    <div>
      <div :class="switchContentSides ? 'ir__row-text col' : 'il__row-text col'">
        <p v-for="(p, index) in text" :key=index>{{ p }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'

  export default {
    name: 'ImageLeft',
    props:{
      title: null,
      text: null,
      imageUrl: null,
      switchContentSides: null,
    },
    computed:{
      url(){
        var data = ref(this.imageUrl);
        console.log(data);
        return data.value;
      }
    },
    methods: {
      imagePath(){
        if(this.imageUrl.includes("http")){
          return this.imageUrl
        }
        return require(this.imageUrl);
      }
    },
    data: () => ({
     images: [],
    }),
  }
</script>

<style scoped>
.il{
  min-height: 10%;
  /* margin-top:13%; */
  text-align: center;
}

.il__spacer{
  min-height: 10%;;
}

.il__row-div{
  padding-top: 5%;
  /* background-color:rgb(207, 178, 184); */
  text-align: center;
  height: 700px;
}

.il__row-image{
  width: 50%;
  float:left;
}

.il__row-text{
  width: 50%;
  height: 83%;
  float:right;
  padding: 1%;
}

.ir__row-image{
  width: 50%;
  float:right;
}

.ir__row-text{
  width: 50%;
  height: 83%;
  float:left;
  padding: 1%;
}

@media (max-width:1000px)  { 
    .il__row-text, .il__row-image, .ir__row-text, .ir__row-image{
        width: 100%;
        margin-top: 2%;
    }
}
</style>
