<template>
	<div id="scroll-wrapper" ref="scrollwrapper">
        <div id="scroller">
            <div id="scroller-pullDown" v-if="pulldownMethod">
				<span id="down-icon" v-if="topStatus === 'loading'" class="icon-double-angle-down pull-down-icon"></span>
				<span id="pullDown-msg" class="pull-down-msg">{{topText}}</span>
			</div>
            <slot></slot>
            <div id="scroller-pullUp" v-if="pullupMethod">
            	<div v-if="!allLoaded">
            		<span id="up-icon" class="icon-double-angle-up pull-up-icon"></span>
					<span id="pullUp-msg" class="pull-up-msg">{{bottomText}}</span>
            	</div>
				<div v-else>
					<span class="pull-up-msg">没有更多数据了</span>
				</div>
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
	        default: '上拉加载'
	    },
	    bottomDropText: {
	        type: String,
	        default: '释放加载'
	    },
	    bottomLoadingText: {
	        type: String,
	        default: '加载中...'
	    },
        watchData: {
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
        pullupMethod: {
	        type: Function
	    },
	    pulldownMethod: {
	        type: Function
	    },
	    allLoaded: {		//数据全部加载完成
	        type: Boolean,
	        default: false
	    }
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
            if (this.pulldown && typeof this.pulldownMethod === 'function') {
	            this.handlePullDown();
	        }
	        if (this.pullup && typeof this.pullupMethod === 'function') {
	            this.handlePullUp();
	        }
	        this.listenScroll();
        },
        listenScroll(){				//监听滚动
          	this.scroll.on('scroll', (pos) => {
          		console.log(pos)
          		console.log(this.scroll.y)
          		console.log(this.scroll.maxScrollY)
//              if (pos.y > 50) {
//              	this.topStatus = 'drop';
//              	this.topText = this.topDropText;
//              }else{
//              	this.topStatus = 'pull';
//              	this.topText = this.topPullText;
//              }
            })
        },
        handlePullDown(){			//下拉

            this.scroll.on('touchend', (pos) => {	   // 下拉动作结束
                if (pos.y > 50) {
                	this.topStatus = 'loading';
                	this.pulldownMethod();
                }
            })
        },
        handlePullUp(){				//上拉
//      	this.scroll.on('scroll', (pos) => {
//              if (pos.y > 50) {
//              	this.topStatus = 'drop';
//              	this.topText = this.topDropText;
//              }else{
//              	this.topStatus = 'pull';
//              	this.topText = this.topPullText;
//              }
//          })
            this.scroll.on('scrollEnd', () => {
            	console.log(this.scroll.y)
                // 滚动到底部
                if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                	this.pullupMethod();
                }
            })
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
        watchData() {
            setTimeout(() => {
                this.scroll.refresh()
            }, 30)
        },
        topStatus(val) {
	        this.$emit('top-status-change', val);
	        switch (val) {
	          case 'pull':
	            this.topText = this.topPullText;
	            break;
	          case 'drop':
	            this.topText = this.topDropText;
	            break;
	          case 'loading':
	            this.topText = this.topLoadingText;
	            break;
	        }
      	},

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