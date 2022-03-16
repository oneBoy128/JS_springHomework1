function sum(a, b, c) {
    return a + b + c;
    }

    function curry(func){
        return function curried(...args){
            if(args.length >= func.length){
                return func.apply(this,args)
            }
            else{
                return function(...argments){
                    return curried.apply(this,argments.concat(args));
                }
            }
        }
    }
let curriedSum = curry(sum);

alert( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
alert( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化
alert( curriedSum(1)(2)(3) ); // 6，全柯里化
