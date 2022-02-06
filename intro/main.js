let app = new Vue({
    el:"#app",
    data:{
        message:"hello",
        msg2:"dummy"
    },
    methods:{
        update_msg(){
            this.message="yash goyal"
        }
    },
    computed:{
        myFontSize:function(){
            return`${this.message.length+10}px`
        }
    },
    watch:{
        message:function(nmsg,omsg){
            this.msg2=`New:${nmsg} Old:${omsg}`
        }
    }
})