<template>
	<div>
		<category-list></category-list>
		<div class="split-line"></div>
		<article-list></article-list>
	</div>
</template>

<script>
import categoryList from '@/components/categoryList'	
import articleList from '@/components/articleList'

export default{
	components:{
		'categoryList':categoryList,
		'articleList':articleList
	
	}
	
	
}
	
</script>

<style>


</style>