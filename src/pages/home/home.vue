<template>
	<div id="home" ref="home">
		<div class="header_search">
	        <input type="text" class="search_input" placeholder="搜索文章内容或作者">
	    </div>
		<scroll class="wrapper" ref="wrapper" :watchData="articleList" 
			:pullup="pullup" :pullupMethod="loadMore" :allLoaded="nomore">
			<Banner></Banner>
			<category-list></category-list>
			<div class="top-title" >
				<span>热门文章</span>
			</div>
			<article-list :articleList="articleList"></article-list>
		</scroll>
	</div>
</template>

<script>
import Banner from '@/components/common/banner'
import scroll from '@/components/common/scroll'
import articleList from '@/components/articleList'
import categoryList from '@/components/categoryList'
import apiService from '@/service/api'

export default {
	components: {
		articleList,
		categoryList,
		Banner,
		scroll
	},
	data(){
		return {
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
.header_search{
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}
.header_search .search_input {
    width: 100%;
    height: 30px;
    margin: 0;
    border-radius: 20px;
    outline: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #eee;
    background-image: none;
    border: 0;
    text-align: center;
    font-size: 14px;
}

.header_search .search_input::-webkit-input-placeholder {
    color: #aaa;
}
</style>