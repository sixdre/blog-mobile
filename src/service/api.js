import axios from 'axios'

export default {
    /**
     * 获取文章列表
     */
    getArticles(page = 1, limit = 5) {
        return axios.get('/api/articles', { params: { page, limit } });
    },
    /**
     * 获取文章详情
     */
    getArticleDetail(id) {
        return axios.get('/api/articles/' + id);
    },
    /**
     * 更新文章浏览量
     */
    updateArticlePv(id) {
        return axios.put('/api/articles/' + id + '/pv');
    },
    /**
     * 获取分类列表
     */
    getCategories(skip = 0, limit = 7) {
        return axios.get('/api/categories', { params: { skip: skip, limit: limit } });
    },
    /*
     * 获取文章评论
     * */
    getComments(id) {
        return axios.get('/api/comments/article/' + id );

    }
}