<template>
	<div>
		<div class="top-title">
			<span>热门专题</span>
			<span class="refesh">
				<i class="fa fa-refresh"></i>
				换一批
			</span>
		</div>
		<div class="collection-groups">
			<a v-for="item in dataList" class="collection">{{item.name}}</a>
		</div>
	</div>
</template>

<script>
	
export default{
	props:{
	  	dataList:{
	  		type:Array
	  	}
	},
//	data(){
//		return {
//			categoryList:['短篇小说','连载小说','故事']
//		}
//	}
}

	
	
</script>

<style>

.collection-groups{
	padding: 10px 15px;
}
.collection-groups .collection{
	display: inline-block;
	padding: 5px 8px;
    margin: 0 12px 12px 0;
    border: 1px solid #ea6f5a;
    border-radius: 4px;
    font-size: 14px;
    color: #ea6f5a;
}
</style>