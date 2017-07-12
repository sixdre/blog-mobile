<template>
	<div ref="home">
		<category-list :dataList="categoryList" @refreshCategory="refreshCategory()"></category-list>
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
		this.getCategories(0,7);
	},
	data(){
		return {
			categoryList:[],
			categoryTotal:0
		}
	},
	methods:{
		async getCategories(skip,limit){
			axios.get('/api/categories',{params:{skip:skip,limit:limit}}).then((res) => {
			 	let data=res.data;
			 	if(data.code==1){
					 this.categoryList=data.categories;
					 this.categoryTotal = data.total;
			 	}
		    });
		},
		refreshCategory(){
			let skip = Math.ceil(Math.random()*(this.categoryTotal/7));
			this.getCategories(skip,7)
		}
	}
	
	
}
	
</script>

<style>


</style>