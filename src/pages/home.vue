<template>
	<div id="home" ref="home">
		<v-header></v-header>
		<!-- <category-list></category-list> -->
		<article-list></article-list>
		<v-footer></v-footer>
	</div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import categoryList from '@/components/categoryList'
import articleList from '@/components/articleList'

export default {
	components: {
		'categoryList': categoryList,
		'articleList': articleList,
		'v-header': Header,
		'v-footer': Footer
	}

}

</script>

<style>

</style>