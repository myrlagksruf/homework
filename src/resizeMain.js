window.onmessage = (e) => {
    console.log(e);
    if(e.data.state === 'size') e.source.frameElement.style.height = `${e.data.data}px`;
}
window.addEventListener('load', async () => {
    let iframe = document.querySelectorAll('iframe');
    iframe.forEach(v => {
        v.contentWindow.postMessage(null, '*');
    });
});

async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
    const arr = new Uint8Array(hashBuffer);
    const base64 = btoa(String.fromCharCode.apply(null, arr));
    return base64;
}