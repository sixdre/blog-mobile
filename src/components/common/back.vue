<template>
    <div id="back">
        <div class="headback">
            <span class="goback" @click="$router.go(-1)">
                <i class="fa fa-angle-left"></i>
            </span>
            <slot name="title"></slot>
            <section class="topnav">
                <i class="fa fa-bars" aria-hidden="true" @click="showTopNav=!showTopNav"></i>
                <transition name="fade">
                    <ul v-show="showTopNav">
                        <li>
                            <i class="fa fa-home"></i>收藏</li>
                        <li>
                            <i class="fa fa-home"></i>收藏</li>
                        <li>
                            <i class="fa fa-home"></i>收藏</li>
                        <li>
                            <i class="fa fa-home"></i>收藏</li>
                    </ul>
                </transition>
    
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showTopNav: false
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to{
    opacity: 0
}

#back {
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
    box-shadow: 0 1px 1px #ddd;
}

#back .goback {
    position: absolute;
    left: 15px;
    height: 100%;
    line-height: 45px;
    color: #666;
    font-size: 32px;
}

.topnav {
    position: absolute;
    right: 15px;
    line-height: 45px;
    font-size: 26px;
    color: #666;
}

.topnav ul {
    position: absolute;
    width: 150px;
    top: 47px;
    right: 0;
    background-color: #fff;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
}


/* .topnav ul:before{
   position:absolute;
   top: -10px;
   right: 0;
   border-left:9px solid transparent;
   border-right:9px solid transparent;
   border-bottom:9px solid #fff;
   content:" ";
   display:block;
   width:0;
   height:0;
}  */

.topnav ul li {
    display: flex;
    align-items: center;
    line-height: 45px;
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
}

.topnav ul li:last-child {
    border-bottom: 0;
}

.topnav ul li i {
    margin-right: 10px;
    font-size: 20px;
    color: rgb(233, 104, 107);
}
</style>