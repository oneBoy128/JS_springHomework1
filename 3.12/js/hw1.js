let div = document.querySelector('div');
function toValue(){
    setTimeout(() => {
        div.innerText = no.value;
    }, 50);
}
no.oninput = ()=>{
    toValue(no.value);
}

function coDecreation(func,ms){/* 防抖函数装修器 */
    let timeout;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(()=>func.apply(this,arguments), ms);
    }
}

function toValue2(str){
    div.innerText = str;
}
toValue2 = coDecreation(toValue2,1000);
yes_dou.oninput = ()=>{
    toValue2(yes_dou.value);
}

function toValue3(str){
    div.innerText = str;
}
function Decreation(func,ms){/*节流函数装修器*/
    let throted = false,
        saveThis,
        saveArg;
    function wrap(){
        if(throted){
            saveThis = this;
            saveArg = arguments;
            return;
        }
        throted = true;
        func.apply(this,arguments);

        setTimeout(() => {
            throted = false;
            if(saveArg){
                wrap.apply(saveThis,saveArg);
                saveThis = saveArg = null;
            }
        }, ms);
    }
    return wrap;
}
toValue3 = Decreation(toValue3,500);
yes_jl.oninput = ()=>{
    toValue3(yes_jl.value);
}
