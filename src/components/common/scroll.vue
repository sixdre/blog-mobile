<template>
	<div id="scroll-wrapper" ref="wrapper">
        <div id="scroller">
            <div id="scroller-pullDown">
				<span id="down-icon" class="icon-double-angle-down pull-down-icon"></span>
				<span id="pullDown-msg" class="pull-down-msg">下拉刷新</span>
			</div>
            <slot></slot>
            <div id="scroller-pullUp">
				<span id="up-icon" class="icon-double-angle-up pull-up-icon"></span>
				<span id="pullUp-msg" class="pull-up-msg">上拉加载</span>
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
        dataList: {
            type: Array,
            default: null
        },
        pullup: {
            type: Boolean,
            default: false
        },
        pulldown: {
            type: Boolean,
            default: false
        },
    },
    mounted() {
        // 保证在DOM渲染完毕后初始化better-scroll
        // this.$nextTick(() => {
        //     this.initScroll();
        // })
        setTimeout(() => {
           this.initScroll();
        }, 20)
    },
    methods:{
        initScroll(){
            if (!this.$refs.wrapper) {
                return
            }
            this.scroll = new BSscroll(this.$refs.wrapper,{
                probeType: this.probeType,
                click: this.click
			})
            if (this.pullup) {          //上拉加载
                this.scroll.on('scrollEnd', () => {
                    // 滚动到底部
                    if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                        this.$emit('pullup')
                    }
                })
            }

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
        pulldownEnd(){
            document.getElementById('pullDown-msg').innerHTML="下拉刷新";
            this.scroll.refresh();
        },
        nomore(){
            document.getElementById('pullUp-msg').innerHTML="没有更多数据";
            document.getElementById('pullUp-msg').style.display='inline';
            document.getElementById('up-icon').style.display='none';
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