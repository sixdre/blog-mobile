<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from '@/components/footer'


export default {
  name: 'app',
  components:{
  	'v-footer':footer
  }
}
</script>

<style>

</style>
