<template>
	<div ref="main">
		<category-list :dataList="categoryList"></category-list>
		<div class="split-line"></div>
		<article-list></article-list>
	</div>
</template>

<script>
import BSscroll from 'better-scroll'
import categoryList from '@/components/categoryList'	
import articleList from '@/components/articleList'
import axios from 'axios'

export default{
	components:{
		'categoryList':categoryList,
		'articleList':articleList
	},
	created() {
//		this.getData();
		this.getCategories();
	},
	data(){
		return {
			articleList:[],
			categoryList:[]
		}
	},
	methods:{
		
		async getCategories(){
			axios.get('/api/category').then((res) => {
			 	let data=res.data;
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