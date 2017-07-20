<template>
	<div>
		<div class="top-title">
			<span>热门专题</span>
			<span class="refesh" @click="refresh()">
				<i class="fa fa-refresh"></i>
				换一批
			</span>
		</div>
		<div class="collection-groups">
			<a v-for="(item,index) in categoryList" :key="index" class="collection">{{item.name}}</a>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			categoryList: [],
			categoryTotal: 0
		}
	},
	created() {
		this.getCategories(0, 7);
	},
	methods: {
		async getCategories(skip, limit) {
			axios.get('/api/categories', { params: { skip: skip, limit: limit } }).then((res) => {
				let data = res.data;
				if (data.code == 1) {
					this.categoryList = data.categories;
					this.categoryTotal = data.total;
				}
			});
		},
		refresh() {
			let skip = Math.ceil(Math.random() * (this.categoryTotal / 7));
			this.getCategories(skip, 7)
		}
	}
}



</script>

<style>
.collection-groups {
	padding: 10px 15px;
}

.collection-groups .collection {
	display: inline-block;
	padding: 5px 8px;
	margin: 0 12px 12px 0;
	border: 1px solid #ea6f5a;
	border-radius: 4px;
	font-size: 14px;
	color: #ea6f5a;
}
</style>