let message = " hello beta ";

var app = new Vue({
    el: "#app",
    data:{
        message:"hello beta ",
        visitor_name : "",
        visitors : []
    },
    methods :{
        sayHi: function(){
            this.message = "hello!! ";
            this.visitors.push(this.visitor_name);
            this.visitor_name ="";
        },
    computed :{
        count : function(){
            return this.visitors.length;
        }
    }
    }
}
)