<template>
	<!-- nav -->
	<nav class="container-fluid home-nav" :style="Style">
		<div class="logo" @click="goHome" :style="{backgroundPositionX : Style2.positionX ,backgroundPositionY :
    Style2.positionY }"></div>
		<div class="h-100 d-flex align-items-center justify-content-end">
			<ul class="home-ul row d-sm-none d-lg-flex justify-content-between pr-4 pl-0 mb-0">
				<li @click="toggle" @mouseenter="enter" @mouseleave="leave" v-for="item of list" :key="item.index" :data-index="item.index"
				 :class="{selected : item.index == selectedIndex,selectedBg : item.index == selectedIndex && a>=100}" :style="item.index == selectIndex ? Style3 : ''">
					<router-link :style="Style1" :to="item.to">{{item.name}}</router-link>
					<!-- {{item.name}} -->
				</li>
			</ul>

			<ul :style="Style4" class="language d-lg-flex flex-column mb-0" @click="language">
				<li class="One" data-index="0">简</li>
				<ul class="d-lg-flex flex-column mb-0 pl-0" v-if="hide">
					<li @mouseenter="enter1" data-index="1" :class="{hover : sIndex ==1}">简</li>
					<li @mouseenter="enter1" data-index="2" :class="{hover : sIndex ==2}">繁</li>
					<li @mouseenter="enter1" data-index="3" :class="{hover : sIndex ==3}">English</li>
				</ul>
			</ul>
			<router-link :style="Style1" to="#" class="ml-2 Platform">阅文开放平台</router-link>
			<router-link :style="Style4" to="#" class="ml-2 join">加入我们</router-link>
		</div>
	</nav>
</template>

<script>
	import $ from './js/jquery.js'
	export default {
		methods: {
			enter1(e) {
				//console.log(e.target.dataset.index)
				this.sIndex = e.target.dataset.index

			},
			language(e) {
				const index = e.target.dataset.index;
				//console.log(e.target.dataset.index);
				// 第一次显示
				//第二次隐藏
				this.i++;
				if (index == 0 && this.i % 2 == 1) {
					this.hide = true;
				} else {
					this.hide = false;
				}
				//console.log(this.i);
			},
			goHome() {
				console.log("回首页");
			},
			toggle(e) {
				this.selectedIndex = e.target.dataset.index;
				let index = this.selectedIndex
				if (index == 0) {
					$(window).scrollTop(0)
				} else if (index == 1) {
					$(window).scrollTop(1200)
				} else if (index == 2) {
					$(window).scrollTop(1800)
				} else if (index == 3) {
					$(window).scrollTop(2400)
				}else if (index==4){
					$(window).scrollTop(3200)
				}else if(index==5){
					$(window).scrollTop(3800)
				}else if(index==6){
					$(window).scrollTop(4200)
				}
			},
			enter(e) {
				this.selectIndex = e.target.dataset.index;
				//
				if (this.a < 100) {
					this.Style3 = {
						borderBottom: "2px solid #fff"
					};
				}
			},
			leave() {
				this.selectIndex = this.selectedIndex;
			},
			scroll() {
				window.onscroll = () => {
					// 滚动条 防抖
					const a = document.documentElement.scrollTop || document.body.scrollTop;
					if (this.timer1 !== undefined) {
						clearTimeout(this.timer1);
					}
					this.timer1 = setTimeout(() => {
						this.a = a;
						this.chooseSelect(a)

						if (a >= 100) {
							this.Style = {
								background: "#fff",
								borderBottom: "#36D"
							};
							this.Style1 = {
								color: "#000"
							};
							this.Style2 = {
								positionY: "-47px",
								positionX: "0"
							};

							this.Style3 = {
								borderBottom: "2px solid #36D"
							};

							this.Style4 = {
								color: "#36D",
								border: "1px solid #36D"
							};
						} else {
							this.Style = {
								background: "",
								borderBottom: ""
							};
							this.Style1 = {
								color: "#fff"
							};
							this.Style2 = {
								positionY: "0",
								positionX: "0"
							};

							this.Style3 = {
								borderBottom: "2px solid #fff"
							};

							this.Style4 = {
								color: "#fff",
								border: "1px solid #fff"
							};
						}
						// console.log(a)
					}, 300);
				};
			},
			chooseSelect(a) {
				//console.log(a)
				if (a >= 4200) {
					
					this.selectedIndex = this.selectIndex = 6
				} else if (a >= 3800) {
					this.selectedIndex = this.selectIndex = 5
				} else if (a >= 3200) {
					this.selectedIndex = this.selectIndex = 4
				} else if (a >= 2400) {
					this.selectedIndex = this.selectIndex = 3
				} else if (a >= 1800) {
					this.selectedIndex = this.selectIndex = 2
				} else if (a >= 1200) {
					this.selectedIndex = this.selectIndex = 1
				} else {
					this.selectedIndex = this.selectIndex = 0
				}
			}
		},
		created() {
			this.scroll()

		},
		data() {
			return {
				sIndex: "",
				i: 0,
				hide: false,
				a: "",
				selectedIndex: 0,
				selectIndex: 0,
				Style: {
					background: "",
					borderBottom: ""
				},
				Style1: {
					color: ""
				},
				Style2: {
					positionY: "",
					positionX: ""
				},
				Style3: {
					borderBottom: ""
				},
				Style4: {
					color: "#fff",
					border: ""
				},
				list: [
					// 下标 name 跳转路由
					{
						index: 0,
						name: "关于我们",
						to: "#"
					},
					{
						index: 1,
						name: "全版权运营",
						to: "#"
					},
					{
						index: 2,
						name: "移动产品",
						to: "#"
					},
					{
						index: 3,
						name: "旗下品牌",
						to: "#"
					},
					{
						index: 4,
						name: "投资者关系",
						to: "#"
					},
					{
						index: 5,
						name: "新闻中心",
						to: "#"
					},
					{
						index: 6,
						name: "联系我们",
						to: "#"
					}
				],
				timer1: ""
			};
		}
	};
</script>

<style lang="scss">
	ul {
		list-style: none;
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 40px;
		margin-top: -23.5px;
		width: 138px;
		height: 47px;
		background: url("../../../public/images/index.png") no-repeat;
		cursor: pointer;
	}

	.home-nav {

		position: relative;
		height: 80px;
		background-color: transparent;
		font-size: 14px;

		.language {
			width: 50px;
			height: 37px;
			padding: 0 0;
			line-height: 37px;
			text-align: center;
			cursor: pointer;

			.One {
				width: 50px;

			}

			ul {
				width: 80px;
				color: #000;
				background: #fff;

				li.hover {
					background: #36D;
				}
			}
		}

		.join {
			padding: 7px 10px;
		}

		.home-ul>li {
			width: 80px;
			height: 80px;
			line-height: 80px;
			text-align: center;
			margin: 0 10px;
		}

		.home-ul>li.selected {
			background: rgba($color: #fff, $alpha: 0.4);
		}

		.home-ul>li.selectedBg {
			background-color: #36d;
		}

		ul>li>a,
		a {
			text-decoration: none;
			color: #fff;
		}
	}
</style>
