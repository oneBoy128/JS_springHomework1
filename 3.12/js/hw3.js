Function.prototype.before=function(beforeFunc){
    let funcs = this;
    return function(){
        beforeFunc();
        funcs();
    }
}
Function.prototype.after = function(afterFunc){
    let funcs = this;
    return function(){
        funcs();
        afterFunc();
    }
}

let func = function(){
    console.log(2);
}

func = func.before((a=1) => {
    console.log(a)
}).after((b=3) => {
    console.log(b);
});

func();
