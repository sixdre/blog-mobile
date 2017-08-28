<template>
  <div id="app" :transition-direction="transitionName">
    <transition name="page">
      <keep-alive>
        <router-view  v-if="$route.meta.keepAlive" class="router-view"></router-view>
      </keep-alive>
    </transition>
     <transition name="page">
        <router-view  v-if="!$route.meta.keepAlive" class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
	data() {
    return {
      transitionName: 'forward'
    }
  },
  beforeRouteUpdate(to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'back'
    } else {
      this.transitionName = 'forward'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style>
	
.router-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
  background: #fff;
}

.page {
  height: 100%;
  -webkit-transition: visibility .38s, -webkit-transform .38s ease-in-out;
  transition: visibility .38s, -webkit-transform .38s ease-in-out;
  transition: transform .38s ease-in-out, visibility .38s;
  transition: transform .38s ease-in-out, visibility .38s, -webkit-transform .38s ease-in-out;
}	
.page .page_content {
  box-sizing: border-box;
  height: 100%;
  padding-top: 55px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}


	
.page-enter-active,
.page-leave-active{
  transition-duration: .4s;
  transition-timing-function: cubic-bezier(.36, .66, .04, 1);
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
}


[transition-direction="forward"] .page-enter {
  transform: translate3d(100%, 0, 0);
  /* opacity: 1; */
  /* z-index: 2; */
}

[transition-direction="forward"] .page-enter-active {
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
}

[transition-direction="forward"] .page-enter-to {
  transform: translate3d(0, 0, 0);
  /* opacity: 1; */
  /* z-index: 2; */
}

[transition-direction="forward"] .page-leave {
  transform: translate3d(0, 0, 0);
  /* opacity: 0.8; */
  /* z-index: 1; */
}

[transition-direction="forward"] .page-leave-to {
  transform: translate3d(-33%, 0, 0);
  /* opacity: 0; */
  /* z-index: 1; */
}


[transition-direction="back"] .page-enter {
  transform: translate3d(-33%, 0, 0);
  /* opacity: 0.8; */
  /* z-index: 1; */
}

[transition-direction="back"] .page-enter-to {
  transform: translate3d(0, 0, 0);
  /* opacity: 1; */
  /* z-index: 1; */
}

[transition-direction="back"] .page-leave {
  transform: translate3d(0, 0, 0);
  /* opacity: 1; */
  /* z-index: 2; */
}

[transition-direction="back"] .page-leave-active {
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
}

[transition-direction="back"] .page-leave-to {
  transform: translate3d(100%, 0, 0);
  /* opacity: 1; */
  /* z-index: 2; */
}

	
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all .3s;
}

.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(100%, 0, 0);
}	
	
	
	
	
	
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
