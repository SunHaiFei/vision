<template>
  <ul class="about1-ul container">
    <li class="about1-li" v-for="item of list" :key="item.index">
        <router-link :to="item.to">{{item.name}}</router-link>
    </li>
  </ul>
</template>



<script>
export default {
  data() {
    return {
      list: [
        { name: "公司简介", to: "#", index: 0 },
        { name: "发展历程", to: "#", index: 1 },
        { name: "管理团队", to: "#", index: 2 },
        { name: "社会责任", to: "#", index: 3 }
      ]
    };
  }
};
</script>



<style lang="scss" scoped>
.about1-ul{
    display: flex;
    justify-content: center;
    .about1-li{
        width: 100px;
        &:hover{
            background: url('../../../public/images/sword.svg') no-repeat 70% center;
        }

        &::after{
            content: "";
            display: inline-block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #d3dce0;
            margin-left: 25px;
            margin-bottom: 3px;
        }


        a{
            font-size: 14px;
            font-weight: bold;
            text-decoration: none;
        }
    }
}

</style>