<template>
    <div id="banner">
        <div class="swiper-container" v-if="banners.length">
            <div class="swiper-wrapper">
                <div class="swiper-slide food_types_container" v-for="(item, index) in banners" :key="index">
                    <router-link :to="{path: '/'}" class="link_to_food">
                        <figure>
                            <img :src="item.url">
                            <figcaption>{{item.title}}</figcaption>
                        </figure>
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            banners:[{
                url:'',
                title:'qsqs'
            },{
                url:'',
                title:'qsqs'
            },{
                url:'',
                title:'qsqs'
            }]
        }
    },
    mounted(){
        
    }

}
</script>

<style scoped>

</style>