<template>
	<div ref="wrapper">
        <slot></slot>
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
            console.log(this.$refs.wrapper)
            if (this.pullup) {          //上拉加载
                this.scroll.on('scrollEnd', () => {
                    // 滚动到底部
                    if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                        this.$emit('pullup')
                    }
                })
            }

            if (this.pulldown) {        //下拉刷新
                this.scroll.on('touchend', (pos) => {
                    // 下拉动作
                    if (pos.y > 50) {
                        console.log(this)
                        this.$emit('pulldown')
                    }
                })
            }
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

</style>