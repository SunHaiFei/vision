<template>
	<section>
		<my-nav class="my-nav"></my-nav>
		<my-carousel></my-carousel>
		<my-about></my-about>
		<my-transform></my-transform>
		<my-other></my-other>
		<my-other1></my-other1>
		<my-other2></my-other2>
		<my-card></my-card>
		<div class="more">
			<router-link to="#">查看更多</router-link>
		</div>
	</section>
</template>

<script>
	import Nav from "../components/home/homeNav.vue";
	import Carousel from "../components/home/carousel.vue";
	import homeAbout from '../components/home/homeAbout';
	import transform from '../components/home/transform'
	import Other from '../components/home/other.vue'
	import other1 from '../components/home/other1.vue'
	import other2 from '../components/home/other2.vue'
	import card from '../components/home/card.vue'

	export default {
		components: {
			"my-nav": Nav,
			"my-carousel": Carousel,
			"my-about": homeAbout,
			"my-transform": transform,
			"my-other": Other,
			"my-other1": other1,
			"my-other2": other2,
			"my-card": card
		}
	};
</script>



<style lang="scss">
	section {
		

		.more {
			font-size: 18px;
			height: 100px;
			line-height: 100px;
			text-align: center;
			a {
				color: #000;
				text-decoration: none;
			}
		}
	}

	.my-nav {
		position: fixed;
		z-index: 999;
	}
</style>
