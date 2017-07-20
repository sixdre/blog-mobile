<template>
	<div id="home" ref="home">
		<v-header></v-header>
		<scroll class="wrapper" ref="wrapper" :dataList="articleList" :pulldown="pulldown" :pullup="pullup" @pulldown="refresh" @pullup="loadMore">
			<Banner></Banner>
			<category-list></category-list>
			<article-list :articleList="articleList"></article-list>
		</scroll>
		<v-footer></v-footer>
		<transition :name="transitionName" mode="out-in">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Banner from '@/components/common/banner'
import scroll from '@/components/common/scroll'
import articleList from '@/components/articleList'
import categoryList from '@/components/categoryList'
import getData from '@/service/getData'

export default {
	components: {
		articleList,
		categoryList,
		'v-header': Header,
		'v-footer': Footer,
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
			pullup: true
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
				let res = await getData.getArticles();
				let data = res.data;
				this.totalPage = data.totalPage;
				this.articleList = data.articles;
			}catch(err){

			}
		},
		loadMore() {
			this.page++;
			if (this.page > this.totalPage) {
				this.$refs.wrapper.nomore();
				return;
			}
			getData.getArticles(this.page).then((res) => {
				 let data = res.data;
				 data.articles.map((value) => {
					this.articleList.push(value);
				 });
			})
		},
		refresh() {
			getData.getArticles().then((res) => {
				this.page = 1;
				this.articleList = res.data.articles;
				this.$refs.wrapper.pulldownEnd();
			})
		}
	},
	// activated(){
	// 	console.log('scsc')
	// },
	// deactivated (){
	// 	console.log('cscscsc')
	// },
	watch: {
		'$route'(to, from) {
			const toDepth = to.path.split('/').length
			const fromDepth = from.path.split('/').length
			// this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			console.log(this.transitionName)
		}
	}
	

}

</script>

<style>
.wrapper {
	position: absolute;
	margin: 40px 0 50px 0;
	top: 0px; 
	bottom: 0px;
	width: 100%;
	overflow: hidden;
}
.child-view {
    position: absolute;
    left:0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all .3s cubic-bezier(.55,0,.1,1);
    background-color: #fff;
}

 .slide-left-enter, .slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    transition-delay: .3s;
    -webkit-transition-delay: .3s;
}
.slide-left-leave-active{
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    transition-delay: .3s;
    -webkit-transition-delay: .3s;
}
.slide-right-enter {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
    transition-delay: .3s;
    -webkit-transition-delay: .3s;
} 
 .slide-enter-active {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}
.slide-leave-active {
    -webkit-transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}  
</style>