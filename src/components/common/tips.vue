<template>
    <div class="alert_container" ref="alert" v-if="showAs">
        <section>
            <div class="tip_icon">
                <span></span>
            </div>
            <div class="tip_text">{{text}}</div>
            <div class="confirm"  @click="close">确定</div>
        </section>
    </div>
</template>

<script>
export default {
    props:{
        show:{
            type: Boolean,
            default:false
        },
        text: {
            type: String,
            default:'很棒!'
        },
        backdrop: {
            type: Boolean,
            default:false
        },
        opacity: {
            type: Number,
            default:0.5
        }
    },
    data() {
        return {
          showAs: false
        }
    },
    created(){
        if(this.show){
            this.showAs=this.show
        }
    },
    mounted() {
        this.$nextTick(() => {
            if(this.backdrop){
                let opacity = this.opacity;
                this.$refs.alert.style.backgroundColor='rgba(0,0,0,'+opacity+')';
            }
        })
    },
    methods:{
        close(){
            this.beforeClose();
            this.showAs = false;
            this.$emit('close');
        },
        beforeClose(){
            this.$emit('beforeClose');
        }
    },
   
}
</script>

<style scoped>
@keyframes tipMove{
    0%   { transform: scale(1) }
    35%  { transform: scale(.8) }
    70%  { transform: scale(1.1) }
    100% { transform: scale(1) }
}
.alert_container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
}
.alert_container>section{
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    animation: tipMove .4s ; 
    background-color: rgba(255,255,255,1);
    border: 1px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius:5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
}
.alert_container .tip_text{
    font-size: 14px;
    color: #333;
    line-height: 1.7;
    text-align: center;
    margin-top: 15px;
    padding: 0 10px;
}
.alert_container .confirm{
    font-size:16px;
    color:#fff;
    font-weight: bold;
    margin-top: .8rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 35px;
    border: 1px;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
}
</style>