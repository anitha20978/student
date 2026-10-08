let student = {
    name:"anitha",
    greet:function(){
        console.log("Hello" + this.name);
    }
};
student.greet();