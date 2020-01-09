<template>
	<div class="other2">
		<div class="bgImg"></div>
		<div class="container wrap">
			<div class="first">
				<h2>投资者关系</h2>
				<p class="p-first">阅文集团是中国网络文学市场的先锋，运营领先的网络文学平台。<br>
					按作家、读者以及提供文学内容的规模和质量等维度，阅文都在中国网络文学市场中
					处于领先地位。</p>
				<p class="p-second">
					2017年11月8日，阅文集团在香港联交所主板上市，股份代号：0772。</p>
				<router-link to="#">了解更多</router-link>
			</div>
			<div class="second"><img src="../../../public/images/yw-invest-pic@2x.png"></div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.other2 {
		position: relative;
		height: 640px;
		background-image: linear-gradient(to bottom, rgba(72, 140, 229, 1), rgba(53, 114, 218, 1));

		.bgImg {
			width: 100%;
			height: 70%;
			position: absolute;
			bottom: 0;
			background: url('../../../public/images/yw-invest-line.png') no-repeat;
		}

		.wrap {
			height: 100%;
			position: absolute;
			left: 50%;
			margin-left: -25%;
			display: flex;
			color: #fff;
			
			.first,
			.second{
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			
			
			.second {
				width: 368px;
				
				img {
					width: 100%;
				}
			}

			.first {
				h2{
					font-size: 32px;
				}
				.p-first{
					font-size: 18px;
					width: 720px;
				}
				.p-second {
					font-size: 16px;
					&::before {
						content: "";
						display: inline-block;
						width: 10px;
						height: 16px;
						overflow: hidden;
						background: url('../../../public/images/icon-invest@2x.png') no-repeat;
						background-size: 100%;
					}
				}

				a {
					width: 130px;
					height: 50px;
					line-height: 50px;
					text-align: center;
					color: #fff;
					text-decoration: none;
					border: 2px solid #fff;
					
					&:hover{
						background: rgba($color: #000000, $alpha: .1);
					}
				}

			}
		}
	}
</style>
