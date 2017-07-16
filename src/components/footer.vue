<template>
	<div class="footer">
		<ul class="footer-list">
			<li>
				<router-link to="/">
					<i class="fa fa-home"></i>
					<span class="title">首页</span>
				</router-link>
			</li>
			<li>
				<router-link to="/discovery">
					<i class="fa fa-compass"></i>
					<span class="title">发现</span>
				</router-link>
			</li>
	
			<li>
				<router-link to="/message">
					<i class="fa fa-bell-o"></i>
					<span class="title">消息</span>
				</router-link>
			</li>
			<li>
				<router-link to="/me">
					<i class="fa fa-user-o"></i>
					<span class="title">我的</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	border-top: 1px solid #ccc;
	z-index: 99;
	color: #666;
}

.footer .footer-list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;
}

.footer .footer-list li {
	flex: 1;
	font-size: 14px;
	color: #666;
	text-align: center;
}

.footer .footer-list li a {
	color: #666;
}

.footer .footer-list li a.active {
	color: #333;
}

.footer .footer-list li i {
	font-size: 22px;
}

.footer .title {
	display: block;
	margin-top: 3px;
	font-size: 12px;
}
</style>