window.onmessage = (e) => {
    if(e.data.state === 'size') document.querySelector(`#${e.data.id}`).style.height = `${e.data.data}px`;
}
window.addEventListener('load', () => {
    let iframe = document.querySelectorAll('iframe');
    let len = iframe.length;
    for(let i = 0; i < len; i++) iframe[i].contentWindow.postMessage(null, '*');
})