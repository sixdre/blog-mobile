<template>
    <div class="header">
        <input type="text" class="search_input" placeholder="搜索文章内容或作者">
    </div>
</template>

<script>

export default {

}

</script>

<style scoped="scoped">
.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
}

.header .search_input {
    width: 100%;
    height: 30px;
    margin: 0;
    border-radius: 20px;
    outline: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #eee;
    background-image: none;
    border: 0;
    text-align: center;
    font-size: 14px;
}

.header .search_input::-webkit-input-placeholder {
    color: #aaa;
}
</style>