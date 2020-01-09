<template>
  <div class="mt-4">
    <div class="my-about container">
      <h3>关于我们</h3>
      <p>
        阅文旗下囊括 QQ 阅读、起点中文网、新丽传媒等业界知名品牌，
        <br />拥有 1170 万部作品储备，780 万名创作者，覆盖 200 多种内容品类，触达数亿用
        <br />户，
      </p>
      <p>
        已成功输出《鬼吹灯》《盗墓笔记》《琅琊榜》《全职高手》《扶摇皇后》《将夜》等
        <br />大量优秀网文 IP 改编为影视、动漫、游戏等多业态产品。
      </p>
    </div>
    <my-about1></my-about1>
    <my-about2></my-about2>
  </div>
</template>




<script>
import homeAbout1 from "./homeabout1";
import homeabout2 from "./homeabout2";
export default {
  components: {
    "my-about1": homeAbout1,
    "my-about2": homeabout2
  }
};
</script>



<style lang="scss" scoped>
.my-about {
  text-align: center;
  position: relative;

  h3 {
    font-size: 28px;
  }

  h3,
  p {
    padding: 25px 0;
    margin-bottom: 0;
  }

  p {
    font-size: 18px;
    color: #3e4652;
  }

  &::before {
    position: absolute;
    top: 50%;
    right: 0;
    display: inline-block;
    width: 100px;
    height: 100px;
    background: url("../../../public/images/bg01.png") no-repeat -52px 0;
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-block;
    width: 100px;
    height: 100px;
    background: url("../../../public/images/bg01.png") no-repeat 52px 0;
  }
}
</style>