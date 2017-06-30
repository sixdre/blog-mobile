<template>
	<div>
		<category-list :dataList="categoryList"></category-list>
		<div class="split-line"></div>
		<article-list :dataList="articleList"></article-list>
	</div>
</template>

<script>
import categoryList from '@/components/categoryList'	
import articleList from '@/components/articleList'
import axios from 'axios'

export default{
	components:{
		'categoryList':categoryList,
		'articleList':articleList
	
	},
	created() {
		this.getData();
		this.getArticles();
	},
	data(){
		return {
			articleList:[],
			categoryList:[]
		}
	},
	methods:{
		getData(){		//获取数据
			axios.get('/api/articles').then((res) => {
			 	let data=res.data;
			 	console.log(data);
			 	if(data.code==1){
			 		this.articleList=res.data.articles;
			 	}
		    });
		},
		getArticles(){
			axios.get('/api/category').then((res) => {
			 	let data=res.data;
			 	console.log(data);
			 	if(data.code==1){
			 		this.categoryList=res.data.categorys;
			 	}
		    });
		}
	}
	
	
}
	
</script>

<style>


</style>