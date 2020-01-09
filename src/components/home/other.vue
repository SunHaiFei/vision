<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="QQ阅读" name="first"></el-tab-pane>
			<el-tab-pane label="起点读书" name="second"></el-tab-pane>
			<el-tab-pane label="作家助手" name="third"></el-tab-pane>
			<el-tab-pane label="起点国际" name="fourth"></el-tab-pane>
			<el-tab-pane label="红袖读书" name="five"></el-tab-pane>
			<el-tab-pane label="飞读作家小说" name="six"></el-tab-pane>
			<el-tab-pane label="话萌小说" name="seven"></el-tab-pane>
		</el-tabs>
		<!-- 重复代码区域 -->
		<div class="repeat" v-for="(item,i) of repeatList" :key="i" v-if="item.name==activeName">
			<div  class="bg-img" :style="{background:`url('${item.bg}') no-repeat center`}"></div>
			<router-link :to="item.to">了解更多</router-link>
			<div class="img"><img  :src="item.new"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				activeName: 'first',
				repeatList:[
					{name:"first",bg:require('../../../public/images/yw-h-qq.png'),new:require('../../../public/images/yw-app-qq-new@2x.png'),to:"#"},
					{name:"second",bg:require('../../../public/images/yw-h-qd2.png'),new:require('../../../public/images/yw-app-qq-new@2x.png'),to:"#"},
					{name:"third",bg:require('../../../public/images/yw-h-qq.png'),new:require('../../../public/images/yw-app-qq-new@2x.png'),to:"#"},
					{name:"fourth",bg:require('../../../public/images/yw-h-qq.png'),new:require('../../../public/images/yw-app-qq-new@2x.png'),to:"#"},
					{name:"five",bg:require('../../../public/images/yw-h-qq.png'),new:require('../../../public/images/yw-app-qq-new@2x.png'),to:"#"},
					{name:"six",bg:require('../../../public/images/yw-h-qq.png'),new:require('../../../public/images/yw-app-qq-new@2x.png'),to:"#"},
					{name:"seven",bg:require('../../../public/images/yw-h-qq.png'),new:require('../../../public/images/yw-app-qq-new@2x.png'),to:"#"}
					
				]
			};
		},
		methods: {
			handleClick(e) {
				console.log(e.name)
				this.activeName = e.name;
			}
		}
	};
</script>


<style lang="scss">
	
	.el-tabs__content,
	.el-tabs.el-tabs--top{
		width: 50%;
		margin: auto;
	}
	
	.repeat{
		height: 600px;
		width: 50%;
		margin: auto;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		align-items: center;
		
		.bg-img{
			width: 250px;
			height: 60px;
		}
		
		a{
			width: 120px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			border: 1px solid #3385FF;
			color: #3385FF;
			text-decoration: none;
		}
		
		
		.img{
			width: 670px;
			height: 335px;
			overflow: hidden;
			img{
				width: 670px;
			}
		}
	}
</style>
