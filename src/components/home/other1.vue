<template>
	<div class="other1">
		<h3 class="other1-logo">旗下品牌</h3>
		<!--盛放精灵图 -->
		<ul id="sprites" class="pl-0" @mouseover="enter"></ul>
		<!-- 内容区 -->
		<div v-for="(item,i) of list" :key="i" v-if="item.index == selectedIndex">
			<div class="content container">{{item.content}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		
		data() {
			return {
				list: [{
						index: 0,
						content: "奥义1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt aliquid molestiae dolorum nesciunt sed iure suscipit optio in similique delectus minus blanditiis sit repellendus sequi atque placeat officia ullam excepturi architecto quos. Perspiciatis illo magnam molestiae maiores officiis voluptatem impedit quam dolores. Omnis accusantium quaerat nemo placeat perferendis illo magnam commodi expedita harum consectetur cupiditate distinctio doloribus non voluptatibus ipsam. Error quibusdam"
					},
					{
						index: 1,
						content: "奥义2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt aliquid molestiae dolorum nesciunt sed iure suscipit optio in similique delectus minus blanditiis sit repellendus sequi atque placeat officia ullam excepturi architecto quos. Perspiciatis illo magnam molestiae maiores officiis voluptatem impedit quam dolores. Omnis accusantium quaerat nemo placeat perferendis illo magnam commodi expedita harum consectetur cupiditate distinctio doloribus non voluptatibus ipsam. Error quibusdam"
					},
					{
						index: 2,
						content: "奥义3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt aliquid molestiae dolorum nesciunt sed iure suscipit optio in similique delectus minus blanditiis sit repellendus sequi atque placeat officia ullam excepturi architecto quos. Perspiciatis illo magnam molestiae maiores officiis voluptatem impedit quam dolores. Omnis accusantium quaerat nemo placeat perferendis illo magnam commodi expedita harum consectetur cupiditate distinctio doloribus non voluptatibus ipsam. Error quibusdam"
					},
					{
						index: 3,
						content: "奥义4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt aliquid molestiae dolorum nesciunt sed iure suscipit optio in similique delectus minus blanditiis sit repellendus sequi atque placeat officia ullam excepturi architecto quos. Perspiciatis illo magnam molestiae maiores officiis voluptatem impedit quam dolores. Omnis accusantium quaerat nemo placeat perferendis illo magnam commodi expedita harum consectetur cupiditate distinctio doloribus non voluptatibus ipsam. Error quibusdam"
					},
					{
						index: 4,
						content: "奥义5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt aliquid molestiae dolorum nesciunt sed iure suscipit optio in similique delectus minus blanditiis sit repellendus sequi atque placeat officia ullam excepturi architecto quos. Perspiciatis illo magnam molestiae maiores officiis voluptatem impedit quam dolores. Omnis accusantium quaerat nemo placeat perferendis illo magnam commodi expedita harum consectetur cupiditate distinctio doloribus non voluptatibus ipsam. Error quibusdam"
					},
					{
						index: 5,
						content: "奥义6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt aliquid molestiae dolorum nesciunt sed iure suscipit optio in similique delectus minus blanditiis sit repellendus sequi atque placeat officia ullam excepturi architecto quos. Perspiciatis illo magnam molestiae maiores officiis voluptatem impedit quam dolores. Omnis accusantium quaerat nemo placeat perferendis illo magnam commodi expedita harum consectetur cupiditate distinctio doloribus non voluptatibus ipsam. Error quibusdam"
					},

				],
				selectedIndex: 0
			}
		},
		mounted() {
			this.render()
		},
		methods: {
			enter(e) {
				console.log(e.target.dataset.i)
				const i = e.target.dataset.i
				if(i !== undefined){
					this.selectedIndex = i
				}
				
			},
			render() {
				let li = "";
				for (let i = 0; i < 25; i++) {
					li += `<li data-i=${i}></li>`
				}
				let sprites = document.getElementById('sprites')
				sprites.innerHTML = li
			}
		}
	}
</script>

<style lang="scss">
	@keyframes myfirst {
		from{
			//transform: translateY(0);
			opacity: 0;
		}
		to{
			//transform: translateY(-25%);
			opacity: 1;
		}
	}

	.other1 {
		height: 760px;
		background: #212737;
		display: flex;
		flex-direction: column;

		.other1-logo {
			padding: 25px 0;
			font-size: 36px;
			color: #fff;
			text-align: center;
		}

		.content {
			color: #fff;
			font-size: 18px;
			font-weight: bold;
			line-height: 32px;
			width: 680px;
			height: 128px;
			overflow: hidden;
			text-align: center;
			animation: myfirst 2s;
		}
		
		#sprites {
			width: 1220px;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;


			li {
				width: 200px;
				height: 80px;
				opacity: .5;
				border: 1px solid #fff;

				&:hover {
					opacity: 1;
				}
			}

			li:nth-child(1) {
				background: url('../../../public/images/css_sprites.png') no-repeat 0 0;
			}

			li:nth-child(2) {
				background: url('../../../public/images/css_sprites.png') no-repeat -200px 0;
			}

			li:nth-child(3) {
				background: url('../../../public/images/css_sprites.png') no-repeat -400px 0;
			}

			li:nth-child(4) {
				background: url('../../../public/images/css_sprites.png') no-repeat -600px 0;
			}

			li:nth-child(5) {
				background: url('../../../public/images/css_sprites.png') no-repeat 0 -80px;
			}

			li:nth-child(6) {
				background: url('../../../public/images/css_sprites.png') no-repeat -200px -80px;
			}
		}


	}
</style>
