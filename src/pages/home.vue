<template>
	<div ref="home">
		<v-header></v-header>
		<!-- <category-list></category-list> -->
		<article-list></article-list>  
	</div>
</template>

<script>
import Header from '@/components/header'
import categoryList from '@/components/categoryList'	
import articleList from '@/components/articleList'

export default{
	components:{
		'categoryList':categoryList,
		'articleList':articleList,
		'v-header':Header
	}

	
}
	
</script>

<style>


</style>