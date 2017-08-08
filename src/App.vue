<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view ></router-view>
      </keep-alive>
    </transition>
    
    <!-- <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view  v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition> -->
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .2s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
.pop-out-enter-active,
.pop-out-leave-active,
.pop-in-enter-active,
.pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
