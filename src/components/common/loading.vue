<template>
    <div id="loading">
        <div class="loading-image"></div>
    </div>
</template>

<script>
export default {
  

}
</script>

<style scoped>
#loading{
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
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
