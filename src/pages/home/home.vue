<template>
	<div id="home" ref="home">
		<header-search></header-search>
		<scroll class="wrapper" ref="wrapper" :watchData="articleList" 
			:pullup="pullup" :pullupMethod="loadMore" :allLoaded="nomore">
			<Banner></Banner>
			<category-list></category-list>
			<div class="top-title" >
				<span>热门文章</span>
			</div>
			<article-list :articleList="articleList"></article-list>
		</scroll>
		<transition name="router-slid">
			<router-view class="router-view"></router-view>
		</transition>
	</div>
</template>

<script>
import headerSearch from '@/components/header'
import Banner from '@/components/common/banner'
import scroll from '@/components/common/scroll'
import articleList from '@/components/articleList'
import categoryList from '@/components/categoryList'
import apiService from '@/service/api'

export default {
	components: {
		articleList,
		categoryList,
		headerSearch,
		Banner,
		scroll
	},
	data(){
		return {
			transitionName:'slide-left', //绑定在组件上面的动效class
			articleList:[],
			totalPage: 0,
			page: 1,
			pulldown: true,
			pullup: true,
			nomore:false
		}
	},
	created(){
		this.InitArticles().then(()=>{
			this.$nextTick(()=>{
				this.$refs.wrapper.initScroll();
			})
		})
	},
	methods:{
		async InitArticles() {		//获取数据
			try{
				let res = await apiService.getArticles();
				let data = res.data;
				this.totalPage = data.totalPage;
				this.articleList = data.articles;
			}catch(err){

			}
		},
		loadMore() {
			console.log(this.nomore)
			this.page++;
			if (this.page > this.totalPage) {
				this.nomore = true;
				return;
			}
			apiService.getArticles(this.page).then((res) => {
				 let data = res.data;
				 data.articles.map((value) => {
					this.articleList.push(value);
				 });
			})
		},
	},
	watch: {
		'$route'(to, from) {
			const toDepth = to.path.split('/').length
			const fromDepth = from.path.split('/').length
			 this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			console.log(this.transitionName)
		}
	}
	

}

</script>

<style>
.wrapper {
	position: absolute;
	margin: 40px 0 0 0;
	top: 0px; 
	bottom: 0px;
	width: 100%;
	overflow: hidden;
}


</style>