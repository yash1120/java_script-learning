let message = " hello beta ";

var app = new Vue({
    el: "#app",
    data:{
        message:"hello beta ",
        count: 0
    },
    methods :{
        sayHi: function(){
            this.message = "tera baap hoga beta "
            this.count = this.count+1
        }
    }
}
)