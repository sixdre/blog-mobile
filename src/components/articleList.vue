<template>
	<!-- <div> -->
	<scroll class="articlewrapper"  :dataList="articleList" :pulldown="pulldown" 
			:pullup="pullup" @pulldown="refresh"
			@pullup="loadMore"
			>
		<div class="scroll">
			<div class="top-title">
				<span>热门专题</span>
				<span class="refesh" @click="refreshCategory()">
					<i class="fa fa-refresh"></i>
					换一批
				</span>
			</div>
			<div class="collection-groups">
				<a v-for="item in categoryList" :key="item" class="collection">{{item.name}}</a>
			</div>
			<div class="split-line"></div>  
			<div class="top-title">
				<span>热门文章</span>
			</div>
			<ul class="article_list">
				<li v-for="item in articleList" :key="item" :class="{'have-img':item.img}">
					<a v-if="item.img" class="wrap-img" href="">
					<img :src="item.img" class="img-responsive">
					</a>
					<div class="content">
						<div class="author">
							<div class="name">
								<a class="blue-link" href="javascript:;">{{item.author}}</a>
								<span class="time">{{item.create_time | fromNow}}</span>
							</div>
						</div>
						<a class="title" href="">{{item.title}}</a>
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
				</li>
			</ul>
		</div>
	</scroll>
<!-- </div> -->
</template>

<script>
import axios from 'axios'
import scroll from './common/scroll'

export default{
	name:'artilce',
    components:{
		scroll
	},
	data(){
		return{
			categoryList:[],
			categoryTotal:0,
			articleList:[],
			totalPage:0,
			page:1,
            pulldown:true,
            pullup:true
		}
	},
	created() {
        this.getData().then((data)=> {
			this.articleList = data.articles;
		})
		this.getCategories(0,7);
	},
	methods:{
		async getCategories(skip,limit){
			axios.get('/api/categories',{params:{skip:skip,limit:limit}}).then((res) => {
			 	let data=res.data;
			 	if(data.code==1){
					 this.categoryList = data.categories;
					 this.categoryTotal = data.total;
			 	}
		    });
		},
		refreshCategory(){
			let skip = Math.ceil(Math.random()*(this.categoryTotal/7));
			this.getCategories(skip,7)
		},
		async getData(page=1,limit=5){		//获取数据
			try{
				let res = await axios.get('/api/articles',{params:{currentPage:page,limit:limit}});
				let data = res.data;
				this.totalPage = data.totalPage;
				if(data.code == 1){
					return data;
				}
			}catch(err){

			}
		},
        loadMore(){
            this.page++;
			if(this.page>this.totalPage){
				return ;
			}
            this.getData(this.page).then((data)=>{
				if(!data){
					return ;
				}
				data.articles.map((value)=>{
					this.articleList.push(value);
				})
			})
        },
		refresh(){
			this.getData().then((data)=> {
				this.page = 1;
				this.articleList = data.articles;
				console.log(this.articleList)
			})
		}
	},

}

	
</script>

<style>
.collection-groups{
	padding: 10px 15px;
}
.collection-groups .collection{
	display: inline-block;
	padding: 5px 8px;
    margin: 0 12px 12px 0;
    border: 1px solid #ea6f5a;
    border-radius: 4px;
    font-size: 14px;
    color: #ea6f5a;
}
.articlewrapper{
	
	position: absolute;
	top: 40px;
	bottom:0;
	/* overflow:hidden; */
	margin-bottom:50px;
}
.article_list{
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
.article_list .content{
	padding:15px 0;
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
.article_list .author .avatar, .note-list .author .name {
    display: inline-block;
    vertical-align: middle;
}
.article_list .author .time{
	font-size: 10px;
	color: #999;
}
.article_list .author .avatar {
    margin: 0 5px 0 0;
}
.article_list .author a {
    color: #333;
}
.avatar {
    width: 32px;
    height: 32px;
    display: block;
    cursor: pointer;
}
.article_list .title {
    display: inherit;
    font-size:16px;
    padding: 10px 0;
    line-height: 1.5;
    color: #333;
}
.article_list .author .name {
    display: inline-block;
    vertical-align: middle;
}
.article_list .author a {
    color: #666;
}
.article_list .meta {
	display: flex;
	align-items: center;
    font-size: 12px;
    font-weight: 400;
}
.article_list .meta a,.article_list .meta span{
    color: #888;
    margin-right:5px;
}
.article_list .meta .tag{
	padding: 0px 5px;
	color: #ea6f5a;
	text-align: center;
	border: 1px solid #ea6f5a;
	border-radius: 3px;
	line-height: 1.5;
}
.article_list .meta .tag span{
	color: #ea6f5a;
}
.article_list .art_category {
    padding: 2px 6px;
    color: #ea6f5a!important;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 3px;
}
</style>