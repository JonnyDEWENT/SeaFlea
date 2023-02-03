<template>
  <div class="photos p">
      <image-left 
        :title="title"
        :text="text"
        :imageUrl="images[0]"
      />
  </div>
</template>

<script>
import ImageLeft from '../../components/ImageLeft.vue';

export default {
  name: 'App',

  components: {
    ImageLeft,
  },

  data: () => ({
    //
    title: "Photos",
    text: ["Here's some text about us. It's here to give potential customers some of our background and qualifications"],
    images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYYXz2QYBWPsgQ1JAD15Wcz7Ub-nYYH66dg&usqp=CAU"],
  }),
};
</script>
