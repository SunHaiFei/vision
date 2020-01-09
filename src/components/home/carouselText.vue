<template>
  <div class="carousel-text">
    <div class="div2" v-show="i==2 ? true : false">
      <h1>数字阅读,文创未来</h1>
      <h2>引领行业的正版数字阅读平台和文学 IP 培育平台</h2>
    </div>
    <div class="div2" v-show="i==1 ? true : false">
      <h1>以梦为马，不负韶华</h1>
      <h2>加入阅文，携手共铸文学梦</h2>
      <router-link to="#">了解更多</router-link>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    i: {}
  },

  // 运用子组件的监听
  //实现父组件变化,子组件实时更新
  watch: {
    i() {
      // console.log(this.i)
    }
  }
};
</script>



<style lang="scss">
@keyframes myfirst {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.carousel-text {
  overflow: hidden;
  width: 960px;
  height: 300px;
  color: #fff;
  text-align: center;
  line-height: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-480px, -150px);

  .div2 {
    opacity: 0;
    animation: myfirst 8s ease-in-out 0.1s 1 normal none;
  }

  h1 {
    font-size: 64px;
    font-family: "SYSTC";
  }
  h2 {
    font-size: 36px;
  }
  a {
    font-size: 16px;
    padding: 15px 40px;
    border: 1px solid #fff;
    color: #fff;
    text-decoration: none;
    //伪类嵌套写法
    &:hover{
        background: rgba($color: #000000, $alpha: .2)
    }

  }
}
</style>