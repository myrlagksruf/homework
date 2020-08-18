{
    const fun = () => parent.postMessage({state:'size',id:document.querySelector('title').textContent, data: document.lastChild.offsetHeight}, '*');
    window.onresize = fun;
    window.onload = fun;
    window.oncontextmenu = (e) => {
        const allow = ['IMG', 'AUDIO', 'VIDEO'];
        if(allow.every(v => v !== e.target.nodeName)){
            e.preventDefault();
        }
    }
}