<template>
	<div id="home" ref="home">
		<v-header></v-header>
		<article-list></article-list>
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
import scroll from './common/scroll'
import articleList from '@/components/articleList'

export default {
	components: {
		'articleList': articleList,
		'v-header': Header,
		'v-footer': Footer,
		Banner,
		scroll
	},
	data(){
		return {
			transitionName:'slide-left' //绑定在组件上面的动效class
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
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    transition-delay: .3s;
    -webkit-transition-delay: .3s;
}
.slide-left-leave-active{
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    transition-delay: .3s;
    -webkit-transition-delay: .3s;
}
.slide-right-enter {
    opacity: 0;
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