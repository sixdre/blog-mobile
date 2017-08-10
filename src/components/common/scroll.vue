<template>
	<div id="scroll-wrapper" ref="scrollwrapper">
        <div id="scroller">
            <div id="scroller-pullDown">
				<span id="down-icon" class="icon-double-angle-down pull-down-icon"></span>
				<span id="pullDown-msg" class="pull-down-msg">{{topText}}</span>
			</div>
            <slot></slot>
            <div id="scroller-pullUp">
				<span id="up-icon" class="icon-double-angle-up pull-up-icon"></span>
				<span id="pullUp-msg" class="pull-up-msg">{{bottomText}}</span>
			</div>
        </div>
	</div>
</template>

<script>
import BSscroll from 'better-scroll'

export default{
    props: {            //配置参数
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        scrollX: {
            type: Boolean,
            default: false
        },
        topPullText: {
	        type: String,
	        default: '下拉刷新'
	    },
	    topDropText: {
	        type: String,
	        default: '释放更新'
	    },
	    topLoadingText: {
	        type: String,
	        default: '加载中...'
	    },
	    bottomPullText: {
	        type: String,
	        default: '上拉刷新'
	    },
	    bottomDropText: {
	        type: String,
	        default: '释放更新'
	    },
	    bottomLoadingText: {
	        type: String,
	        default: '加载中...'
	    },
        dataList: {
            type: Array,
            default(){
            	return []
            }
        },
        pullup: {       //上拉
            type: Boolean,
            default: false
        },
        pulldown: {		//下拉
            type: Boolean,
            default: false
        },
    },
    data(){
    	return {
    		topText:'',
    		bottomText: '',
    		topStatus: '',
        	bottomStatus: ''
    	}
    },
    mounted () {

    },
    methods:{
        initScroll(){
            if (!this.$refs.scrollwrapper) {
                return
            }
            this.scroll = new BSscroll(this.$refs.scrollwrapper,{
                probeType: this.probeType,
                click: this.click
            })
            this.onpullUp();
            this.onpullDown();
        },
        onpullDown(){
        	if (this.pulldown) {        //下拉刷新
                this.scroll.on('scroll', (pos) => {
                    // 下拉动作
                    if (pos.y > 50) {
                        document.getElementById('pullDown-msg').innerHTML="松开加载";
                    }
                })
                this.scroll.on('touchend', (pos) => {
                    // 下拉动作
                    if (pos.y > 50) {
                        document.getElementById('pullDown-msg').innerHTML="加载中";
                        this.$emit('pulldown');
                    }
                })
            }
        },
        onpullUp(){
        	 if (this.pullup) {          //上拉加载
                this.scroll.on('scrollEnd', () => {
                    // 滚动到底部
                    if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                        this.$emit('pullup')
                    }
                })
            }
        },
        pulldownEnd(){
            document.getElementById('pullDown-msg').innerHTML="下拉刷新";
            this.scroll.refresh();
        },
        nomore(){
            document.getElementById('pullUp-msg').innerHTML="没有更多数据";
            document.getElementById('pullUp-msg').style.display='inline';
            document.getElementById('up-icon').style.display='none';
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        }
    },
    watch: {
        // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
        dataList() {
            setTimeout(() => {
                this.scroll.refresh()
            }, 30)
        }
    }
}

	
</script>

<style>
#scroll-wrapper{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    background: #fff;
    overflow: hidden;
}
#scroller-pullDown, #scroller-pullUp {
    background: #fff;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #666;
    text-align: center;
    position: absolute;
    left: 0px;
    width: 100%;
}
#scroller-pullDown {
    top: -50px;
}
#scroller-pullUp {
    bottom: -40px;
}
.pull-down-icon ,.pull-up-icon{
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(../../../static/images/loading.gif) no-repeat center;
    background-size: contain;
    vertical-align: middle;
}
#pullUp-msg{
    display: none;
}
</style>