<template>
    <div>
        <loading :show="showLoading"></loading>
        <back :rightNav="true"></back>
        <div class="article">
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
        </div>
        <alert-tip :show='false'></alert-tip>
    </div>
</template>

<script>
import back from '@/components/common/back'
import alertTip from  '@/components/common/tips'
import loading from '@/components/common/loading'
import getData from '@/service/getData'

export default{
    components:{
        back,
        'alert-tip':alertTip,
        loading
	},
    data(){
        return {
            showLoading:true,
            articleId:this.$route.params.articleId,
            article:{}
        }
    },
    created(){
       this.updatePv(this.articleId);
       this.getArticle(this.articleId);
    },
    mounted(){
        this.$nextTick(()=>{
             this.showLoading = false;
        })
    },
    methods:{
        getArticle(id){
            getData.getArticleDetail(id).then((res)=>{
                let data = res.data;
                if(data.code == 1){
                    this.article = data.article;
                }
            })
        },
        updatePv(id){
            getData.updateArticlePv(id);
        }
    }
}
</script>

<style>
 .article{
    padding-top: 40px;
} 
.article-info{
    margin-bottom: 20px;
    font-size: 13px;
    color: #b1b1b1;
}

.article-info .avatar img, .article-info .name {
    vertical-align: middle;
}

</style>