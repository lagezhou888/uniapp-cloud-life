<template>
	<view class="tab">
		<scroll-view scroll-x class="tab-scroll">
			<view class="tab-scroll__box">
				<view class="tab-scroll__item" v-for="(item,index) in list" :key="index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.tab{
		display: flex;
		width: 100%;
		border-bottom: 1px #f5f5f5 solid;
		background-color: #FFF;
		box-sizing: border-box;
		.tab-scroll{
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.tab-scroll__box{
				display: flex;
				height: 45px;
				align-items: center;
				flex-wrap: nowrap;
				.tab-scroll__item{
					flex-shrink: 0;
					padding: 0 10px;
					color:#333;
					font-size: 14px;
				}
			}
		}
		.tab-icons{
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width:45px;
			&::after{
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left:0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>
