<template>
	<footer>
		<div class="first">
			<div class="container">
				<div class="wrap-one">
					<div class="wrap-one-one"></div>
					<p class="address"><span>上海</span>
						<span>北京</span>
						<span>杭州</span></p>
				</div>
				<div class="wrap-one"><span class="callMe">联系我们</span>
					<ul class="pl-0 wrap-one--one">
						<li v-for="(item,i) of list1" :data-i="item.index" @mouseenter="enter1" @mouseleave="leave1">
							{{item.name}}
							<div class="yincang" :style="{display : selectedIndex==item.index ? 'block' : 'none'}">
								<p>{{item.author}}</p>
								<p>电话:{{item.phone}}</p>
								<p>邮箱:{{item.email}}</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="wrap-one"><span class="callMe">移动产品</span>
					<ul class=" pl-0 wrap-one--one">
						<li></li>
					</ul>

				</div>
				<div class="wrap-one"><span class="callMe">友情链接</span>
					<ul class="pl-0 wrap-one--one">
						<li></li>
					</ul>

				</div>
			</div>
		</div>
		<div class="second">
			<div class="container">
				内容区
			</div>

		</div>
	</footer>
</template>

<script>
	export default {
		methods: {
			leave1() {
				this.selectedIndex = undefined
			},
			enter1(e) {
				console.log(e.target.dataset.i)
				this.selectedIndex = e.target.dataset.i
			}
		},
		data() {
			return {
				list1: [{
						index: 0,
						name: "IP衍生合作",
						author: "李女士",
						phone: 1111111,
						email: "1111112@163.com"
					},
					{
						index: 1,
						name: "IP衍生合作",
						author: "李女士",
						phone: 1111111,
						email: "1111112@163.com"
					},
					{
						index: 2,
						name: "IP衍生合作",
						author: "李女士",
						phone: 1111111,
						email: "1111112@163.com"
					},
					{
						index: 3,
						name: "IP衍生合作",
						author: "李女士",
						phone: 1111111,
						email: "1111112@163.com"
					},
					{
						index: 4,
						name: "IP衍生合作",
						author: "李女士",
						phone: 1111111,
						email: "1111112@163.com"
					},
					{
						index: 5,
						name: "IP衍生合作",
						author: "李女士",
						phone: 1111111,
						email: "1111112@163.com"
					}

				],
				list2: [],
				list3: [],
				selectedIndex: undefined
			}
		}

	}
</script>

<style lang="scss">
	@keyframes mymove {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}

	}

	footer {
		color: #fff;

		.container {
			width: 75%;
			height: 100%;
		}

		.first {
			height: 410px;
			background: #000 url('../../public/images/grid_bg2.png') repeat-x;

			.container {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.wrap-one {
					width: 25%;
					height: 250px;

					.address {
						span{
							font-size: 16px;
							padding-right:  15px;
						}
						span:first-child {
							padding-bottom: 10px;
							border-bottom: 2px solid #fff;
						}
					}

					.callMe {
						font-size: 18px;

					}

					.wrap-one--one {
						li {
							padding-top: 15px;
						}

						.yincang {
							animation: mymove 3s;
						}
					}
				}

				.wrap-one-one {
					height: 50px;
					background: url('../../public/images/index.png') no-repeat 0 0;



				}
			}
		
	}

	.second {
		height: 100px;
		background: rgba($color: #000000, $alpha: .5);
	}
	}
</style>
