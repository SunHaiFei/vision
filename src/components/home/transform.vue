<template>
  <div class="my--transform">
    <div class="my-transform">
      <div class="yunying">
        全版权运营
        <!-- 到时候子组件传过来一个i就可以实现动态切换 -->
        <p>{{imgs[10].title}}</p>
      </div>
      <div class="mengban"></div>
      <div class="img1">
        <img
          src="../../../public/images/book-line3.jpg"
          :style="{transform : `translateX(-${i*10}px)`}"
        />
        <img
          src="../../../public/images/book-line3.jpg"
          :style="{transform : `translateX(-${i*10}px)`}"
        />
      </div>
      <div class="img1">
        <img
          src="../../../public/images/book-line4.jpg"
          :style="{transform : `translateX(-${j*10}px)`}"
        />
        <img
          src="../../../public/images/book-line4.jpg"
          :style="{transform : `translateX(-${j*10}px)`}"
        />
      </div>
      <div class="img1">
        <img
          src="../../../public/images/book-line1.jpg"
          :style="{transform : `translateX(-${k*10}px)`}"
        />
        <img
          src="../../../public/images/book-line1.jpg"
          :style="{transform : `translateX(-${k*10}px)`}"
        />
      </div>
    </div>
<!--    <transform-z :imgs="imgs" @get="index"></transform-z>
 -->  </div>
</template>

<script>
//import transformZ from "./transformZ";
import { setInterval } from "timers";
export default {
  components: {
    //"transform-z": transformZ
  },
  methods: {
    // index(e){
    //   console.log('父组件收到',e)
    // },
    // 写一个方法实现 图片从左往右移动
    myslide() {
      setTimeout(() => {
        //   保证每一行速率都不一样
        this.i += 0.5;
        this.j += 0.4;
        this.k += 0.6;
      }, 0);
    },
    autoMyslide() {
      setInterval(() => {
        this.myslide();
        //console.log(this.j,this.k);
        //如果第一个为0的话,就让它重新开始
        if (this.i >= 192) {
          this.i = 0;
        }
        //由于结果可能存在小数,所以进行比较
        if (this.j >= 192) {
          this.j = 0;
        }
        if (this.k >= 192) {
          this.k = 0;
        }
      }, 150);
    }
  },

  created() {
    this.autoMyslide();
  },
  watch: {
    imgs() {
      
    }
  },
  data() {
    return {
      i: 0,
      j: 0,
      k: 0,
      imgs: [
        {
          index: 0,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 1,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 2,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 3,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 4,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 5,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 6,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 7,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 8,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 9,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },

        {
          index: 10,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 11,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 12,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 13,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 14,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 15,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 16,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 17,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 18,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        },
        {
          index: 19,
          src: require("../../../public/images/doupocangqiong.jpg"),
          title: "暂时空1"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.my--transform{
  width: 1920px;
  position: relative;
}
.my-transform {
  height: 560px;
  margin-top: 50px;
  padding-top: 50px;
  position: relative;
  //防止出界
  overflow: hidden;

  .yunying {
    width: 760px;
    height: 100px;
    color: #fff;
    font-size: 36px;
    z-index: 2;
    transform: translateX(-380px);
    text-align: center;
    line-height: 100px;
    position: absolute;
    top: 10%;
    left: 50%;
  }
  .mengban {
    //之前蒙版位于底层,解决:z-index
    z-index: 1;
    width: 1920px;
    height: 560px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: 0.5);
  }

  .img1 {
    display: flex;
    transform: translate3d(0, 0, 0);

    img {
      // firefox中不加高度会失去高度
      // chrome 中不加高度会自动加上高度
      backface-visibility: hidden;
      height: 140px;
      transition: transform 0.5s linear;
    }
  }
}
</style>