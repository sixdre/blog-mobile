<template>
    <header class="header" ref="header">
        <div class="header-button is-left">
            <slot v-if="$slots.left" name="left"></slot>
            <span v-else  @click="$router.go(-1)">
                <i class="fa fa-angle-left"></i>
            </span> 
        </div>
        <h1 class="header-title">
            <slot name="title"></slot>
        </h1>
        <div class="header-button is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
export default {
    props:{
        fixed:{
            type:Boolean,
            default:false
        },
    },
    mounted(){
        if(this.background){
            this.$refs.header.style.background = this.background;
        }
        if(this.fixed){
            this.$refs.header.className+=' fixed';
        }
    }

}
</script>

<style scoped>
.header{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: rgb(55, 54, 58);
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 50px;
    line-height: 1;
    padding: 0 10px;
}
.header.fixed{
    position: absolute;
    top:0;
    left:0;
    right:0;
    text-align: center;
    white-space: nowrap;
    z-index: 2;
}
.header-button {
    -webkit-box-flex: .5;
    -ms-flex: .5;
    flex: .5;
}
.header-button.is-left {
    text-align: left;
    height:50px;
    line-height:50px;
    font-size:30px;
    color:#fff;
}
.header-button.is-left>a,.header-button.is-left>span{
    display:block;
    width:50%;
    color:#fff;
    margin-left:-10px;
    padding-left:10px;
}

.header-button.is-right {
    text-align: right;

}
.header-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size:16px;
    text-align:center;
}



</style>