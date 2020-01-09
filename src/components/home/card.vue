<template>
	<el-row>
		<el-col :span="8" v-for="(o, index) in list" :key="index" :offset="index > 0 ? 2 : 0">
			<el-card :body-style="{ padding: '0px' }">
				<img :src="o.src" class="image">
				<div class="card-content">
					<span class="title">{{o.title}}</span>
					<div class="bottom clearfix">
						<time class="time">{{ currentDate }}</time>
						<p class="subtitle">{{o.subtitle}}</p>
						<router-link  :to="o.to">了解更多</router-link>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						index: 0,
						src: require('../../../public/images/be57d62ba51cd668cf5efa7592704392.jpg'),
						title: "主标题",
						subtitle: "副标题",
						to: "#"
					},
					{
						index: 1,
						src: require('../../../public/images/be57d62ba51cd668cf5efa7592704392.jpg'),
						title: "主标题",
						subtitle: "副标题",
						to: "#"
					},
					{
						index: 2,
						src: require('../../../public/images/be57d62ba51cd668cf5efa7592704392.jpg'),
						title: "主标题",
						subtitle: "副标题",
						to: "#"
					},
					{
						index: 3,
						src: require('../../../public/images/be57d62ba51cd668cf5efa7592704392.jpg'),
						title: "主标题",
						subtitle: "副标题",
						to: "#"
					}
				],
				currentDate: new Date().toLocaleString()
			};
		}
	}
</script>

<style lang="scss">
	.el-row {
		margin: 50px 0;
		display: flex;
		justify-content: space-around;
	}

	.el-col-8 {
		height: 408px;
		width: 287.5px !important;

		.el-card {
			height: 100%;
		}
	}

	.el-col-offset-2 {
		margin-left: 0 !important;
	}

	.time {
		font-size: 13px;
		color: #999;
		
	}
	.card-content{
		padding:25px 15px;
		
		.title{
			font-size: 18px;
			font-weight: bold;
		}
		}
	.bottom {
		margin-top: 13px;
		line-height: 12px;
		
		a{
			text-decoration: none;
			font-size: 16px;
		}
		
		.subtitle{
			font-size: 16px;
			padding: 15px 0;
			margin-bottom: 0;
		}
	}

	

	.image {
		height: 160px;
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>
