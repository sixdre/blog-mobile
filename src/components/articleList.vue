<template>
	<div>
		<div class="top-title">
			<span>热门文章</span>
		</div>
		<div class="article_list">
			<ul>
				<li v-for="item in dataList" :class="{'have-img':item.img}">
					<a v-if="item.img" class="wrap-img" href="">
				      <img :src="item.img" class="img-responsive">
				    </a>
				    <div class="content">
						<div class="author">
							<div class="name">
								<a class="blue-link" href="javascript:;">{{item.author}}</a>
								<span class="time">{{item.time}}</span>
							</div>
						</div>
						<a class="title" href="">{{item.title}}</a>
			
						<div class="meta">
							<a class="fa fa-eye"> {{item.pv}}</a> 
							<a class="fa fa-thumbs-o-up"> {{item.points}}</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	props:{
	  	dataList:{
	  		type:Array
	  	}
	},
//	data(){
//		return {
//			articleList:[{
//				title:'这是文章标题',
//				author:'张三',
//				img:'//upload-images.jianshu.io/upload_images/5912302-4df2bf6c946340f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/246/h/246',
//				time:'前天',
//				pv:20,
//				points:30,
//			},{
//				title:'这是文章标题',
//				author:'张三',
//				time:'前天',
//				pv:20,
//				points:30,
//			},{
//				title:'这是文章标题',
//				author:'张三',
//				time:'前天',
//				pv:20,
//				points:30,
//			},{
//				title:'这是文章标题',
//				author:'张三',
//				time:'前天',
//				pv:20,
//				points:30,
//			},{
//				title:'这是文章标题',
//				author:'张三',
//				time:'前天',
//				pv:20,
//				points:30,
//			}]
//		}
//	}
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
	padding: 32px 0;
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
    margin-bottom: 14px;
    font-size: 13px;
}
.article_list .author .avatar, .note-list .author .name {
    display: inline-block;
    vertical-align: middle;
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
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
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
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
}
.article_list .meta a{
    color: #808080;
    margin-right: 8px;
}
.article_list .art_category {
    padding: 2px 6px;
    color: #ea6f5a!important;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 3px;
}
</style>