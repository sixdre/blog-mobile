<template>
  <div id="app">
  
    <transition :name="transitionName" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="child-view"></router-view>
      </keep-alive>
    </transition>
  
    <transition :name="transitionName" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>
    </transition>
  
  </div>
</template>

<script>
export default{
  data(){
      return {
          transitionName:'slide-left' //绑定在组件上面的动效class
      }
  },
  watch: {
      '$route' (to, from){
        console.log(to.path)
        console.log(from.path)
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        console.log(this.transitionName)
      }
  }
}
</script>

<style>
#app {
  padding: 45px 0 50px 0;
}

/* .router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .2s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
} */
.child-view {
    position: absolute;
    left:0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    background-color: #f2f2f2;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
}
.slide-left-leave-active{
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
}
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
}
.slide-enter-active {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}
.slide-leave-active {
    -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>
