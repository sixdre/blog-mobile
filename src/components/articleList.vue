<template>
	<ul class="article_list">
		<li v-for="(item,index) in articleList" :key="index" :class="{'have-img':item.img}">
			<router-link :to="{path: '/article/'+item._id}">
				<div v-if="item.img" class="wrap-img" >
					<img :src="item.img" class="img-responsive">
				</div >
				<div class="content">
					<div class="author">
						<div class="blue-link avatar">
							<img src="//upload.jianshu.io/users/upload_avatars/4155179/d68e4975c4cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="">
							<span class="name">{{item.author}}</span>
						</div>
						<span class="time">{{item.create_time | fromNow}}</span>
					</div>
					<p class="title">{{item.title}}</p>
					<div class="meta">
						<a class="tag">
							<span v-if="item.category&&item.category.name">{{item.category.name}}</span>
							<span v-else>未分类</span>
						</a>
						<span>阅读 {{item.nums.pv}}</span>
						<span>评论 {{item.nums.cmtNum}}</span>
						<span>喜欢 {{item.nums.likeNum}}</span>
					</div>
				</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
import getData from '@/service/getData'

export default {
	props:{
		articleList:{
			type:Array,
			default(){
				return []
			}
		}
	}
}


</script>

<style>

.article_list {
	margin: 0;
	list-style: none;
	padding: 0 15px;
}

.article_list>li {
	position: relative;
	width: 100%;
	border-bottom: 1px solid #f0f0f0;
	word-wrap: break-word;
}
.article_list>li>a{
	display: block;
}

.article_list .content {
	padding: 15px 0;
}

.article_list .have-img .wrap-img {
	position: absolute;
	top: 50%;
	margin-top: -40px;
	right: 0;
	width: 80px;
	height: 80px;
}

.article_list .have-img .wrap-img img {
	width: 100%;
	height: 100%;
	border-radius: 4px;
	border: 1px solid #f0f0f0;
}

.article_list .have-img .content {
	padding-right: 100px;
}

.article_list .author {
	/*margin-bottom: 14px;*/
	font-size: 12px;
}

.article_list .author .time {
	font-size: 10px;
	color: #999;
}

.article_list .title {
	display: inherit;
	font-size: 16px;
	padding: 10px 0;
	line-height: 1.5;
	color: #333;
}

.article_list .meta {
	display: flex;
	align-items: center;
	font-size: 12px;
	font-weight: 400;
}

.article_list .meta a,
.article_list .meta span {
	color: #888;
	margin-right: 5px;
}

.article_list .meta .tag {
	padding: 0px 5px;
	color: #ea6f5a;
	text-align: center;
	border: 1px solid #ea6f5a;
	border-radius: 3px;
	line-height: 1.5;
}

.article_list .meta .tag span {
	color: #ea6f5a;
}

.article_list .art_category {
	padding: 2px 6px;
	color: #ea6f5a!important;
	border: 1px solid rgba(236, 97, 73, .7);
	border-radius: 3px;
}
</style>