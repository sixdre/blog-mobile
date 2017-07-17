<template>
    <div class="article">
        <back></back>
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
</template>

<script>
import back from '@/components/common/back'
import axios from 'axios'

export default{
    components:{
		back
	},
    data(){
        return {
            articleId:this.$route.params.articleId,
            article:{}
        }
    },
    created(){
       this.getArticle(this.articleId);
    },
    methods:{
        getArticle(id){
            axios.get('/api/articles/'+id).then((res)=>{
                let data = res.data;
                if(data.code == 1){
                    this.article = data.article;
                }
            })
        },
    }
}
</script>

<style>
/* .article{
    position: absolute;
    top: 45px;
} */
.article-info{
    margin-bottom: 20px;
    font-size: 13px;
    color: #b1b1b1;
}

.article-info .avatar img, .article-info .name {
    vertical-align: middle;
}

</style>