<template>
  <ul class="container my-about2 pl-0 mb-0">
    <li>
      <p></p>
      <p>780万名作家</p>
      <p>完善的作家孵化和培养体系，打造作家、读者、平台互生共荣的文化生态体系。</p>
    </li>
    <li>
      <p></p>
      <p>1170万部作品</p>
      <p>包罗网络原创、传统出版、音频听书等海量作品，覆盖200多种内容品类。</p>
    </li>
    <li>
      <p></p>
      <p>数亿活跃用户</p>
      <p>以 QQ 阅读为中心，构建多元产品矩阵，打通广泛的内外分发渠道。</p>
    </li>
    <li>
      <p></p>
      <p>IP产业核心源头</p>
      <p>以涵盖多种形式的IP运营矩阵推进全链开发，长据市场优势份额。</p>
    </li>
  </ul>
</template>





<script>
export default {};
</script>

<style lang="scss" scoped>
.my-about2 {
  padding-top: 50px;
  display: flex;
  justify-content: space-between;

  li {
    width: 244px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
      margin-bottom: 0;
    }

    p:nth-child(2),
    p:nth-child(4),
    p:nth-child(6),
    p:nth-child(8) {
      font-size: 16px;
      color: #3385ff;
    }
  }

  li:nth-child(1) {
    p:first-child {
      height: 60px;
      width: 60px;
      background: url("../../../public/images/icons-pbm4.png") no-repeat;
    }
    p:last-child {
      width: 220px;
      margin-top: 20px;
      font-size: 14px;
      color: #717678;
    }
  }
  li:nth-child(2) {
    p:first-child {
      height: 60px;
      width: 60px;
      background: url("../../../public/images/icons-pbm4.png") no-repeat -65px center;
    }
    p:last-child {
      width: 220px;
      margin-top: 20px;
      font-size: 14px;
      color: #717678;
    }
  }
  li:nth-child(3) {
    p:first-child {
      height: 60px;
      width: 60px;
      background: url("../../../public/images/icons-pbm4.png") no-repeat -130px center;
    }
    p:last-child {
      width: 220px;
      margin-top: 20px;
      font-size: 14px;
      color: #717678;
    }
  }
  li:nth-child(4) {
    p:first-child {
      height: 60px;
      width: 60px;
      background: url("../../../public/images/icons-pbm4.png") no-repeat -205px center;
    }
    p:last-child {
      width: 220px;
      margin-top: 20px;
      font-size: 14px;
      color: #717678;
    }
  }
}
</style>