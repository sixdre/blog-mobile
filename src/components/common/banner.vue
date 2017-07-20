<template>
    <div id="banner">
        <div class="swiper-container" v-if="banners.length">
            <div class="swiper-wrapper">
                <div class="swiper-slide food_types_container" v-for="(item, index) in banners" :key="index">
                    <router-link :to="{path: '/'}" class="link_to_food">
                        <figure>
                            <img :src="item.url" width="100%" height="180">
                            <!-- <figcaption>{{item.title}}</figcaption> -->
                        </figure>
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
export default {
    data(){
        return {
            banners:[{
                url:'http://osf6cl53d.bkt.clouddn.com/cover-1499936159065.jpg',
                title:'qsqs'
            },{
                url:'http://osf6cl53d.bkt.clouddn.com/cover-1499936159065.jpg',
                title:'qsqs'
            },{
                url:'http://osf6cl53d.bkt.clouddn.com/cover-1499936159065.jpg',
                title:'qsqs'
            }]
        }
    },
    mounted(){
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            loop: true
        });
    }

}
</script>

<style scoped>

</style>