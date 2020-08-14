{
    const fun = () => parent.postMessage({state:'size',id:document.querySelector('title').textContent, data: document.lastChild.offsetHeight}
    (window.onresize = fun, '*'))();
    window.onload = fun;
}