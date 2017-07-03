<template>
	<div>
		<div class="top-title">
			<span>热门文章</span>
		</div>
		<div class="article_list" ref="article_wrapper" style="height: 200px;position: relative;">
			<ul class="content">
				<li v-for="item in dataList" :class="{'have-img':item.img}">
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
							<a class="tag">{{item.category.name}}</a>
							<span>阅读 {{item.pv}}</span>
							<span>评论 {{item.nums.cmtNum}}</span>
							<span>喜欢 {{item.likes.length}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import BSscroll from 'better-scroll'

export default{
//	props:{
//	  	dataList:{
//	  		type:Array
//	  	}
//	},
	data(){
		return{
			dataList:[]
		}
	},
	created() {
		this.getData().then(()=>{
			this.$nextTick(() => {
				console.log(document.getElementsByClassName('article_list')[0])
			    this.initScroll();
			})
		
		})
	},
	methods:{
		initScroll() {
			new BSscroll(this.$refs.article_wrapper,{
				click:true
			})
		},
		async getData(){		//获取数据
			axios.get('/api/articles',{params:{limit:20}}).then((res) => {
			 	let data=res.data;
			 	if(data.code==1){
			 		this.dataList=res.data.articles;
			 	}
		    });
		},
	}
}

	
</script>

<style>
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
	padding: 20px 0;
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
    /*margin: -7px 0 4px;*/
    display: inherit;
    font-size: 18px;
    font-weight: 600;
    padding: 13px 0;
    /*line-height: 2.5;*/
    color: #333;
}
.article_list .author .name {
    display: inline-block;
    vertical-align: middle;
}
.article_list .author a {
    color: #333;
}
.article_list .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
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
.article_list .art_category {
    padding: 2px 6px;
    color: #ea6f5a!important;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 3px;
}
</style>