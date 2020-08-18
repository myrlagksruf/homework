window.onmessage = (e) => {
    if(e.data.state === 'size') document.querySelector(`#${e.data.id}`).style.height = `${e.data.data}px`;
    console.log('good');
}