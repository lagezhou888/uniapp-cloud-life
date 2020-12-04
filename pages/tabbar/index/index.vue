<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list="tabList"></tab>
		<view class="wrap" v-if="isStart">
			<u-swiper :list="foodList" interval="1500" duration="500" height="800" 
			:autoplay="false" :currentPostion="currentPostion"></u-swiper>
		</view>
		<view class="wrap" v-if="!isStart">
			<u-swiper :list="foodList" interval="100" duration="100" height="800" 
			:autoplay="true" :currentPostion="currentPostion"></u-swiper>
		</view>
		<view class="buttonContent">
			<button v-if="isStart" type="primary" plain="true" size="mini" @click="randomFood">测测今天吃什么</button>
			<button v-if="!isStart" type="primary" plain="true" size="mini" @click="stop">停止</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [],
				foodList: [],
				isStart:true,
				currentPostion:{},
			}
		},
		onLoad() {
			this.getLabel();
			this.get_food();
		},
		methods: {
			getLabel() {
				uniCloud.callFunction({
					name: 'get_label'
				}).then((res) => {
					const {
						result
					} = res;
					this.tabList = result.data;
				})
			},
			get_food() {
				uniCloud.callFunction({
					name: 'get_food'
				}).then((res) => {
					const {
						result
					} = res;
					this.foodList = result.data;
				})
			},
			randomFood(){
				this.isStart = !this.isStart;
			},
			stop(){
				let index = Math.floor(Math.random()*this.foodList.length);
				this.currentPostion = {
					index : index,
					src : this.foodList[index].image,
				}
				this.isStart = !this.isStart;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.buttonContent {
		text-align: center;
		justify-content: center;
		align-items: center;
		padding-top:10px;
	}
	.wrap {
		padding: 40rpx;
	}
</style>
