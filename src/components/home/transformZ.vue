<template>
  <div class="site">
    <div class="wrapper horizontal demo1">
      <ul class="container">
        <li class="cards_list"  v-for="(item,index) of imgs" :key="index">
          <div class="img">
            <img :src="item.src" ref="card" :data-index="item.index"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import $ from "./js/jquery";
import "./js/carousel";
$(document).ready(function() {
  $("div.wrapper").each(function(i, e) {
    $(e).attr("ondragstart", "return false");
  });

  var $demo1 = $("div.demo1");
  console.time("t");

  var carousel1 = new Carousel($demo1.children("ul.container"), {
    opacity: 1,
    scale: [0.9],
    transition: "400ms",
    // switchBtn: $demo1.children("i.btn-direct"),
    isClickCard: true,
    isAuto: true,
    interval: 4000
  });
  console.timeEnd("t");
});

export default {
  props: {
    imgs: {
      type: Array
    }
  },
  data(){
    return {
      index:0
     
    }
  },
  methods: {
    
  },
  
  created(){
    this.$emit('get',this.index)
  },
  mounted(){
    
  }
    
};
</script>



<style lang="scss" scoped>
.site {
  width: 1920px;
  height: 314.4px;
  position: absolute;
  bottom: 0;
  .wrapper {
    .container {
      position: absolute;
      left: 20%;

      .cards_list {
        width: 236.4px;

        .img {
          // filter: brightness(70%);
          img {
            width: 236.4px;
            height: 314.4px;
          }
        }
      }
    }
  }
}
</style>