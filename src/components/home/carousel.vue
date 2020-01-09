<template>
  <div class="my-carousel">
    <ul class="carousel pl-0 mb-0" :style="Style">
      <li v-show=" i==1 ? true : false" :style="Style">
        <img src="../../../public/images/banner1.png" />
      </li>
      <li v-show=" i==2 ? true : false" :style="Style">
        <img src="../../../public/images/banner2.png" />
      </li>
    </ul>
    <ul class="carousel-radius pl-0 mb-0" @click="toggle">
      <li data-i="1" :class="{active : i ==1}"></li>
      <li data-i="2" :class="{active : i ==2}"></li>
    </ul>
    <carousel-text :i="i"></carousel-text>
  </div>
</template>




<script>
import carouselText from "../home/carouselText";
import { setInterval, clearInterval } from "timers";
export default {
  components: {
    "carousel-text": carouselText
  },
  computed: {
    Style() {
      return {
        //   返回高度 和 宽度
        width: this.innerWidth + "px"
      };
    }
  },
  methods: {
    toggle(e) {
      const i = e.target.dataset.i;
      this.i = i;
    },
    Toggle01() {
      //设置一次性定时器
      //完成每次切换
      setTimeout(() => {
        this.i = 2;
      }, 5000);
      if (this.i == 2) {
        setTimeout(() => {
          this.i = 1;
        }, 5000);
      }
    },
    autoToggle() {
      if(this.timer !== undefined){
        clearInterval(this.timer)
      }
      //设置循环定时器
      //需要每次清除timer
      this.timer = setInterval(() => {
        this.Toggle01();
      }, 5000);
    }
  },
  created() {
    this.autoToggle();
    window.onresize = e => {
      // 窗口变化需要防抖
      //console.log(e.target.innerWidth);
      const width = e.target.innerWidth;
      const timer = this.timer;
      //只要不是最后一次触发,就不执行
      if (timer !== undefined) {
        clearTimeout(timer);
      }
      this.timer = setTimeout(() => {
        this.innerWidth = width;
      }, 300);
    };
  },
  data() {
    return {
      // banner图片的高度和宽度应随着窗口变化而变化
      innerWidth: window.innerWidth,
      timer: "",
      i: 1,
      timer :""
    };
  }
};
</script>




<style lang="scss">
@media (max-width:375px) {
	.my-carousel{
		
		}
		
}

.my-carousel {
  // 最顶层盒子
  position: relative;
  .carousel-radius {
    // 小圆点
    width: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50px);

    li {
      width: 40px;
      height: 7px;
      border: 1px solid #fff;
      background: transparent;
    }

    li.active {
      background: #fff;
    }
  }

  .carousel {
    //装图片的盒子
    position: relative;
    height: 640px;
    overflow: hidden;
    li {
      // 
      width: 100%;
      position: absolute;
      img {
        // 图片需要宽度 高度
        width: 100%;
        height: 640px;
      }
    }
  }
}
</style>