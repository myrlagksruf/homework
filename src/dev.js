const devToolDetect = (_callObj, _options = {contextmenu : true, keydown : {F12:true, KeyU:true, KeyS:true, KeyI:true}})=>{
    const callObj = JSON.parse(_callObj);
    const options = JSON.parse(_options);
    let { contextmenu, keydown } = options;
    if(contextmenu === undefined) contextmenu = true;
    if(keydown === undefined) keydown = {F12:true, KeyU:true, KeyS:true, KeyI:true}
    if(keydown.F12 === undefined) keydown.F12 = true;
    if(keydown.KeyU === undefined) keydown.KeyU = true;
    if(keydown.KeyS === undefined) keydown.KeyS = true;
    if(keydown.KeyI === undefined) keydown.KeyI = true;
    if(contextmenu) window.addEventListener('contextmenu', e => {
        const allow = ['IMG', 'AUDIO', 'VIDEO'];
        if(allow.every(v => v !== e.target.nodeName)){
            e.preventDefault();
        }
    });
    if(Object.values(keydown).some(v => v)){
        const keyOption = [];
        if(keydown.F12) keyOption.push(`e.code==='F12'`);
        if(keydown.KeyU) keyOption.push(`e.ctrlKey&&e.code==='KeyU'`);
        if(keydown.KeyS) keyOption.push(`e.ctrlKey&&e.code==='KeyS'`);
        if(keydown.KeyI) keyOption.push(`e.ctrlKey&&e.shiftKey&&e.code==='KeyI'`);
        const fun = new Function('e', `if(${keyOption.join('||')}) e.preventDefault();`);
        window.addEventListener('keydown', fun);
    }
    window.addEventListener('load', () => {
        let checkStatus, element = document.createElement('div');
        Object.defineProperty(element, 'id', {
            get: ()=>{
                checkStatus = true;
                throw new Error('K');
            }
        });
        const prop = {};
        let { first = false, call = false, re = false } = callObj;
        if(first) first = new Function(first);
        if(call) call = new Function(call);
        if(re) re = new Function(re);
        return (function check(){
            let checkis = checkStatus;
            checkStatus = false;
            console.dir(element);
            console.clear();
            if(checkStatus && call) call();
            if(!checkis && checkStatus && first) first();
            else if(checkis && !checkStatus && re) re();
            requestAnimationFrame(check);
        })();
    });
};
devToolDetect(document.currentScript.getAttribute('callObj'), document.currentScript.getAttribute('options'));