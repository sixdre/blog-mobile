<template>
    <div id="loading" v-if="show">
        <div class="loading-image"></div>
    </div>
</template>

<script>
export default {
    props:{
        show:false
    }

}
</script>

<style scoped>
#loading{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 999999;
}
#loading .loading-image{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -16px;
    margin-left: -16px;
    width: 32px;
    height: 32px;
     background: url(../../../static/images/loading.gif) no-repeat center; 
}
</style>
