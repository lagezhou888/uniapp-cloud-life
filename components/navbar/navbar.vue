<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<!-- 导航栏内容 -->
			<view class="navbar-content" :style="{height:navBarHeight+'px',width:windowWidth+'px'}">
				<view class="navbar-serach">
					<view class="navbar-serach_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-serach_text">吃什么</view>
				</view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+navBarHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				navBarHeight: 45,
				windowWidth:375
			};
		},
		created() {
			//获取状态栏高度
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight;
			this.windowWidth = info.windowWidth;
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			//获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			this.navBarHeight = (menuButtonInfo.botton - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left;
			// #endif
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-fixed {
			position: fixed;
			top:0;
			left:0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;
			.navbar-content{
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				height: 45px;
				box-sizing: border-box;
				.navbar-serach {
					display: flex;
					align-items: center;
					padding: 0 10px;
					width: 100%;
					height: 30px;
					border-radius: 30px;
					background-color: #fff;
					.navbar-serach_icon{
						// width:10px;
						// height:10px;
						// border: 1px red solid;
						margin-right: 10px;
					}
					.navbar-serach_text{
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
</style>
