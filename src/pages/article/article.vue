<template>
    <div class="page">
        <loading :show="showLoading"></loading>
        <head-top fixed>
            <span slot="left" @click="$router.go(-1)">
                <i class="fa fa-angle-left"></i>
            </span>
            <span slot="title">{{article.title}}</span>
        </head-top>
        <div class="page_content">	
            <div class="container">
                <h1 class="title">{{article.title}}</h1>
                <div class="article-info">
                    <router-link :to='"/"' class="avatar">
                        <img src="//upload.jianshu.io/users/upload_avatars/4155179/d68e4975c4cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="">
                        <div class="name">{{article.author}}</div>
                    </router-link>
                    <span class="label">作者</span>
                </div>
                <div v-html="article.tagcontent"></div>
            </div>
        	
        	<div class="comment container">
	            <ul class="comment-list">
	                <li class="comment-item clearfix" v-for="(item,index) in commentList" :key="index">
	                    <a href="" class="avatar">
	                        <img src="//upload.jianshu.io/users/upload_avatars/4155179/d68e4975c4cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="">
	                    </a>
	                    <div class="comment-main">
	                        <div class="comment-header">
	                            <span class="username">admin</span>
	                            <span class="fr"><i class="fa fa-thumbs-o-up"></i> {{item.likeNum}}</span>
	                        </div>
	                        <div class="comment-content">
	                            {{item.content}}
	                        </div>
	                        <div class="comment-footer">
	                            <span class="comment-time">{{item.create_time | fromNow}}</span>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>
        </div>
        
       
       
        <div class="reply">
            <div class="reply-input">
                <input type="text" readonly placeholder="写评论">
            </div>
            <div class="showTool">
                <span>
                    <i class="fa fa-comment-o" style="position:relative;">
                         <i class="nums" v-if="article.nums&&article.nums.cmtNum">{{article.nums.cmtNum}}</i>
                    </i>
                </span>
                <span>
                    <i class="fa fa-star-o"></i>
                </span>
                <span>
                    <i class="fa fa-share"></i>
                </span>
            </div>
        </div>
        <alert-tip :show='false'></alert-tip>
    </div>
</template>

<script>
import headTop from '@/components/header/header'
import alertTip from  '@/components/common/tips'
import loading from '@/components/common/loading'
import apiService from '@/service/api'

export default{
    components:{
        headTop,
        'alert-tip':alertTip,
        loading
	},
    data(){
        return {
            showLoading:true,
            articleId:this.$route.params.articleId,
            article:{},
            commentList:[]
        }
    },
    created(){
       let id =this.articleId;
       this.updatePv(id);
       this.getArticle(id).then(()=>{
       	    this.$nextTick(()=>{
	            this.showLoading = false;
	        })
       })
       this.getComments(id);
    },
    methods:{
        async getArticle(id){
    		let res = await apiService.getArticleDetail(id);
    		let data = res.data;
    		if(data.code == 1){
                this.article = data.article;
            }
        },
        async getComments(id){
        	let res = await apiService.getComments(id);
        	let data = res.data;
            if(res.status == 200){
                this.commentList=data.comments; 
            }
        },
        updatePv(id){
            apiService.updateArticlePv(id);
        }
    }
}
</script>

<style scoped>
.reply{
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
    height: 40px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    padding: 5px 0;

}
.reply .reply-input{
    flex: 1;
    padding:0 15px;
}
.reply .reply-input input{
    width: 100%;
    border: 0;
    height: 30px;
    border-radius: 15px;
    background-color: #ddd;
    padding: 0 15px;
    font-size: 13px;
}
.reply .showTool{
    display: flex;
    align-items: center;
    flex: 1;
}
.showTool span{
    position: relative;
    flex: 1;
    text-align: center;
    font-size: 20px;
}
.showTool span .nums{
    position: absolute;
    top: -3px;
    right: -3px;
    padding: 0 3px;
    color: #fff;
    font-size: 10px;
    background-color: #f00;
    border-radius: 6px;
    
}

.article{
    padding-top: 55px;
    /*height: calc(100% - 55px);*/
} 
.article-info{
    margin-bottom: 20px;
    font-size: 13px;
    color: #b1b1b1;
}

.article-info .avatar img, .article-info .name {
    vertical-align: middle;
}

.comment{
    margin-top: 30px;
}
.comment-list .comment-item{
    margin-bottom: 25px;
}
.comment-list .avatar{
    float: left;
    width: 35px;
    height: 35px;
    background-color: #ddd;
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
}
.comment-list .avatar img{
    display: block;
    width:100%;
    height:100%;
}
.comment-list .comment-header .username{
    font-size: 13px;
    color: #333;
}
.comment-list  .comment-main{
    padding-left: 45px;
}
.comment-list  .comment-main .comment-content{
    margin: 8px 0;
    font-size: 15px;
}
.comment-list  .comment-main .comment-footer{
    font-size: 12px;
}
</style>