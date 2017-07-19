<template>
	<scroll class="articlewrapper" ref="articlewrapper" :dataList="articleList" :pulldown="pulldown" :pullup="pullup" @pulldown="refresh" @pullup="loadMore">
		<div class="scroll">
			<div class="top-title">
				<span>热门专题</span>
				<span class="refesh" @click="refreshCategory()">
					<i class="fa fa-refresh"></i>
					换一批
				</span>
			</div>
			<div class="collection-groups">
				<a v-for="item in categoryList" :key="item._id" class="collection">{{item.name}}</a>
			</div>
			<div class="split-line"></div>
			<div class="top-title">
				<span>热门文章</span>
			</div>
			<ul class="article_list">
				<li v-for="item in articleList" :key="item.bId" :class="{'have-img':item.img}">
					<router-link :to="{path: '/article/'+item._id}">
						<a v-if="item.img" class="wrap-img" href="">
							<img :src="item.img" class="img-responsive">
						</a>
						<div class="content">
							<div class="author">
								<router-link class="blue-link avatar" :to="'/article/'+item._id">
									<img src="//upload.jianshu.io/users/upload_avatars/4155179/d68e4975c4cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="">
									<span class="name">{{item.author}}</span>
								</router-link>
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
		</div>
	</scroll>
</template>

<script>
import scroll from './common/scroll'
import getData from '../service/getData'

export default {
	name: 'artilce',
	components: {
		scroll
	},
	data() {
		return {
			categoryList: [],
			categoryTotal: 0,
			articleList: [],
			totalPage: 0,
			page: 1,
			pulldown: true,
			pullup: true
		}
	},
	created() {
		this.InitArticles();
		this.InitCategories();
	},
	methods: {
		async InitCategories() {
			try{
				let res = await getData.getCategories();
				let data = res.data;
				this.categoryList = data.categories;
				this.categoryTotal = data.total;
			}catch(err){

			}
		},
		refreshCategory() {
			let skip = Math.ceil(Math.random() * (this.categoryTotal / 7));
			getData.getCategories(skip).then(res=>{		//这里暂时这样
				let data = res.data;
				this.categoryTotal = data.total;
				this.categoryList = data.categories;
			})
		},
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
				this.$refs.articlewrapper.nomore();
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
				this.$refs.articlewrapper.pulldownEnd();
			})
		}
	},

}


</script>

<style>
.collection-groups {
	padding: 10px 15px;
}

.collection-groups .collection {
	display: inline-block;
	padding: 5px 8px;
	margin: 0 12px 12px 0;
	border: 1px solid #ea6f5a;
	border-radius: 4px;
	font-size: 14px;
	color: #ea6f5a;
}

.articlewrapper {
	position: absolute;
	top: 40px;
	bottom: 0;
	width: 100%;
	margin-bottom: 50px;
	/* overflow:hidden; */
}

.article_list {
	margin: 0;
	list-style: none;
	padding: 0 15px;
}

.article_list li {
	position: relative;
	width: 100%;
	border-bottom: 1px solid #f0f0f0;
	word-wrap: break-word;
}
.article_list li>a{
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